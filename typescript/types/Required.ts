// Required<Type>

// illustration: Make all properties in T required

type UseRequired<T> = { [P in keyof T]-?: T[P]; }

// eg.
interface Props {
  name: string
}

type User = Required<Props>

const user: User = { name: 'akashi' }
// const obj: User = {}  // 'name' is declared here.

export default UseRequired
