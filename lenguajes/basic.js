console.log('Hola Mundo')

// ES 6
{
  let a = 22
  const b = [12]
  console.log(a)
  b.push(23)
  console.log(b)
}
{
  const a = {user: 'Pepe', edad: 23, favoritos: [2, 5, 7] }
  const b = a
  a.edad += 1
  console.log(b)
  const c = {...a} // NO Deep
  const d = JSON.parse(JSON.stringify(a)) // Deep
  c.user = 'Jose'
  console.log(a,b,c)
}
{
  // ES6 Template strings
  let a = 'Pepe'
  const saludo = 'Hola ' + a + '. ¿Cómom estas?' 
  const saludoTS = `
  Hola ${a}, ¿Como estás?
  ...`
  a = 'Jose'
  console.log(saludoTS)

}

function suma(a = 0, b = 0) {
  return a+b
}

console.log(suma())

const resta = function (a = 0, b = 0) {
  return a-b
}

// ES6 arrow functions

const restaArrow = (a = 0, b = 0) => {
  return a-b
}

console.log(restaArrow(6, 2))

const cuad = a => a*a