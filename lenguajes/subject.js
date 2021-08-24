const { Subject } = require("rxjs");

const sj1$ = new Subject()

const subs = sj1$.subscribe(
  data => console.log(data),
  error => console.log('Error', error.message)
)

sj1$.next('Saludo 1')
sj1$.next('Saludo 2')
sj1$.error(new Error('Error 1'))
sj1$.next('Saludo 3')
sj1$.next('Saludo 4')



subs.unsubscribe()