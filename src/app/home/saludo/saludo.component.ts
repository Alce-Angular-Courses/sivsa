import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'siv-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SaludoComponent implements OnInit {
  nombre!: string;
  label!: string;
  constructor() { }

  ngOnInit(): void {
    this.label = 'Dime tu nombre'
    this.nombre = 'Pepe'
  }

  onBorrar(ev: Event) {
    console.log(ev)
    this.nombre = ''
  }

}
