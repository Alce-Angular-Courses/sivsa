import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasRxService {

  storeName: string
  // tareas: Array<Tarea>
  tareas$: Subject<Array<Tarea>>
  constructor() {
    this.storeName = 'Tareas'
    this.tareas$ = new Subject()
  }

  setTareas(tareas: Array<Tarea>): void {
     localStorage.setItem(this.storeName, JSON.stringify(tareas))
     this.tareas$.next(tareas)
  }

  getTareas(): Array<Tarea> {
    return localStorage.getItem(this.storeName) 
      ? JSON.parse(localStorage.getItem(this.storeName) as string) 
      : []
  }
}
