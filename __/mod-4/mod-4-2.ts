// Reference: yafu-mono

export function badPropEq (prop: string, value: any, obj: object): boolean {
  return obj[prop] === value
}

// -- Solution with very general types -- //
export function propEqGeneral (
  prop: string,
  value: unknown,
  obj: Record<string, keyof any>
): boolean {
  return obj[prop] === value
}

// -- Solution -- //

export type Dictionary<T = any, K extends keyof any = keyof any> = Record<K, T>
export function propEq<T extends Dictionary, K extends keyof T> (
  prop: K,
  value: T[K],
  obj: T
): boolean {
  return obj[prop] === value
}
