import { Component, OnInit } from '@angular/core';
import { ItemMenu } from 'src/app/models/item-menu';

@Component({
  selector: 'siv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title!: string;
  subtitle!: string;
  logo!: string;
  itemsMenu!: Array<ItemMenu>

  constructor() {}

  ngOnInit(): void {
    this.title = 'Curso Angular 12'
    this.subtitle = 'SIVSA - Agosto 2021'
    this.logo = '../../../assets/logo.svg'
    this.itemsMenu = [
      {path: 'home', label: 'Home'},
      {path: 'tareas', label: 'Tareas'},
      {path: 'cursos', label: 'Cursos'},
      {path: 'about', label: 'About'}
    ]
      
  }

}
