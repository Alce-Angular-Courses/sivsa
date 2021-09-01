import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareasRxService } from 'src/app/services/tareas-rx.service';

@Component({
  selector: 'siv-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.scss']
})
export class ListaSimpleComponent implements OnInit {
  // storeName!: string;
  tareas!: Array<Tarea>
  tarea!: Tarea
  constructor(private ts: TareasRxService) { }

  ngOnInit(): void {
    // this.storeName = 'Tareas'
    /* this.tareas = localStorage.getItem(this.storeName) 
    ? JSON.parse(localStorage.getItem(this.storeName) as string)
    : [] */
 
    this.ts.tareas$.subscribe(
      data => {
        this.tareas = data
      }
    )
    this.tarea = new Tarea()
  }

  onAddTarea(): void {
    this.tareas.push(this.tarea)
    this.tarea = new Tarea()
    this.saveData()
  }

  onDeleteTarea(i: number): void {
    this.tareas.splice(i,1)
    this.saveData()
  }

  onChangeTarea(): void {
    this.saveData()
  }

  private saveData(): void {
    // localStorage.setItem(this.storeName, JSON.stringify(this.tareas))
    // this.ts.setTareas(this.tareas)
  }
}
