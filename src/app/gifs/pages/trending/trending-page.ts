import { Component, computed, inject, signal } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gif.service';

// const images: Images[] = [
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',alt: 'Default image' },
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',alt: 'Default image' },
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',alt: 'Default image' },
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',alt: 'Default image' },
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',alt: 'Default image' },
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',alt: 'Default image' },
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',alt: 'Default image' },
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',alt: 'Default image' },
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',alt: 'Default image' },
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',alt: 'Default image' },
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',alt: 'Default image' },
//   { url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',alt: 'Default image' }
// ]

@Component({
  selector: 'app-trending',
  imports: [GifList],
  templateUrl: './trending-page.html',
})
export default class Trending {
  // imagesUrl = signal<Images[]>()

  gifsService = inject(GifService)
  // gifs = computed( () => this.gifsService.trendingGifs() )
}
