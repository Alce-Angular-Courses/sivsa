import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'siv-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit {

  titulo!: FormControl;
  responsable!: FormControl;
  @Output() addTarea: EventEmitter<Tarea>
  constructor() {
    this.addTarea = new EventEmitter()
   }

  ngOnInit(): void {
    this.titulo = new FormControl;
    this.responsable = new FormControl;
  }

  onAddTarea() {
    this.addTarea.next(new Tarea(this.titulo.value,this.responsable.value))
    this.titulo.reset()
    this.responsable.reset()
  }
}
