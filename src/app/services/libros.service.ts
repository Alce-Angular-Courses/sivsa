import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';
import { LIBROS } from '../models/libros.data';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

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

}
