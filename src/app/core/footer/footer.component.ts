import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  author!: string;
  hoy!: Date;
  
  constructor() {}

  ngOnInit(): void {
    this.author = 'alejandro cerezo'
    this.hoy = new Date()    
  }

}
