// 访问者模式
// 主要解决的是数据与算法的耦合问题
// 访问者模式会将多种算法独立归类，并在访问数据的时候根据数据类型自动切换到对应的算法，
// 实现数据的自动响应机制，并且确保算法的自由扩展。

public abstract class Product {

  private String name;
  private LocalDate producedDate;
  private float price;

  public Product(String name, LocalDate producedDate, float price) {
    this.name = name;
    this.producedDate = producedDate;
    this.price = price;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public LocalDate getProducedDate() {
    return producedDate;
  }

  public void setProducedDate(LocalDate producedDate) {
    this.producedDate = producedDate;
  }

  public float getPrice() {
    return price;
  }

  public void setPrice(float price) {
    this.price = price;
  }
}

public class Candy extends Product {

  public Candy(String name, LocalDate producedDate, float price) {
    super(name, producedDate, price);
  }
}

public class Wine extends Product {

  public Wine(String name, LocalDate producedDate, float price) {
    super(name, producedDate, price);
  }
}

public class Fruit extends Product {

  private float weight;

  public Fruit(String name, LocalDate producedDate, float price) {
    super(name, producedDate, price);
    this.weight = weight;
  }

  public float getWeight() {
    return weight;
  }

  public void setWeight() {
    this.weight = weight;
  }
}

public interface Visitor {

  public void visit(Candy candy);

  public void visit(Wine wine);

  public void visit(Fruit fruit)
}

public class DiscountVisitor implements Visitor {

  private LocalDate billDate;

  public DiscountVisitor(LocalDate billDate) {
    this.billDate = billDate;
    System.out.println("结算日期：" + billDate);
  }

  @Override
  public void visit(Candy candy) {
    float rate = 0;
    // ……
  }

  @Override
  public void visit(Wine wine) {}

  @Override
  public void visit(Fruit fruit) {}
}

public class Client {

  public static void main(String[] args) {
    Candy candy = new Candy("ice cream", LocalDate.of(2022, 7, 1), 10.00f);
    Visitor discountVisitor = new DiscountVisitor(LocalDate.of(2022, 10, 1));
    discountVisitor.visit(candy);
  }
}

// 优惠活动
// 访问与接待 接待者接口
public interface Acceptable {
  public void accept(Visitor visitor);
}

public class Candy extends Product implements Acceptable {

  public Candy(String name, LocalDate producedDate, float price) {
    super(name, producedDate, price);
  }

  @Override
  public void accept(Visitor visitor) {
    visitor.visit(this);
  }
}

public class Client {
  public static void main(String[] args) {
    List<Acceptable> products = Arrays.asList(
      new Candy(...),
      new WIne(...),
      new Fruit(...),
    );

    Visitor discountVisitor = new DiscountVisitor(LocalDate.of(2022, 7, 1));
    for (Acceptable product : products) {
      product.accept(discountVisitor);
    }
  }
}
