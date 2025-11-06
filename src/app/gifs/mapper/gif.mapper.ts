import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interface";

export class GifMapper{
  static mapGiphyToGif(giphy: GiphyItem): Gif{
    return {
      id: giphy.id,
      title: giphy.title,
      url: giphy.images.original.url,
    }
  }

  static mapGiphyItemsToGifArray( giphy: GiphyItem[]):Gif[]{
    return giphy.map(this.mapGiphyToGif)
  }
}
