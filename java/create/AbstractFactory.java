// 抽象工厂模式是对工厂的抽象化
// 高度集群化的工厂模式，防止工厂的泛滥

// 星际战争
// 1. 产品类的数据模型构建
public abstract class Unit {

  protected int attack;
  protected int defense;
  protected int health;
  protected int x;
  protected int y;

  public Unit(int attack, int defense, int health, int x, int y) {
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.x = x;
    this.y = y;
  }

  public abstract void show();

  public abstract void attack();
}

// 初、中、高级兵种
public abstract class LowClassUnit extends Unit {

  public LowClassUnit(int x, int y) {
    super(5, 2, 35, x, y);
  }
}

public abstract class MidClassUnit extends Unit {

  public LowClassUnit(int x, int y) {
    super(10, 8, 80, x, y);
  }
}

public abstract class HighClassUnit extends Unit {

  public LowClassUnit(int x, int y) {
    super(25, 30, 300, x, y);
  }
}

// 人类兵种 -> 队员，坦克，战舰
public class Marine extends LowClassUnit {

  public Marine(int x, int y) {
    super(x, y);
  }

  @Override
  public void show() {
    System.out.println("show marine");
  }

  @Override
  public void attack() {
    System.out.println("marine attack");
  }
}

public class Tank extends MidClassUnit {

  public Tank(int x, int y) {
    super(x, y);
  }

  @Override
  public void show() {
    System.out.println("show tank");
  }

  @Override
  public void attack() {
    System.out.println("tank attack");
  }
}

public class Battleship extends HighClassUnit {

  public Battleship(int x, int y) {
    super(x, y);
  }

  @Override
  public void show() {
    System.out.println("show battleship");
  }

  @Override
  public void attack() {
    System.out.println("battleship attack");
  }
}

// 外星兵种
public class Roach extends LowClassUnit {}

public class Poison extends MidClassUnit {}

public class Mammoth extends HighClassUnit {}

// 对兵种的划分，横向划分种族，纵向划分等级，利用抽象和继承描述不同角色之间的关系，同时避免重复的代码。
// 2. 产品生产线的建立
// 六种产品需要对应六个生产线吗，但是是否定的。以族进行对应，应该将工厂分为2个族，每个族下用于3个等级兵种的制造方法。
// 合理规划，避免工厂泛滥

public interface AbstractFactory {
  LowClassUnit createLowClass();

  MidClassUnit createMidClass();

  HighClassUnit createHighClass();
}

// 人类兵工厂
public class HumanFactory extends AbstractFactory {

  private int x;
  private int y;

  public HumanFactory(int x, int y) {
    this.x = x;
    this.y = y;
  }

  @Override
  public LowClassUnit createLowClass() {
    LowClassUnit unit = new Marine(x, y);
    System.out.println("海军陆战队制造成功");
    return unit;
  }

  @Override
  public MidClassUnit createMidClass() {
    MidClassUnit unit = new Tank(x, y);
    System.out.println("坦克制造成功");
    return unit;
  }

  @Override
  public HighClassUnit createHighClass() {
    HighClassUnit unit = new Battleship(x, y);
    System.out.println("巨型战舰制造成功");
    return unit;
  }
}

// 外星母巢
public class AlienFactory extends AbstractFactory {}

public class Client {

  public static void main(String[] args) {
    System.out.println("game starting");

    System.out.println("Human");
    AbstractFactory factory = new HumanFactory(10, 10);

    Unit marine = factory.createLowClass();
    marine.show();

    Unit tank = factory.createMidClass();
    tank.show();

    Unit ship = factory.createHighClass();
    ship.show();

    System.out.println("Alien");
    factory = new AlienFactory(200, 200);

    Unit roach = factory.createLowClass();
    roach.show();

    Unit poison = factory.createMidClass();
    poison.show();

    Unit mammoth = factory.createHighClass();
    mammoth.show();
  }
}
// 与工厂方法模式不同，抽象工厂模式能够应对更加复杂的产品族系，
// 它更类似于一种对“工业制造标准”的制定与推行，各工厂实现都遵循此标准来进行生产活动，
// 以工厂类划分产品族，以制造方法划分产品系列，达到无限扩展产品的目的。
