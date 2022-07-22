// Record<Keys, Type>

// illustration: Construct a type with a set of properties K of type T

type UseRecord<K extends string | number | symbol, T> = { [P in K]: T; }

// eg.
type Keys = 'foo' | 'bar'
type Values = { name: string }

const obj: Record<Keys, Values> = {
  foo: { name: 'asuak' },
  bar: { name: 'shiori' }
}

export default UseRecord
