// 适配器模式
// 当一个对象或类的接口不能匹配用户所期待的接口时，适配器就会充当中间转换的角色，以达到兼容用户接口的目的
// 同时适配器也实现了客户端与接口的解耦，提高了组件的可复用性

// 三相插孔接口
public interface TriplePin {
  // params => 火线(live)、零线(null)、地线(earth)
  public void electrify(int l, int n, int e);
}

// 两相插孔接口
public interface DualPin {
  public void electrify(int l, int n);
}

public class TV implements DualPin {

  @Override
  public void electrify(int l, int n) {
    System.out.println("火线，零线通电");
    System.out.println("tv on");
  }
}

// 适配器，让电视同时适配三相插孔
public class Adapter implements Triple {

  private DualPin dualPinDevice;

  // 接入两相设备
  public Adapter(DualPin dualPinDevice) {
    this.dualPinDevice = dualPinDevice;
  }

  // 适配
  @Override
  public void electrify(int l, int n, int e) {
    // 调整参数，忽略地线参数e
    dualPinDevice.electrify(l, n);
  }
}

public class Client {

  public static void main(String[] args) {
    // TriplePin triplePinDevice = new TV(); // 接口不兼容，报错

    DualPin dualPinDevice = new TV();
    TriplePin triplePinDevice = new Adapter(dualPinDevice);
    triplePinDevice.electrify(1, 0, -1);
  }
}

// 通过适配器，两相电视成功接入三相插孔

// 除了上面实现的 `对象适配器`，其实还可以通过 `类适配器` 来实现接口的适配
public class TVAdapter extends TV implements TriplePin {

  @Override
  public void electrify(int l, int n, int e) {
    super.electrify(l, n);
  }
}

public class Client {

  public static void main(String[] args) {
    TriplePin tvAdapter = new TVAdapter();
    tvAdapter.electrify(1, 0, -1);
  }
}
