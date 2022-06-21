// 观察者模式
// 可以针对被观察者与观察者之间一对多的依赖关系建立起一种行为自动触发机制
// 当被观察对象状态发生变化时主动对外发起广播，以通知所有观察者做出响应。

// eg.商品抢购
public class Shop {

  private String product;
  private List<Buyer> buyers;

  public Shop() {
    this.product = "no goods";
    this.buyers = new ArrayList<>();
  }

  public void register(Buyer buyer) {
    this.buyers.add(buyer);
  }

  public String getProduce() {
    return product;
  }

  public void setProduct(String product) {
    this.product = product;
    notifyBuyers();
  }

  public void notifyBuyers() {
    buyers.stream().forEach(b -> b.inform(this.getProduce()));
  }

  public abstract class Buyer {

    private String name;

    public Buyer(String name) {
      this.name = name;
    }

    // public void buy() {
    //   System.out.println(name + "buy: " + shop.getProduce());
    // }

    public abstract void inform(String product);
  }
}

public class PhoneFans extends Buyer {

  public PhoneFans(String name) {
    super(name);
  }

  @Override
  public void inform(String product) {
    if (product.contains("phone")) {
      System.out.println(name + "buy" + product);
    }
  }
}

public class HandChopper extends Buyer {

  public HandChopper(String name) {
    super(name);
  }

  @Override
  public void inform(String product) {
    System.out.println(name + "buy" + product);
  }
}

public class Client {

  public static void main(String[] args) {
    Buyer akashi = new PhoneFans("akashi");
    Buyer asuka = new HandChopper("asuka");
    Shop shop = new Shop();

    shop.register(akashi);
    shop.register(asuka);

    shop.setProduct("some goods");
    shop.setProduct("phone");
  }
}
