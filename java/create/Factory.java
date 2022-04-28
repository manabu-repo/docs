public abstract class Enemy {

  protected int x, y;

  public Enemy(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public abstract void show();
}

public class Airplane extends Enemy {

  public Airplane(int x, int y) {
    super(x, y);
  }

  @Override
  public void show() {
    System.out.println("draw airplane");
  }
}

public class Tank extends Enemy {

  public Tank(int x, int y) {
    super(x, y);
  }

  @Override
  public void show() {
    System.out.println("draw tank");
  }
}

// default
public class Client {

  public static void main(String[] args) throws Exception {
    int screenWidth = 100;
    System.out.println("game starting");

    Random rand = new Random();
    int x = random.nextInt(screenWidth);

    Enemy airplane = new Airplane(x, 0);
    airplane.show();

    x = random.nextInt(screenWidth);
    Enemy tank = new Tank(x, 0);
    tank.show();
  }
}

// 简单工厂模式
public class SimpleFactory {

  private int screenWidth;
  private Random random;

  public SimpleFactory(int screenWidth) {
    this.screenWidth = screenWidth;
    this.random = new Random();
  }

  public Enemy create(String type) {
    int x = random.nextInt(screenWidth);

    Enemy enemy = null;

    switch (type) {
      case "Airplane":
        enemy = new Airplane(x, 0);
        break;
      case "Tank":
        enemy = new Tank(x, 0);
        break;
    }
    return enemy;
  }
}

public class Client {

  public static void main(String[] args) {
    System.out.println("game starting");
    SimpleFactory factory = new SimpleFactory(100);
    factory.create("Airplane").show();
    factory.create("Tank").show();
  }
}
