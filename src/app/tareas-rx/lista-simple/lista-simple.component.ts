import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareasApiService } from 'src/app/services/tareas-api.service';
import { TareasRxService } from 'src/app/services/tareas-rx.service';

@Component({
  selector: 'siv-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.scss']
})
export class ListaSimpleComponent implements OnInit {

  tareas!: Array<Tarea>
  tarea!: Tarea
  /* constructor(private ts: TareasRxService) { } */
  constructor(private ts: TareasApiService) { }

  ngOnInit(): void {

    this.tarea = new Tarea()
    this.ts.getAll().subscribe(
      data => this.tareas = data
    )
    // this.ts.tareas$.subscribe(data => this.tareas = data)
  }

  onAddTarea(): void {

    this.ts.set(this.tarea).subscribe(
      data => this.tareas.push(data)
    )
    this.tarea = new Tarea()
  }

  onDeleteTarea(i: number): void {
    this.ts.delete(this.tareas[i].id as string).subscribe(
      data => {
        this.ts.getAll().subscribe(
          data => this.tareas = data
        )

        // this.tareas.splice(i,1)
      }
    )
  }

  onChangeTarea(tarea: Tarea): void {
    this.ts.update(tarea.id as string, tarea).subscribe()
    
  }
}
