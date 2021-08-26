import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siv-tareas',
  template: `
  <h2>Tareas</h2>
  <div class="row">
    <siv-lista-simple class="col-6"></siv-lista-simple>
  </div>
  `,
  styles: [
  ]
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
