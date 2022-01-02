export const deparam = (query: string): Record<string, string> => {
  const plus = /\+/g
  const search = /([^&=]+)=?([^&]*)/g
  const decode = (s: string) => decodeURIComponent(s.replace(plus, ' '))
  const params: Record<string, string> = {}
  while (true) {
    const match = search.exec(query)
    if (!match) break
    params[decode(match[1])] = decode(match[2])
  }
  return params
}

export const param = (obj: Record<string, string>) => {
  const parts = []
  for (const name in obj) {
    if (obj[name]) {
      parts.push(`${encodeURIComponent(name)}=${encodeURIComponent(obj[name])}`)
    }
  }
  return parts.join('&')
}
