import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive} from "@angular/router";
import { GifService } from 'src/app/gifs/services/gif.service';

interface MenuOption{
  icon: string;
  label: string;
  route: string,
  subLabel: string;
}

@Component({
  selector: 'gift-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {

  gifsService = inject(GifService)


  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Tendencias',
      route: '/dashboard/trending',
      subLabel: 'Gifs en tendencia'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      route: '/dashboard/search',
      subLabel: 'Buscar Gifs'
    }
  ]

}
