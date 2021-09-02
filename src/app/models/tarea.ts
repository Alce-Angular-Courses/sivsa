interface iTarea {
  id?: string | number;
  titulo: string,
  responsable: string,
  isCompleted: boolean
}

export class Tarea implements iTarea {
  //titulo: string
  constructor(
    public id: string | number = '',
    public titulo: string = '',
    public responsable: string = '',
    public isCompleted: boolean = false
    ) {
    //this.titulo = titulo
  }
}
