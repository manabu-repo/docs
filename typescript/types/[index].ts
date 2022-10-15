// extends: 判断范畴，约束类型
// keyof: 拿到一个对象中的所有键名
// in: 循环
// typeof: 动态把js的对象转换为ts的关键字
// infer: 占位符关键字，可以结合...一起使用
// ['length']: 获取长度
// as: 断言语句 => as const 添加只读属性
// Partial<Type> 将类型 Type 的所有属性标记为可选属性
// Required<Type> 将类型 Type 的所有属性标记为必选属性
// Readonly<Type> 只读属性，不可修改
// Pick<Type, Keys> 从 Type 中过滤出 Keys
// Record<K, T> 标记对象的 key value 类型
// Omit<Type, Keys> 移除 T 中的 U 属性
// Exclude<UnionType, ExcludedMembers> 移除 T 中的 U 属性
// Extract<Type, Union>  Exclude 的反操作，取 T，U两者的交集属性
// NonNullable<Type> 排除类型 T 的 null | undefined 属性
// Parameters<Type> 获取一个函数的所有参数类型
// ReturnType<Type> 获取函数类型 T 的返回类型
// InstanceType<Type> 获取一个类的返回类型
