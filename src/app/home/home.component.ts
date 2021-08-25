import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siv-home',
  template: `
  <h2>Home - saludos</h2>
    <div class="row">
      <siv-saludo class="col-6"></siv-saludo>
      <siv-saludo-ref class="col-6"></siv-saludo-ref>
      <siv-saludo-rx class="col-6"></siv-saludo-rx>       
    </div> 
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
