// 原型模式，参照原型进行批量生产。
// 用对象创建对象，而不是用类创建对象，以此达到效率的提升。

// 深拷贝多份 EnemyPlane
public class EnemyPlane implements Cloneable {

  private int x, y = 0;
  private Bullet bullet = new Bullet();

  public EnemyPlane(int x) {
    this.x = x;
  }

  public int getX() {
    return x;
  }

  public int getY() {
    return y;
  }

  public void fly() {
    y++;
  }

  public setX(int x) {
    this.x = x;
  }

  // 重写克隆方法，浅拷贝
  // @Override
  // public EnemyPlane clone() throws CloneNotSupportedException {
  //   return (EnemyPlane) super.clone();
  // }

  // 深拷贝
  @Override
  public EnemyPlane clone() throws CloneNotSupportedException {
    EnemyPlane clone = (EnemyPlane) super.clone();
    clone.setBullet(this.bullet.clone());
    return clone;
  }
}

public class Bullet implements Cloneable {

  private int num = 0;

  private Bullet() {}

  public setBullet(int num) {
    this.num = num;
  }

  @Override
  public Bullet clone() throws CloneNotSupported {
    return (Bullet) super.clone();
  }
}

// 克隆工厂
public class EnemyPlaneFactory {

  // 单例恶汉模式创建原型
  private static EnemyPlane protoType = new EnemyPlane(200);

  // 克隆实例
  public static EnemyPlane getInstance(int x) {
    EnemyPlane clonePlane = protoType.clone();
    clonePlane.setX(x);
    return clonePlane;
  }
}
// 需考虑深拷贝的同时又使用懒加载进行创建，才能最大程度实现优化。
