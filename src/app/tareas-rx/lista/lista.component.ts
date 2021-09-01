import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'siv-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  //storeName!: string;
  tareas!: Array<Tarea>
  constructor(private ts: TareasService) { }

  ngOnInit(): void {
    // this.storeName = 'Tareas'
    // this.tareas = localStorage.getItem(this.storeName) 
    // ? JSON.parse(localStorage.getItem(this.storeName) as string)
    // : []
    this.tareas = this.ts.getTareas()
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
    // localStorage.setItem(this.storeName, JSON.stringify(this.tareas))
    this.ts.setTareas(this.tareas)
  }

}
