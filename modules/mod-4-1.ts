// Reference: @mediatool/core-types

export type BadDbGetProp = <T>(
  propName: string,
  collection: T[],
  id: string
) => Promise<any>

// -- Solution -- //
