import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import Trending from '../pages/trending/trending-page';
import { map, tap } from 'rxjs';

const GIF_KEY = 'searchHistory';


const loadLocalStorage = () => {
  const gifsFromLs = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLs);
  return gifs;
}

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  TrendingLoading = signal(true);
  searchHistory = signal<Record<string, Gif[]>>(loadLocalStorage());
  searchHistoryKeys = computed(()=> Object.keys(this.searchHistory()))

  constructor(){
    this.loadTrendingGifs();
  }

  saveToLocalStorage = effect(() => {
    localStorage.setItem(GIF_KEY, JSON.stringify(this.searchHistory()));
  })


  loadTrendingGifs(){

    this.http.get<GiphyResponse>(`${environment.giphyUrl}/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        offset: 0,
        rating: 'g'
      },
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.TrendingLoading.set(false);
    })

  }

  searchGifs(busqueda: string){
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: busqueda,
          limit: 10,
          offset: 0,
          rating: 'g'
        },
      })
      .pipe(
        map( ({data}) => data),
        map(gifs => GifMapper.mapGiphyItemsToGifArray(gifs)),

        // TODO Historial
        tap(gifs => {
          this,this.searchHistory.update( history => ({
            ...history,
            [busqueda.toLocaleLowerCase()]: gifs,
          }))
        })
      );
  }

  getHistoryGifs(busqueda: string): Gif[]{
    return this.searchHistory()[busqueda.toLocaleLowerCase()] ?? [];
  }
}
