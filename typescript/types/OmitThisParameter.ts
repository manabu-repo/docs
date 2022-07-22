// OmitThisParameter<Type>

// illustration: Removes the 'this' parameter from a function type.

type UseOmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T

export default UseOmitThisParameter
