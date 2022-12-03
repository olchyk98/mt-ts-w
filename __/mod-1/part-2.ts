/*
* > mod-1-part-2 <
*
* This part shows different
* ways to define a function.
*
* It also shows how compiler
* may infer the return value.
* */

import { last } from 'ramda'

/* ------------------------------ */
// 1.
export function addTwoNumbers (first: number, second: number): number {
  return first + second
}
/* ------------------------------ */

/* ------------------------------ */
// 2. Inferred Return Type: "number"
export function getLastSalary (salaries: number[]) {
  return last(salaries)
}
/* ------------------------------ */

/* ------------------------------ */
// 3. Inferred Return Type: "string"
export const suffixPriceSign = (value: number) => (
  `${value}$`
)
/* ------------------------------ */

/* ------------------------------ */
// 4. Introducing "void"
export const executeCommand = (command: string): void => {
  throw new Error(command)

  // XXX: Throws an error: because
  // return type is "void".
  // return 2
}
/* ------------------------------ */
