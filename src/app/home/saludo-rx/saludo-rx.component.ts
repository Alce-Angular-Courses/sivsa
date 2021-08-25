import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'siv-saludo-rx',
  templateUrl: './saludo-rx.component.html',
  styleUrls: ['./saludo-rx.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SaludoRxComponent implements OnInit {
  label!: string;
  fcNombre!: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.fcNombre = new FormControl('Pepe');
    this.label = 'Dime tu nombre'
  }

  onBorrar(ev: Event) {
    console.log(ev)
    this.fcNombre.reset()
  }

}
