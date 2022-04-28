// eg.
public class Sun {

  // 构造方法私有化
  private Sun() {}
}

// 恶汉单例
public class Sun {

  private static final Sun sun = new Sun();

  private Sun() {}

  public static Sun getInstance() {
    return sun;
  }
}

// 懒汉单例
public class Sun {

  private static Sun sun;

  private Sun() {}

  public static Sun getInstance() {
    if (sun == null) {
      sun = new Sun();
    }
    return sun;
  }
}

// 懒汉加锁 注意加锁的位置
public class Sun {

  private static volatile Sun sun;

  private Sun() {}

  public static Sun getInstance() {
    if (sun == null) {
      synchronized (Sun.class) {
        if (sun == null) {
          sun = new Sun();
        }
      }
    }
    return sun;
  }
}
