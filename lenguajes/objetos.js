function Persona(nombre = '', edad = 0) {
  this.nombre= nombre
  this.edad = edad
}
Persona.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
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