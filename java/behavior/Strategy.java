// 策略模式
// 强调行为的灵活切换，如一个类的多个方法有着类似的行为接口，可以将他们抽离出来作为一系列策略类，在运行时
// 灵活对接，变更期算法策略，以适应不同的场景

// 算法策略
public interface Strategy {
  public int calculate(int a, int b);
}

public class Addition implements Strategy {

  @Override
  public int calculate(int a, int b) {
    return a + b;
  }
}

public class Subtraction implements Strategy {

  @Override
  public int calculate(int a, int b) {
    return a - b;
  }
}

public class Calculator {

  private Strategy strategy;

  public void setStrategy(Strategy strategy) {
    this.strategy = strategy;
  }

  public int getResult(int a, int b) {
    return this.strategy.calculate(a, b);
  }
}

public class Client {

  public static void main(String[] args) {
    Calculator calculator = new Calculator();
    calculator.setStrategy(new Addition());
    System.out.println(calculator.getResult(1, 1));

    calculator.setStrategy(new Subtraction());
    System.out.println(calculator.getResult(1, 1));
  }
}
// 策略模式让策略与系统环境彻底解耦，通过对算法策略的抽象、拆分，再拼装、接入外设，
// 使系统行为的可塑性得到了增强
