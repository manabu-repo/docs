// 桥接模式
// 将抽象与实现分离，使二者可以各自单独变化而不受对方约束，使用时再将它们组合起来，
// 就像架设桥梁一样连接它们的功能，如此降低了抽象与实现这两个可变维度的耦合度，以保证系统的可扩展性。

// 画笔 => 分离，组合，扩展
public abstract class Pen {

  protected Ruler ruler;

  public Pen(Ruler ruler) {
    this.ruler = ruler;
  }

  public abstract void draw();
}

public class BlackPen extends Pen {

  public BlackPen(Ruler ruler) {
    super(ruler);
  }

  @Override
  public void draw() {
    System.out.print("黑")；
    ruler.regularize();
  }
}

public class WhitePen extends Pen {

  public WhitePen(Ruler ruler) {
    super(ruler);
  }

  @Override
  public void draw() {
    System.out.print("白");
    ruler.regularize();
  }
}

public interface Ruler {
  public void regularize();
}

public class SquareRuler implements Ruler {

  @Override
  public void regularize() {
    System.out.print("正方形");
  }
}

public class TriangleRuler implements Ruler {

  @Override
  public void regularize() {
    System.out.print("三角形");
  }
}

public class CircleRuler implements Ruler {

  @Override
  public void regularize() {
    System.out.print("圆形");
  }
}

public class Client {

  public static void main(String[] args) {
    new WhitePen(new CircleRuler()).draw();
    new WhitePen(new SquareRuler()).draw();
    new WhitePen(new TriangleRuler()).draw();

    new BlackPen(new CircleRuler()).draw();
    new BlackPen(new SquareRuler()).draw();
    new BlackPen(new TriangleRuler()).draw();
  }
}

// 桥接模式将原本对形状的继承关系改为聚合（组合）关系，使形状实现从颜色中分离出来，
// 最终完成多类组件维度上的自由扩展与拼装，使形与色的自由搭配成为可能。
