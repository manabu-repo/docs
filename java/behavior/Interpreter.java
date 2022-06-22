// 解释器模式
// 针对某种语言并基于其语法特征创建一系列的表达式类，利用树结构模式将表达式对象组装起来，
// 最终将其翻译成计算机能够识别并执行的语义树。

// 解释器模式与组合模式类似，但组合模式强调的是数据组合的结构，而解释器是关注对行为的抽象与多态。

// eg.脚本语言设计实现鼠标操作
public interface Expression {

  public void interpret();
}

// 终极表达式
public class Move implements Expression {

  private int x, y;

  public Move(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public void interpret() {
    System.out.println("move mouse: [" + x + "," + y + "]" );
  }
}

public class LeftKeyDown implements Expression {

  public void interpret() {
    System.out.println("left key down");
  }
}

public class LeftKeyUp implements Expression {

  public void interpret() {
    System.out.println("left key up");
  }
}

public class Delay implements Expression {

  private int seconds;

  public Delay(int seconds) {
    this.seconds = seconds;
  }

  public int getSeconds() {
    return seconds;
  }

  public void interpret() {
    System.out.println("delay: " + seconds);
    try {
      Thread.sleep(seconds * 1000);
    } catch (InterruptedException e) {
      e.prinsStackTrace();
    }
  }
}

// 非终极表达式 -> 终极表达式的组合
// 鼠标左键
public class LeftKeyClick implements Expression {

  private Expression leftKeyDown;

  private Expression leftKeyUp;

  public LeftKeyClick() {
    this.leftKeyDown = new LeftKeyDown();
    this.leftKeyUp = new LeftKeyUp();
  }

  public void interpret() {
    leftKeyDown.interpret();
    leftKeyUp.interpret();
  }
}

// 循环表达式
public class Repetition implements Expression {

  private int loopCount;
  // 循环体内的子表达式序列
  private Expression loopBodySequence;

  public Repetition(Expression loopBodySequence, int loopCount) {
    this.loopBodySequence = loopBodySequence;
    this.loopCount = loopCount;
  }

  public void interpret() {
    while (loopCount > 0) {
      loopBodySequence.interpret();
      loopCount--;
    }
  }
}

// 表达式序列
public class Sequence implements Expression {

  private List<Expression> expressions;

  public Sequence(List<Expression> expressions) {
    this.expressions = expressions;
  }

  public void interpret() {
    expressions.forEach(exp -> exp.interpret());
  }
}

public class Client {

  public static void main(String[] args) {
    Expression sequence = new Sequence(Arrays.asList(
      new Move(500, 600),
      new Repetition(
        new Sequence(Arrays.asList(new LeftKeyClick(), new Delay(1))),
        5
      ),
      new RightKeyDown(),
      new Delay(7200),
    ));

    sequence.interpret();
  }
}

// 解释器模式完美地对各种表达式进行拆分、抽象、关系化与多态化，定义出一个完备的语法构建框架，
// 最终通过表达式的组装与递归调用完成对目标语言的解释。
// 基于自相似性的树形结构构建的表达式模型使系统具备良好的代码易读性与可维护性，
// 灵活多态的表达式也使系统的可扩展性得到全面提升。
