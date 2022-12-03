/*
* > mod-2-part-4 <
*
* This part describes
* the use of "unknown" and "any."
*
* Everytime you want to use "any",
* use "unknown" instead. It will
* teach you to understand your code
* better.
* */

/* ------------------------------ */
// 1. Variables with type "any".
export const user: any = 2
export const organization: any = {}

// "username" has type "any"
export const { username } = user.profile

// "weirdVar" has type "any"
export const weirdVar = organization + 3
/* ------------------------------ */

/* ------------------------------ */
// 2. "any" variable passed in an function.
export const person: any = 2

export function getPlane (planeId: string) {
  return `${planeId}:plane`
}

export const plane = getPlane(person)
/* ------------------------------ */

/* ------------------------------ */
// 3. Unknown Structure on an API response
interface UserResponse {
  user: unknown
  code: number
}

export const userResponse: UserResponse

// XXX: Forbidden: unsafe data referencing.
// const name = userResponse.user.name
/* ------------------------------ */
