// Extract<Type, Union>

// illustration: Extract from T those types that are assignable to U
// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.

type UseExtract<T, U> = T extends U ? T : never

// eg.
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'c'>
// type T0 = "a" | "c"

export default UseExtract
