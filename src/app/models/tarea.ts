interface iTarea {
  titulo: string,
  responsable: string,
  isCompleted: boolean
}

export class Tarea implements iTarea {
  //titulo: string
  constructor(
    public titulo: string = '',
    public responsable: string = '',
    public isCompleted: boolean = false
    ) {
    //this.titulo = titulo
  }
}
