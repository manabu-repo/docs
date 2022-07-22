// Partial<Type>

// illustration: Make all properties in T optional
// generates a new type based on T with all the property

type UsePartial<T> = { [P in keyof T]?: T[P] | undefined; }

// eg.
interface User {
  name: string
  email: string
}

const user: Partial<User> = { name: 'asuka' }

export default UsePartial
