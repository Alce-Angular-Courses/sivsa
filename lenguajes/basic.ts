/* let saludo: string 
saludo = 'Hola'
 */
let saludo = 'Hola'
// saludo = 22 -> error de tipos
console.log(saludo)

class Direccion {
  calle!: string;
}

class Tipos {
  user!: string
  edad!: number;
  isAlumno!: boolean
  cursos!: string[]
  notas!: Array<number>
  direccion!: Direccion
  constructor () {
    // this.user = ''
    // this.direccion = new Direccion()
    this.direccion = {calle: ''}
  }
}