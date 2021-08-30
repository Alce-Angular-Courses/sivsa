import { Component, Input, OnInit } from '@angular/core';
import { ItemMenu } from 'src/app/models/item-menu';

@Component({
  selector: 'siv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() itemsMenu!: Array<ItemMenu>
  constructor() { }

  ngOnInit(): void {}

}
