/*
* > mod-2-part-1 <
*
* This part shows
* how to define a type in different
* contexts.
* */

/* ------------------------------ */
// 1. "Type" is a variable for types.
// Like in real variables, you can
// put any value (type) in it.
export type FirstName = string
/* ------------------------------ */

/* ------------------------------ */
// 2. Type Union
export type UltraValue = string | number | boolean

export function ultraFunction (value: UltraValue) {
  return `${value} is sus`
}
/* ------------------------------ */

/* ------------------------------ */
// 2. String Union
export type HumanName = 'John' | 'Sara'

export function invertName (name: HumanName): HumanName {
  // XXX: Notice the autocompletion
  // window that pop-ups when
  // you write any of the names.
  return name === 'John'
    ? 'Sara'
    : 'John'
}
/* ------------------------------ */

/* ------------------------------ */
// 3. Function Type
export type CreateNickname = (name: string) => string

export const createNickname: CreateNickname = (
  // XXX: Notice that you
  // didn't have to add type for the argument,
  // as it was already defined in type.
  (name) => `${name}#001`
)
/* ------------------------------ */

/* ------------------------------ */
// 4. Introducing "Promise" (async)
export type FetchUserName = (userId: string) => Promise<string>

export const fetchUserName: FetchUserName = async (userId) => (
  `${userId}::Sara`
)

export const fetchUserNamePromise: FetchUserName = (userId) => (
  Promise.resolve(`${userId}::Sara`)
)
/* ------------------------------ */
