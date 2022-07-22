// Pick<Type, Keys>

// illustrating: From `Type`, pick a set of properties whose keys are in the union `Keys`.

type UsePick<T, K extends keyof T> = { [P in K]: T[P]; }

// eg.
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, "title" | "completed">

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
}

export default UsePick
