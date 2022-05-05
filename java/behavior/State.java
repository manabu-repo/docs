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
