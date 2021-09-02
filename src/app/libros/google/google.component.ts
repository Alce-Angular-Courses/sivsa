import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Component({
  selector: 'siv-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss',
              '../mock/mock.component.scss']
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
    ).catch(
      error => console.error('Error de conexión', error)
    )
    this.clave = ''
  }


  onBuscarRx(): void {
    if(!this.clave) {
      return
    }
    console.log('Buscando', this.clave)
    /* const params = {
      q: 'intitle:' + this.clave
    } */
    const params = new HttpParams().append('q', 'intitle:' + this.clave)
    const headers = {}
    /* const headers = new HttpHeaders({
      'x-algo' : 'ffhgrutru7989686igjhgmjht6586798hkjhjhfdy'
    }) */
    const url = environment.urlLibros
    this.http.get(url, {params, headers } ).pipe(
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
      data => this.libros = data,
      error => console.error('Error de conexión', error)
    )
    this.clave = ''
  }
}
