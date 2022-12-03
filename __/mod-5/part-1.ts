/* ------------------------------ */
// 1. Simple Condition
export type K<T> = T extends number ? string : boolean
/* ------------------------------ */

/* ------------------------------ */
// 2. Nested Condition
interface EntityWithSpeed {
  speed: number
}

interface EntityWithName {
  name: string
}

export type GetSpeedOrName<T extends EntityWithName | EntityWithSpeed> = (
  T extends EntityWithName
    ? T['name']
    : T extends EntityWithSpeed
      ? T['speed']
      : never
)
/* ------------------------------ */
