// ConstructorParameters<Type>

// illustration: Obtain the parameters of a constructor function type in a tuple

type UseConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never

// eg.
interface User {
  name: string
  surname: string
}

class UserManager {
  private name: string;
  private surname: string;

  constructor(user: User) {
    this.name = user.name;
    this.surname = user.surname;
  }
}

type UserManagerConstructorParams = ConstructorParameters<typeof UserManager>
// type UserManagerConstructorParams = [user: User]

export default UseConstructorParameters
