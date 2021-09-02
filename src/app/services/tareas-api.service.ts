import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasApiService {
  urlApi: string
  constructor(private http: HttpClient) { 
    this.urlApi = environment.urlTareas
  }

  get(id: string): Observable<Tarea> {
    return this.http.get(this.urlApi+id) as Observable<Tarea> 
  }  // read
  getAll(): Observable<Array<Tarea>> {
    return this.http.get(this.urlApi) as Observable<Array<Tarea>>
  }  // read - All
  set(data: Tarea): Observable<Tarea>  {
    return this.http.post(this.urlApi, data) as Observable<Tarea> 
  } // create post
  update(id: string, data: Tarea): Observable<Tarea> {
    return this.http.put(this.urlApi+id, data) as Observable<Tarea> 
  } // put/patch
  delete(id: string): Observable<{}> {
    return this.http.delete(this.urlApi+id)
  }
}
