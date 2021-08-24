
interface PersonaI {
  nombre: string, 
  edad: number
  altura?: number
}

class Persona implements PersonaI {
  /* nombre: string
  edad: number
  constructor(nombre = '', edad: number) {
    this.nombre = nombre
    this.edad = edad
  } */

  // nombre: string
  // edad: number
  constructor(
    public nombre: string = '', 
    public edad: number) {
    // this.nombre = nombre
    // this.edad = edad
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`)
  }
}


// let p1: PersonaI

const p1 = new Persona('Pepe', 24)
console.log(p1)
const p2 = new Persona('Rosa', 25)
// p2.altura = 178
// delete p2.edad
console.log(p1)
console.log(p2)
p1.saludar()
p2.saludar()

class Alumno extends Persona {
  curso: string
  constructor(nombre = '', edad = 0, curso = '') {
    super(nombre, edad)
    this.curso = curso
  }

  saludar() {
    super.saludar()
    console.log(`Estudio ${this.curso}`)
  }
}


const a1 = new Alumno('Elena', 31, 'Angular')
console.log(a1)
a1.saludar()