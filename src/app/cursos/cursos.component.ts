import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siv-cursos',
  template: `
    <h2>Cursos</h2>
    <div class="row">
      <siv-form-td class="col-6"></siv-form-td>
      <siv-form-md class="col-6"></siv-form-md>
    </div> 
  `,
  styles: [
  ]
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
