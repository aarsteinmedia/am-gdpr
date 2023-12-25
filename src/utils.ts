export const useId = (prefix?: string) => {
  const s4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (`${prefix ?? `:${s4()}`}-${s4()}`)
}