import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'siv-byservice',
  templateUrl: './byservice.component.html',
  styleUrls: ['./byservice.component.scss',
              '../mock/mock.component.scss']
})
export class ByserviceComponent implements OnInit {
  clave!: string;
  libros!: Array<Libro>
  constructor(private librosSrv: LibrosService) { }

  ngOnInit(): void {
    this.libros = []
  }

  onBuscar(): void {
    if(!this.clave) {
      return
    }
    console.log('Buscando', this.clave)
    this.librosSrv.get(this.clave).then(
      data => this.libros = data
    )
    this.clave = ''
  }

  onBuscarRx(): void {
    if(!this.clave) {
      return
    }
    console.log('Buscando', this.clave)
    this.librosSrv.getRx(this.clave).subscribe(
      data => this.libros = data,
      error => console.error('Error de conexión', error)
    )
    this.clave = ''

  }


}
