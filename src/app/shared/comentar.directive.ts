import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sivComentar]'
})
export class ComentarDirective implements OnInit {

  @Input() sivComentar!: string;
  constructor(private e: ElementRef) { 
    console.log(e)
  }

  ngOnInit(): void {
    this.e.nativeElement.setAttribute('title', this.sivComentar )
  }

  @HostListener('click') cambiar(): void {
    this.e.nativeElement.setAttribute('title', 'Directiva anulada' )
  }

}
