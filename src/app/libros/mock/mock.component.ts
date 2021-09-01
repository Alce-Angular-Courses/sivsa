import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'siv-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {
  clave!: string;
  libros!: Array<Libro>
  constructor() { }

  ngOnInit(): void {
    this.libros = []
  }

  onBuscar(): void {
    if(!this.clave) {
      return
    }
    console.log('Buscando', this.clave)
    this.clave = ''

  }

}
