// ThisParameterType<Type>

// illustration: Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
type UseThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown

// eg.
const add = (x: number, y: number): number => x + y
type T0 = ThisParameterType<typeof add>
// type T0 = unknown

export default UseThisParameterType