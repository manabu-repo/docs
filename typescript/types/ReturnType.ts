// ReturnType<Type>

// illustration: Obtain the return type of a function type

type UseReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

// eg.
type T0 = ReturnType<() => string>
// type T0 = string

export default UseReturnType
