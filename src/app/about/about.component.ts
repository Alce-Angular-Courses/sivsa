import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siv-about',
  template: `
  <h2>About</h2>
    <div class="row">
      <siv-blog></siv-blog>
    </div>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
