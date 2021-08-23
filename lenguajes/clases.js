

class Persona {
  constructor(nombre = '', edad = 0) {
    this.nombre = nombre
    this.edad = edad
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre}`)
  }
}


const p1 = new Persona('Pepe', 24)
console.log(p1)
const p2 = new Persona('Rosa', 25)
p2.altura = 178
delete p2.edad
console.log(p1)
console.log(p2)
p1.saludar()
p2.saludar()

class Alumno extends Persona {
  constructor(nombre = '', edad = 0, curso = '') {
    super(nombre, edad)
    this.curso = curso
  }

  saludar() {
    super.saludar()
    console.log(`Estudio ${this.curso}`)
  }
}


a1 = new Alumno('Elena', 31, 'Angular')
console.log(a1)
a1.saludar()