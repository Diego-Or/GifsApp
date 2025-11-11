import { Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
})
export default class SearchPage {
  gifsService = inject(GifService)
  gifs = signal<Gif[]>([]);

  onSearch(busqueda: string){
    this.gifsService.searchGifs(busqueda)
      .subscribe((resp) => {
        this.gifs.set(resp);
      });
  }

}

