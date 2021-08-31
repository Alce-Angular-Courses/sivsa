import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso, Turno } from 'src/app/models/alumno';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'siv-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.scss']
})
export class FormMdComponent implements OnInit {

  turnos!: Array<Turno>
  cursos!: Array<Curso>
  fgAlumno!: FormGroup
  isProd!: boolean
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.isProd = environment.production
    this.turnos = TURNOS
    this.cursos = CURSOS
    // this.fgAlumno = new FormGroup()
    this.fgAlumno = this.fb.group({
       nombre: ['' , [Validators.required, Validators.minLength(2)]],
       apellidos: '',
       dni: ['', [], ],
       email: ['',[Validators.email]],
       nacim: '',
       coment: '',
       isOk: [false, [Validators.requiredTrue]],
       turno: null,
       curso: null,
    })
  }

  onSubmit() {
    console.log('Enviando', this.fgAlumno.value)
    this.fgAlumno.reset()
  }

}
