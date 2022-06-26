type Observer = {
  list: Record<string, any[]>,
  on: (value: string, fn: () => void) => void
  emit: (value: string) => void
  remove: (value: string) => boolean
}

const observer: Observer = {
  list: {},
  on,
  emit,
  remove,
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

function remove(key: string): boolean {
  const isKeyExist = Object.keys(observer.list).includes(key)
  if (!isKeyExist) return true

  delete observer.list[key]
  return true
}

export { observer }
