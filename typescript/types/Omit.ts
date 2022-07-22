// Omit<Type, Keys>

// illustration: Constructs a type by picking all properties from Type and then removing Keys

type UseOmit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }

// eg.
type User = {
  name: string
  email: string
}

const user: Omit<User, 'email'> = { name: 'asuka' }

export default UseOmit
