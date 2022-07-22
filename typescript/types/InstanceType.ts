// InstanceType<Type>

// illustration: Obtain the return type of a constructor function type

type UseInstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any

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

type UserMangerInstanceType = InstanceType<typeof UserManager>
// type UserMangerInstanceType = UserManager

export default UseInstanceType
