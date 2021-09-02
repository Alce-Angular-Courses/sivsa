import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';
import { LIBROS } from '../models/libros.data';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  urlGoogle: string
  constructor(private http: HttpClient) {
    this.urlGoogle =  environment.urlLibros + '?q=intitle:' 
   }

  getMock(clave: string): Array<Libro> {
    return LIBROS
  }

  getMockAsync(clave: string): Promise<Array<Libro>> {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(LIBROS)
      }, 1000)
    })
  }

  getMockRx(clave: string): Observable<Array<Libro>> {
    return new Observable( observer => {
      setTimeout(()=>{
        observer.next(LIBROS)
      }, 1000)
    })
  }

  get(clave: string): Promise<Array<Libro>> {
    const url = this.urlGoogle + clave
    return this.http.get(url).toPromise().then(
      (data: any) => {
        console.log(data.items)
         return data.items.map( (item:any) => {
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
  }

  getRx(clave: string): Observable<Array<Libro>> {
    const url = this.urlGoogle + clave
    return this.http.get(url).pipe(
      catchError( (error: any) => {
        console.log('En el servicio', error)
        return throwError(error)
      })
    ).pipe(
      map( (data: any) => {return data.items.map( (item:any) => {
        return {
          id: item.id,
          titulo: item.volumeInfo.title,
          autor: item.volumeInfo.authors,
          fecha: item.volumeInfo.publishedDate,
        }
      })
    })
    )

  }

}
