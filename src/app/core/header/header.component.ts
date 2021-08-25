import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  logo: string;
  constructor() {
    this.title = 'Curso Angular'
    this.logo = '../../../assets/logo.svg'
   }

  ngOnInit(): void {
  }

}
