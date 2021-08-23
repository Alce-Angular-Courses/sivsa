setTimeout( () => {
  console.log('Pasó el tiempo')
}, 2000)

console.log('Esperando')


function hacerAsync(timer) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const n = Math.random()
      if(n < 0.5) { // acierto
        resolve(n)
      } else { // error
        reject(new Error(n))
      }
    }, timer)
  })
  
}

hacerAsync(1000).then(
  data => console.log('OK', data)
).catch(
  error => console.log('Error', error.message)
);


// ES2017 Async / await

(async () => {
  try {
    const data = await hacerAsync(3000)
    console.log('Await: OK', data)
  } catch (error) {
    console.log('Await: Error', error.message)
  }
})()
