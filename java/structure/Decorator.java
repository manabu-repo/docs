// 装饰器模式
// 能够在运行时动态的为原始对象增加一些额外的功能，使其变得强大
// 化妆
public interface Showable {
  public void show();
}

public class Girl implements Showable {

  @Override
  public void show() {
    System.out.println("素颜");
  }
}

public class Decorator implements Showable {

  Showable showable;

  public Decorator(Showable showable) {
    this.showable = showable;
  }

  @Override
  public void show() {
    System.out.print("妆容 [ ");
    showable.show();
    System.out.print(" ] ");
  }
}

public class Client {

  public static void main(String[] args) {
    new Decorator(new Girl()).show();
    // output -> 妆容 [ 素颜 ]
  }
}

// 重构 装饰器抽象类
public abstract class Decorator implements Showable {

  protected Showable showable;

  public Decorator(Showable showable) {
    this.showable = showable;
  }

  @Override
  public void show() {
    showable.show();
  }
}

// 粉底类
public class FoundationMakeup extends Decorator {

  public FoundationMakeup(Showable showable) {
    super(showable);
  }

  @Override
  public void show() {
    System.out.print("打粉底[");
    showable.show();
    System.out.print("]");
  }
}

// 口红类
public class Lipstick extends Decorator {

  public Lipstick(Showable showable) {
    super(showable);
  }

  @Override
  public void show() {
    System.out.print("涂口红[");
    showable.show();
    System.out.print("]");
  }
}

public class Client {

  public static void main(String[] args) {
    Showable madeUpGirl = new Lipstick(new FoundationMakeup(new Girl()));
    madeUpGirl.show();
  }
}
// 客户需求是多变且无法预估的，要实现不同功能的自由组合，以“继承”的方式来完成是不现实的，会造成子类泛滥，维护或扩展起来举步维艰
// 而装饰器模式可以将不同功能的单个模块规划至不同的装饰器类中，各装饰器类独立自主，各司其职。
// 客户端可以根据自己的需求自由搭配各种装饰器，每加一层装饰就会有新的特性体现出来，
// 巧妙的设计让功能模块层层叠加，装饰之上套装饰，最终使原始对象的特性动态地得到增强。
