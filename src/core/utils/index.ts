export function defProperty(obj: object, key: string, value: any, enumerable?: boolean): void {
  Object.defineProperty(obj, key, {
    value: value,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}
