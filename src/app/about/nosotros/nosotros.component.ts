import { Component, OnInit } from '@angular/core';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'siv-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  imagenes!: Array<any>
  faBeer!: any;
  constructor() { }

  ngOnInit(): void {
    this.imagenes = [944, 1011, 984].map((n) => {
       return {
        titulo: 'Imagen ' + n, 
        texto: "Texto " + n,
        imagen:  `https://picsum.photos/id/${n}/900/500`};
      }
    );
this.faBeer = faBeer
       
  }

}
