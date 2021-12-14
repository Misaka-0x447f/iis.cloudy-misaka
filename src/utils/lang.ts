export const nop = (..._: any[]) => ((...__: any[]) => null) as any

export const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
