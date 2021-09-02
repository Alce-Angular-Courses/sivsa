import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable( {
  providedIn: 'root'
} )
export class TareasService {
  storeName: string;
  constructor() {
    this.storeName = 'Tareas'
  }

  setTareas(tareas: Array<Tarea>): void {
     localStorage.setItem(this.storeName, JSON.stringify(tareas))
  }

  getTareas(): Array<Tarea> {
    return localStorage.getItem(this.storeName) 
      ? JSON.parse(localStorage.getItem(this.storeName) as string) 
      : []
  }
}
