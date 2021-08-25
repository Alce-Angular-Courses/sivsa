interface iTarea {
  titulo: string,
  responsable: string,
  isCompletes: boolean
}

export class Tarea implements iTarea {
  //titulo: string
  constructor(
    public titulo: string = '',
    public responsable: string = '',
    public isCompletes: boolean = false
    ) {
    //this.titulo = titulo
  }
}
