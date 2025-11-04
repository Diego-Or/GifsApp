import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuOptions } from './side-menu-options/side-menu-options';
import { SideMenuHeader } from './side-menu-header/side-menu-header';

@Component({
  selector: 'gift-side-menu',
  imports: [ SideMenuHeader, SideMenuOptions,],
  templateUrl: './side-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenu { }
