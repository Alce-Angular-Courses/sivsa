import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'siv-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  tareas!: Array<Tarea>
  constructor() { }

  ngOnInit(): void {
    this.tareas = []
  }

  onAddTarea(tarea: Tarea) {
    this.tareas.push(tarea)
    console.log(this.tareas)
  }

}
