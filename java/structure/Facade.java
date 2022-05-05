// 门面模式
// 将多个不同的子系统接口封装起来，并对外提供统一的高层接口，使复杂的子系统更加易用

// 反例
public class VegVendor {

  public void purchase() {
    System.out.println("供应蔬菜");
  }
}

public class Helper {

  public void cook() {
    System.out.println("下厨烹饪");
  }
}

public class Client {

  public void eat() {
    System.out.println("开始用餐");
  }

  public void wash() {
    System.out.println("洗碗");
  }

  public static void main(String[] args) {
    VegVendor vegVendor = new VegVendor();
    vegVendor.purchase();

    Helper sister = new Helper();
    sister.cook();

    Client client = new Client();
    client.eat();
    client.wash();
  }
}

// 以上实现操作太多，面对更复杂的子系统如果步骤再多，客户端对各个子系统操作不当，就会产生风险
// 凡事不可能亲力亲为，参考商业街的门店商铺，提供的便利性服务更容易获得顾客光临，这里我们需要在客户端化繁为简

public class Facade {

  private VegVendor vegVendor;
  private Chef chef;
  private Waiter waiter;
  private Cleaner cleaner;

  public Facade() {
    // 准备蔬菜
    this.vegVendor = new VegVendor();
    vegVendor.purchase();

    // 雇佣厨师
    this.chef = new Chef();

    // 雇佣服务员
    this.waiter = new Waiter();

    // 雇佣后台人员
    this.cleaner = new Cleaner();
  }

  public void order() {
    waiter.order();
    chef.cook();
    waiter.serve();
    cleaner.clean();
    cleaner.wash();
  }
}
// 至此，对外只暴露了一个order()方法，客户端的操作就变得简单而优雅了。
// 结构最终内繁外简，达到资源共享，简化操作的目的
// 门面模式也降低了客户端与子系统之间的依赖度，高内聚才能低耦合
