type Observer = {
  list: Record<string, any[]>,
  on: (value: string, fn: () => void) => void
  emit: (value: string) => void
}

const observer: Observer = {
  list: {},
  on,
  emit,
}

function on(key: string, fn: () => void): void {
  if (!observer.list[key]) observer.list[key] = []

  observer.list[key].push(fn as never)
}

function emit(key: string): void {
  // console.log('list', observer.list)
  const useKey = Object.keys(observer.list).find(k => k === key)
  if (!useKey) return

  observer.list[key].forEach((fn: () => void) => fn())
}

export { observer }
