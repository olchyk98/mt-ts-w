/*
* > mod-2-part-2 <
*
* This part shows
* how to define an interface in
* different contexts.
* */

/* ------------------------------ */
// 1.
export interface User {
  name: string
  age: number
  phoneNumber?: string
}
/* ------------------------------ */

/* ------------------------------ */
// 2. Using a "type union" as a value type.
export interface Car {
  name: string
  yearOfProduction: string | number
}
/* ------------------------------ */

/* ------------------------------ */
// 3. Referencing custom types
export type GoblinName = 'Small Goblin' | 'Huge Goblin'

export interface Goblin {
  hp: number
  attackSpeed: number
  name: GoblinName
}
/* ------------------------------ */

/* ------------------------------ */
// 4. Referencing other interfaces
export interface Engine {
  power: number
}

export interface Plane {
  modelName: string
  engines: Engine[]
}
/* ------------------------------ */

/* ------------------------------ */
// 5. Self Referencing
export interface ConditionalCalculation {
  a: ConditionalCalculation | string
  b: ConditionalCalculation | string
}

export const calculation: ConditionalCalculation = {
  a: {
    a: 'a',
    b: 'b',
  },
  b: 'b',
}
/* ------------------------------ */
