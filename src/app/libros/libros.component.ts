import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siv-libros',
  template: `
    <h2>Libros</h2>
    <div class="row">
      <siv-mock class="col-6"></siv-mock>
      <siv-google class="col-6"></siv-google>
      <siv-byservice class="col-6"></siv-byservice>
    </div>
  `,
  styles: [
  ]
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
