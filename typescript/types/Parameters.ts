// Parameters<Type>

// illustration: Obtain the parameters of a function type in a tuple

type UseParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

// eg.
const add = (x: number, y: number): number => x + y;

type T0 = Parameters<typeof add>
// type T0 = [x: number, y: number]

export default UseParameters
