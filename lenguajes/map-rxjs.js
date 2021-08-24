const { of, map, filter } = require("rxjs");

const data = [1,2,3,4,5]

const o1$ = of(...data)


const subs = o1$.pipe(
  map( item => item*item )
).pipe(
  filter( item => !(item%2))
)
.subscribe(
  data => console.log(data),
)




subs.unsubscribe()