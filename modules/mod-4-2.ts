// Reference: yafu-mono

export function badPropEq (prop: string, value: any, obj: object): boolean {
  return obj[prop] === value
}
