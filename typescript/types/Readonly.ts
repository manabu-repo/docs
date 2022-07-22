// Readonly<Type>

// illustrating: Make all properties in T readonly

type UseReadonly<T> = { readonly [P in keyof T]: T[P]; }

// eg.
interface Todo {
  title: string
}

const todo: Readonly<Todo> = { title: 'learn' }
// todo.title = 'sleep'  // Cannot assign to 'title' because it is a read-only property.

export default UseReadonly
