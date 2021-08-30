import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TruncatePipe } from 'src/app/shared/truncate.pipe';

@Component({
  selector: 'siv-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SaludoComponent implements OnInit {
  nombre!: string;
  label!: string;
  constructor(private truncate :TruncatePipe) { }

  ngOnInit(): void {
    this.label = this.truncate.transform('Dime tu nombre', 10)
    
    this.nombre = 'Pepe'
  }

  onBorrar(ev: Event) {
    console.log(ev)
    this.nombre = ''
  }

}
