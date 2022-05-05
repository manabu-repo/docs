// 享元模式
// flyweight 意为轻量级，即享元模式可以使程序变得更加轻量化
// 当系统存在大量对象，并且这些对象又同时具有相同的内部状态时，我们可以使用享元模式共享相同的元件对象
// 以此避免对象泛滥造成的资源浪费

// 早期RPG游戏色块的加载
// 图块
public class Tile {

  private String image;
  private int x, y;

  public Tile(String image, int x, int y) {
    this.image = image;
    this.x = x;
    this.y = y;
  }

  public void draw() {
    System.out.println("draw tile x: " + x + " y: " + y);
  }
}

public interface Drawable {
  public void draw(int x, int y);
}

public class River implements Drawable {

  private String image;

  public River() {
    this.image = "river";
  }

  @Override
  public void draw(int x, int y) {
    System.out.println("draw river x: " + x + "y: " + y);
  }
}

public class Grass implements Drawable {

  private String image;

  public Grass() {
    this.image = image;
  }

  @Override
  public void draw(int x, int y) {
    System.out.println("draw grass x: " + x + " y: " + y);
  }
}

public class Stone implements Drawable {}

public class House implements Drawable {}

// 图元工厂类
public class TileFactory {

  private Map<String, Drawable> images;

  public TileFactory() {
    image = new HashMap<String, Drawable>();
  }

  public Drawable getDrawable(String image) {
    // 缓存池里如果没有图元，实例化并放入缓存池
    if (!images.containsKey(image)) {
      // switch (image) {
      //   case "river":
      //     images.put(image, new River());
      //     break;
      //   case "grass":
      //     images.put(image, new Grass());
      //     break;
      //   case "stone":
      //     images.put(image, new Stone());
      //     break;
      //   case "house":
      //     images.put(image, new House());
      //     break;
      // }

      Map<String, Drawable> map = new HashMap<String, Drawable>();

      map.put("river", new River());
      map.put("grass", new Grass());
      map.put("stone", new Stone());
      map.put("house", new House());

      images.put(image, map.get(image));
    }
    return images.get(image);
  }
}

public class Client {

  public static void main(String[] args) {
    TileFactory factory = new TileFactory();

    factory..getDrawable("river").draw(10, 10);
    factory.getDrawable("grass").draw(10, 20);
    factory.getDrawable("house").draw(10, 30);
  }
}
