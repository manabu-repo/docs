type Observer = {
  list: []
  on: (value: any) => void
  emit: () => void
}

const observer: Observer = {
  list: [],
  on,
  emit,
}

function on(fn: () => void): void {
  observer.list.push(fn as never)
}

function emit(): void {
  observer.list.forEach((fn: () => void) => fn())
}

export { observer }
