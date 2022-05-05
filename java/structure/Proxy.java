// 代理模式
// 当客户端不能或者不合适直接方面目标业务对象时，业务对象可以通过代理把自己的业务托管起来
// 使客户端间接的通过代理进行业务访问
// 此访问方式方便用户的同时，还能对客户端的访问进行一定的控制

// 互联网访问接口
public interface Internet {
  public void httpAccess(String url);
}

public class Modem implements Internet {

  private String password = "123456";

  public Modem(String password) throws Exception {
    if (!this.password.equals(password)) {
      throw new Exception("拨号失败，请重试！");
    }
    System.out.println("连接成功！");

    @Override
    public void httpAccess(String url) {
      System.out.println("正在访问： " + url);
    }
  }

  private void setPassword(String password) {
    this.password = password;
  }
}

// 路由代理，黑名单
public class RouterProxy implements Internet {
  // 被代理对象
  private Internet modem;

  private List<String> blackList = Arrays.asList("movie", "game", "music");

  public RouterProxy() throws Exception {
    this.modem = new Modem("123456");
  }

  @Override
  public void httpAccess(String url) {
    for (String keyword : blackList) {
      if (url.contains(keyword)) {
        System.out.println("访问禁止！" + url);
        return;
      }
    }

    // 转发请求之 modem 以访问互联网
    modem.httpAccess(url);
  }
}

// 可以看见路由器构造方法为实现对“猫”的全面管控，主动实例化了“猫”对象，而非由外部注入。
// 从某种意义上讲，这是代理模式区别于装饰器模式的一种体现
// 装饰器模式往往更加关注为其他对象增加功能，让客户端更加灵活地进行组件搭配；
// 而代理模式更强调的则是一种对访问的管控，甚至是将被代理对象完全封装而隐藏起来，使其对客户端完全透明。

public class Client {

  public static void main(String[] args) throws Exception {
    Internet proxy = new RouterProxy();

    proxy.httpAccess("http://www.movie.com");
    proxy.httpAccess("http://www.learn.com");
    proxy.httpAccess("http://www.game.com");
    proxy.httpAccess("http://www.work.com");
  }

  /**
  连接成功！
  访问禁止！http://www.movie.com
  正在访问：http://www.learn.com
  访问禁止！http://www.game.com
  正在访问：http://www.work.com
   */
}

// 重构，动态代理
public interface Internet {

  public void httpAccess(String url);

  public void fileAccess(String path);
}

public class Switch implements Internet {
  @Override
  public void fileAccess(String path) {
    System.out.println("访问内网： " + path);
  }
}

public class BlackListFilter implements InvocationHandler {

  private List<String> blackList = Arrays.asList("movie", "game", "music");

  // 被代理的真实对象
  private Object origin;

  public BlackListFilter(Object origin) {
    // 注入被代理对象
    this.origin = origin;
    System.out.println("开启黑名单过滤功能……");
  }

  @Override
  public Object invoke(Object proxy, Method mth, Object[] args) throws Exception {
    String arg = args[0].toString();

    for (String keyword : blackList) {
      if (arg.contains(keyword)) {
        System.out.println("访问禁止！" + arg);
        return null;
      }
    }

    // 调用被代理对象方法
    System.out.println("校验通过，转向实际业务……");
    return mth.invoke(origin, arg);
  }
}

// RouterProxy 删除抽出的逻辑
public class RouterProxy implements Internet {
  // 被代理对象
  private Internet modem;

  public RouterProxy() throws Exception {
    this.modem = new Modem("123456");
  }

  @Override
  public void httpAccess(String url) {
    // 转发请求之 modem 以访问互联网
    modem.httpAccess(url);
  }
}

public class Client {

  public static void main(String[] args) throws Exception {
    Internet internet = (Internet) Proxy.newProxyInstance(
      Internet.class.getClassLoader(),
      Internet.class.getInstance(),
      new BlackListFilter(new RouterProxy())
    );
    internet.httpAccess("http://www.movie.com");
    internet.httpAccess("http://www.work.com");

    Internet intranet = (Internet) Proxy.newProxyInstance(
      Switch.class.getClassLoader(),
      Switch.class.getInstance(),
      new BlackListFilter(new Switch())
    );
    intranet.httpAccess("192.168.3.2/use/movie");
    intranet.httpAccess("192.168.3.2/use/learn");
  }
}

// 代理模式不仅能增强原业务功能，更重要的是还能对其进行业务管控。
// 对用户来讲，隐藏于代理中的实际业务被透明化了，
// 而暴露出来的是代理业务，以此避免客户端直接进行业务访问所带来的安全隐患，
// 从而保证系统业务的可控性、安全性。
