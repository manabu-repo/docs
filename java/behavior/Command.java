// 命令模式
// 一个对象向另一个或多个对象发送的指令信息。命令的发送方负责下达指令，接收方根据命令触发相应的行为。
// 作为一种数据驱动的设计模式，可以将信息封装成一个对象，双方只通过传递各种命令对象来完成任务
// 同时还支持批量执行，顺序执行以及命令的反执行等操作。

// eg. 开关命令
public interface Command {
  // 执行命令
  void exe();

  // 反向执行命令
  void unexe();
}

public class SwitchCommand implements Command {

  private Bulb bulb;

  public SwitchCommand(Bulb bulb) {
    this.bulb = bulb;
  }

  @Override
  public void exe() {
    bulb.on();
  }

  @Override
  public void unexe() {
    bulb.off();
  }
}

public class Bulb {

  public void on() {
    System.out.println("on");
  }

  public void off() {
    System.out.println("off");
  }
}

public class Switcher {

  private Command command;

  public void setCommand(COmmand command) {
    this.command = command;
  }

  public void buttonPush() {
    System.out.println("push down……");
    command.exe();
  }

  public void buttonPop() {
    System.out.println("push up……");
    command.unexe();
  }
}

public class Client {

  public static void main(String[] args) {
    Switcher switcher = new Switcher();
    Bulb bulb = new Bulb();

    Command command = new SwitchCommand(bulb);
    switcher.setCommand(command);
    switcher.buttonPush();
    switcher.buttonPop();
  }
}

// 闪烁
public class FlashCommand extends Command {

  private Bulb bulb;

  // 闪烁命令运行状态
  private volatile boolean neonRun = false;

  @Override
  public void exe() {
    if (!neonRun) {
      neonRun = true;
      System.out.println("start");
      new Thread(() -> {
        try {
          while (neonRun) {
            bulb.on();
            Thread.sleep(500);
            bulb.off();
            Thread.sleep(500);
          }
        } catch (InterruptedException e) {
          e.prinsStackTrace();
        }
      }).start();
    }
  }

  @Override
  public void unexe() {
    neonRun = false;
    System.out.println("end");
  }
}
