/*
* > mod-2-part-3 <
*
* This part describes
* the use of "never".
* */

/* ------------------------------ */
// 1. Deprecated field that exists.
// in a database, but should be used.
export interface Organization {
  // XXX: It's a string union.
  name: 'Mediatool'
  createdAt: number
  // XXX: Cannot be referenced.
  updatedAt: never
}

export const org: Organization

// XXX: Failed: cannot assign to "never".
// org.updatedAt = '123'
/* ------------------------------ */

/* ------------------------------ */
// 2. A function that throws an error
export function getCurrentRequest (): never {
  throw new Error('The function is not implemented.')
}
/* ------------------------------ */

/* ------------------------------ */
// 3. A function that rejects a promise
export async function executeCurrentRequest (): Promise<never> {
  Promise.reject(new Error('The function is not implemented.'))
  // OR
  throw new Error('The function is not implemented.')
}
/* ------------------------------ */
