import { Component, OnInit } from '@angular/core';
import { ItemMenu } from '../models/item-menu';

@Component({
  selector: 'siv-about',
  template: `
  <h2>About</h2>
    <div class="row">
      <siv-menu [itemsMenu]="itemsMenu" class="col-12"></siv-menu>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {
  itemsMenu!: Array<ItemMenu>
  constructor() { }

  ngOnInit(): void {
    this.itemsMenu = [
      {path:'nosotros', label: 'Acerca de nosotros'},
      {path:'blog', label: 'Nuestro blog'}
    ]
  }
  
  
}
