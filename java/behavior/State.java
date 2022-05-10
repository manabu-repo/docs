// 状态模式
// 构架出一套完备的事务内部状态转换机制，并将内部状态包裹起来对外部不可见，
// 使其行为能随其状态的改变而改变，同时简化了事务的复杂的状态变化逻辑

// 红绿灯
public interface State {
  void switchToGreen(TrafficLight trafficLight);

  void switchToYellow(TrafficLight trafficLight);

  void switchToRed(TrafficLight trafficLight);
}

public class Red implements State {

  @Override
  public void switchToGreen(TrafficLight trafficLight) {
    System.out.println("Error! red can't switch to green");
  }

  @Override
  public void switchToYellow(TrafficLight trafficLight) {
    trafficLight.setState(new Yellow());
    System.out.println("yellow switch on 5s");
  }

  @Override
  public void switchToRed(TrafficLight trafficLight) {
    System.out.println("Error! red are already");
  }
}

public class Yellow implements State {

  @Override
  public void switchToGreen(TrafficLight trafficLight) {
    trafficLight.setState(new Green());
    System.out.println("green switch on 60s");
  }

  @Override
  public void switchToYellow(TrafficLight trafficLight) {
    System.out.println("Error! yellow is already");
  }

  @Override
  public void switchToRed(TrafficLight trafficLight) {
    trafficLight.setState(new Red());
    System.out.println("red switch on 60s");
  }
}

public class Green implements State {

  @Override
  public void switchToGreen(TrafficLight trafficLight) {
    System.out.println("Error! green is already");
  }

  @Override
  public void switchToYellow(TrafficLight trafficLight) {
    trafficLight.setState(new Yellow());
    System.out.println("yellow switch on 5s");
  }

  @Override
  public void switchToRed(TrafficLight trafficLight) {
    System.out.println("Error! green can't switch to red");
  }
}

public class TrafficLight {

  State state = new Red();

  public void setState(State state) {
    this.state = state;
  }

  // 通行状态
  public void switchToGreen() {
    state.switchToGreen(this);
  }

  // 警示状态
  public void switchToYellow() {
    state.switchToYellow(this);
  }

  // 禁行状态
  public void switchToRed() {
    state.switchToRed(this);
  }
}

public class Client {

  public static void main(String[] args) {
    TrafficLight trafficLight = new TrafficLight();
    trafficLight.switchToYellow();
    trafficLight.switchToGreen();
    trafficLight.switchToYellow();
    trafficLight.switchToRed();
    trafficLight.switchToRed();
  }
}

// eg. 二元态
public class Switcher {

  private boolean state = false;

  public void switchOn() {
    if (state == false) {
      state = true;
      System.out.println("light on");
    } else {
      System.out.println("error, light is already on");
    }
  }

  public void switchOff() {
    if (state == true) {
      state = false;
      System.out.println("light off");
    } else {
      System.out.println("error light ia already off");
    }
  }
}

public class Client {

  public static void main(String[] args) {
    Switcher switcher = new Switcher();

    switcher.switchOff();
    switcher.switchOn();
    switcher.switchOff();
    switcher.switchOn();
    switcher.switchOn();
  }
}

// 从类结构上看，状态模式与策略模式非常类似，其不同之处在于，
// 策略模式是将策略算法抽离出来并由外部注入，从而引发不同的系统行为，其可扩展性更好；
// 而状态模式则将状态及其行为响应机制抽离出来，这能让系统状态与行为响应有更好的逻辑控制能力，
// 并且实现系统状态主动式的自我转换。
