// NonNullable<Type>

// illustration: Exclude null and undefined from T

type UseNonNullable<T> = T extends null | undefined ? never : T

// eg.
type T0 = NonNullable<string | number | undefined | null>
// type T0 = string | number

export default UseNonNullable
