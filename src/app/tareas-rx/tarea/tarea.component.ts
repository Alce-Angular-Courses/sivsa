import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'siv-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  @Input() tarea!: Tarea
  @Input() i!: number
  @Output() deleteTarea: EventEmitter<number>
  @Output() changeTarea: EventEmitter<number>
  constructor() {
    this.deleteTarea = new EventEmitter()
    this.changeTarea = new EventEmitter()
   }

  ngOnInit(): void {
      this.tarea = {...this.tarea}
  }

  onSendChangeTarea(): void {
    this.changeTarea.next(this.i)
  }

  onSendDeleteTarea(): void {
    this.deleteTarea.next(this.i)
  }

}
