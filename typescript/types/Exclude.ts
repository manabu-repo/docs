// Exclude<UnionType, ExcludedMembers>

// illustrating: Exclude from T those types that are assignable to U
// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.

type UseExclude<T, U> = T extends U ? never : T

// eg.
type T0 = Exclude<'a' | 'b' | 'c', 'a'>
// type T0 = "b" | "c"

// eg.
type Props = symbol | number
type T1 = Exclude<string | number, Props>
// type T1 = string

export default UseExclude
