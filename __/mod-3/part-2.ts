/*
* > mod-3-part-2 <
*
* This part describes
* the use of casting.
* */

/* ------------------------------ */
// 1. Simple casting
export function convertMessage<T extends Record<string, string>> (): T {
  return <T> {}
}
/* ------------------------------ */

/* ------------------------------ */
// 2. Incomplete declaration
interface Car {
  speed: number
  name: string
}

export function createCar (): Car {
  return <Car> { name: 'Tesla S' }
}
/* ------------------------------ */
