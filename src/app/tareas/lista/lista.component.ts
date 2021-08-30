import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'siv-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  storeName!: string;
  tareas!: Array<Tarea>
  constructor() { }

  ngOnInit(): void {
    this.storeName = 'Tareas'
    this.tareas = localStorage.getItem(this.storeName) 
    ? JSON.parse(localStorage.getItem(this.storeName) as string)
    : []
  }

  onAddTarea(tarea: Tarea):void {
    this.tareas.push(tarea)
    this.saveData()
  }

  onDeleteTarea(i: number): void {
    this.tareas.splice(i, 1)
    this.saveData()
  }

  onChangeTarea(i: number): void {
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted
    this.saveData()
  }

  private saveData(): void {
    localStorage.setItem(this.storeName, JSON.stringify(this.tareas))
  }

}
