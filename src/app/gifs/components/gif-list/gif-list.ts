import { Component, Input, input } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';
@Component({
  selector: 'gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
})
export class GifList {
  // @Input() gifs: Images[] = [];
  gifs = input.required<Images[]>();
}
