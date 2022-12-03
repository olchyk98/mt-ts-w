// Reference: @mediatool/core-types

export type BadDbGetProp = <T>(
  propName: string,
  collection: T[],
  id: string
) => Promise<any>

// -- Solution -- //

export type DbGetProp = <T extends Record<string, unknown>, K extends keyof T> (
  propName: K,
  collection: T[],
  id: string
) => Promise<T[K]>
