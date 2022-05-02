// 模板方法
// 对一系列类行为（方法）的模式化，将总结的行为规律固化在基类中
// 对具体的行为实现则进行抽象化并交给子类完成，以便实现子类对基类模板的套用

// 对于任何哺乳类，都存在一个live方法
// public void live () {
//   move();
//   eat();
// }
// 我们可以将其提出放入基类，方便子类对模板进行套用

// 鲸鱼
public class Whale extends Mammal {

  public void move() {
    System.out.println("鲸鱼在海里游泳……");
  }

  public void eat() {
    System.out.println("鲸鱼捕鱼进食");
  }
}

// 人类
public class Human extends Mammal {

  public void move() {
    System.out.println("人类在路上开车……");
  }

  public void eat() {
    System.out.println("人类去餐馆吃饭");
  }
}

// 哺乳类
public abstract class Mammal {

  public abstract void move();

  public abstract void eat();

  // final 使模板方法不能够被重写修改
  public final void live() {
    move();
    eat();
  }
}

public class Client {

  public static void main(String[] args) {
    Mammal mammal = new Whale();
    mammal.live();

    mammal = new Human();
    mammal.live();
  }
}

// 另一个例子，项目管理模板 => 瀑布模型
public abstract class PM {

  // 需求分析
  public abstract String analyze();

  // 软件设计
  public abstract String design(String project);

  // 代码开发
  public abstract String develop(String project);

  // 质量测试
  public abstract Boolean test(String project);

  // 上线发布
  public abstract void release(String project);

  // 项目启动
  protected final void kickoff() {
    String requirement = analysis();
    String designCode = design(requirement);

    if (!test(designCode)) {
      designCode = develop(designCode);
    }

    release(designCode);
  }
}

public class HRProject extends PM {}

public class APIProject extends PM {}
// 虚实结合。模板方法巧妙的结合了抽象类虚部方法与实部方法，分别定义了可变部分和不可变部分
// 可变部分留给子类去实现，保证系统的扩展性
// 不可变部分是对基类的逻辑调用，为子类提供了一种固有的应用指导规范

// 模板方法模式可以将总结出来的规律沉淀为一种既定格式，并固化于模板中以供子类继承，
// 对未确立下来的步骤方法进行抽象化，使其得以延续、多态化，最终架构起一个平台，
// 使系统实现在不改变预设规则的前提下，对每个分步骤进行个性化定义的目的
