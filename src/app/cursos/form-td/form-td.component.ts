import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curso, Turno, Alumno } from 'src/app/models/alumno';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'siv-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.scss']
})
export class FormTdComponent implements OnInit {
  turnos!: Array<Turno>
  cursos!: Array<Curso>
  isProd!: boolean
  @ViewChild('form', {static: true}) form!: ElementRef
  @ViewChild('ngForm', {static: true}) ngForm!: NgForm
  constructor() { }

  ngOnInit(): void {
    this.isProd = environment.production
    this.turnos = TURNOS
    this.cursos = CURSOS
    console.dir(this.form.nativeElement)
    console.log(this.ngForm)

  }

  onSubmit(data: Alumno) {
    console.log('Enviando', {data})
    console.log('Enviando', this.ngForm.value)
  }
}
