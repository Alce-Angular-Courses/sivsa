
// import  { Observable } from 'rxjs'

const { Observable } = require("rxjs")

// const o1$ = Observable.create()

const o1$ = new Observable( (observer) => {
  observer.next('Saludo 1')
  observer.next('Saludo 2')
  observer.error(new Error('Error 1'))
  observer.next('Saludo 3')
  observer.next('Saludo 4')
  observer.complete()
  observer.next('Saludo 5')
})

const subs = o1$.subscribe(
  data => console.log(data),
  error => console.log('Error', error.message)
)

subs.unsubscribe()