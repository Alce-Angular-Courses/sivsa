import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'siv-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {
  clave!: string;
  libros!: Array<Libro>
  constructor(private ls: LibrosService) { }

  ngOnInit(): void {
    this.libros = []
  }

  onBuscar(): void {
    if(!this.clave) {
      return
    }
    console.log('Buscando', this.clave)
    this.clave = ''
    this.libros = this.ls.getMock(this.clave)

  }

  onBuscarAsync(): void {
    if(!this.clave) {
      return
    }
    console.log('Buscando', this.clave)
    this.clave = ''
    this.ls.getMockAsync(this.clave).then(
      data => this.libros = data
    )
  }

  onBuscarRx(): void {
    if(!this.clave) {
      return
    }
    console.log('Buscando', this.clave)
    this.clave = ''
    this.ls.getMockRx(this.clave).subscribe(
      data => this.libros = data
    )
  }

}
