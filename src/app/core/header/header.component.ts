import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title!: string;
  subtitle!: string;
  logo!: string;

  constructor() {}

  ngOnInit(): void {
    this.title = 'Curso Angular 12'
    this.subtitle = 'SIVSA - Agosto 2021'
    this.logo = '../../../assets/logo.svg'
  }

}
