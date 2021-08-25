import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'siv-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SaludoRefComponent implements OnInit {
  @ViewChild('nombre', {static: true} ) nombreRef!: ElementRef;
  constructor() {
    console.log(this.nombreRef)
   }

  ngOnInit(): void {
     console.log(this.nombreRef)
  }


}
