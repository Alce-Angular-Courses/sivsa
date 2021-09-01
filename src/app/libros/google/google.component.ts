import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Component({
  selector: 'siv-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {
  clave!: string;
  libros!: Array<Libro>
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.libros = []
  }

  onBuscar(): void {
    if(!this.clave) {
      return
    }
    console.log('Buscando', this.clave)
    const url = environment.urlLibros + '?q=intitle:' + this.clave
    this.http.get(url).toPromise().then(
      (data: any) => {
        console.log(data.items)
        this.libros = data.items.map( (item:any) => {
          return {
            id: item.id,
            titulo: item.volumeInfo.title,
            autor: item.volumeInfo.authors,
            fecha: item.volumeInfo.publishedDate,
          }
        })
      }
    )
    this.clave = ''
  }


  onBuscarRx(): void {
    if(!this.clave) {
      return
    }
    console.log('Buscando', this.clave)
    const url = environment.urlLibros + '?q=intitle:' + this.clave
    this.http.get(url).pipe(
      map( (data: any) => {return data.items.map( (item:any) => {
        return {
          id: item.id,
          titulo: item.volumeInfo.title,
          autor: item.volumeInfo.authors,
          fecha: item.volumeInfo.publishedDate,
        }
      })
    })
    ).subscribe(
      data => this.libros = data
    )
    this.clave = ''
  }
}
