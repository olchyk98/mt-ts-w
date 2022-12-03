/*
* > mod-3-part-1 <
*
* This part describes
* the use of generics.
* */

/* ------------------------------ */
// 0. Base
export type ReturnType<T> = T
/* ------------------------------ */

/* ------------------------------ */
// 1. A simple generic function
export async function fetchEndpoint<T> (defaultResponse: T): Promise<T> {
  return defaultResponse
}
/* ------------------------------ */

/* ------------------------------ */
// 2. A simple generic function in type
export type FetchEndpoint = <T> (url: string) => Promise<T>
/* ------------------------------ */

/* ------------------------------ */
// 3. Typed generic
export type FetchName = (
  <T extends 'John' | 'Elisabeth'> (userId: string) => Promise<T>
)
/* ------------------------------ */

/* ------------------------------ */
// 4. Generic on an interface
export interface APIResponse <ID extends number> {
  id: ID
  name: string | number
  fetchUser(): Promise<unknown>
}
/* ------------------------------ */

/* ------------------------------ */
// 5. Generic on type
export type FetchEntityProfile<T extends string | number> = (id: T) => (
  Promise<unknown>
)
/* ------------------------------ */
