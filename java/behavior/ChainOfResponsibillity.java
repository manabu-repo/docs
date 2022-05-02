// 责任链模式
// 允许业务请求者将责任链视为一个整体并对其发起请求，而不必关系链条内部具体的业务逻辑与流程走向
// 请求者直接通过访问业务责任链来完成业务的处理，最终实现请求者与响应者的解耦

// eg.财务审批
// 审批人
public abstract class Approver {

  protected String name;
  protected Approver nextApprover;

  public Approver(String name) {
    this.name = name;
  }

  protected Approver setNextApprover(Approver nextApprover) {
    this.nextApprover = nextApprover;
    return this.nextApprover;
  }

  public abstract void approve(int amount);
}

// 财务专员
public class Staff extends Approver {

  public Staff(String name) {
    super(name);
  }

  @Override
  public void approve(int amount) {
    if (amount <= 1000) {
      System.out.println("审批通过，[专员： " + name + "]");
    } else {
      System.out.println("无权审批，升级处理。[专员： " + name + "]");
      this.nextApprover.approve(amount);
    }
  }
}

// 财务经理
public class Manager extends Approver {

  public Manager(String name) {
    super(name);
  }

  @Override
  public void approve(int amount) {
    if (amount <= 5000) {
      System.out.println("审批通过，[经理： " + name + "]");
    } else {
      System.out.println("无权审批，升级处理。[经理： " + name + "]");
      this.nextApprover.approve(amount);
    }
  }
}

// 财务总监
public class CFO extends Approver {

  public CFO(String name) {
    super(name);
  }

  @Override
  public void approve(int amount) {
    if (amount <= 10000) {
      System.out.println("审批通过，[财务总监： " + name + "]");
    } else {
      System.out.println("驳回申请。[财务总监： " + name + "]");
    }
  }
}

public class Client {

  public static void main(String[] args) {
    Approver person = new Staff("yama");

    // 链式编程配置责任链
    person
      .setNextApprover(new Manager("shiori"))
      .setNextApprover(new CFO("asuka"));

    person.approve(1000);
    person.approve(4000);
    person.approve(9000);
    person.approve(12000);
  }
}
