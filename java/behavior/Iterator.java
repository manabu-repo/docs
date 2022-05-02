// 迭代器模式
// 在不暴露集合内部数据结构的情况下，提供了一种机制来按顺序访问集合中的各个元素，而不需要知道集合内部的构造。

// Book
public class Book {

  class Page {

    private int index;

    public Page(int index) {
      this.index = index;
    }

    @Override
    public String toString() {
      return "read to" + this.index + "page";
    }
  }

  private List<Page> pages = new ArrayList<Page>();

  public Book(int pageSize) {
    for (int i = 0; i < pageSize; i++) {
      pages.add(new Page(i + 1));
    }
  }

  public void read() {
    for (Page page : pages) {
      System.out.println(page);
    }
  }
}

// 分离迭代器
// eg. 行车记录仪
public class DrivingRecorder {

  // 当前记录
  private int index = -1;
  // 记录最大值为10条记录
  private String[] records = new String[10];

  public void append(String record) {
    if (index == 9) {
      index = 0;
    } else {
      index++;
    }

    records[index] = record;
  }

  // 循环显示
  public void display() {
    for (int i = 0; i < 10; i++) {
      System.out.println(i + ": " + records[i]);
    }
  }

  // 按新旧顺序显示
  public void displayByOrder() {
    for (
      int i = index, loopCount = 0;
      loopCount < i;
      i = i == 0 ? i = 9 : i - 1, loopCount++
    ) {
      System.out.println(records[i]);
    }
  }
}

public class Client {

  public static void main(String[] args) {
    DrivingRecorder device = new DrivingRecorder();

    // 存入12条记录
    for (int i = 0; i < 12; i++) {
      device.append("video_" + i);
    }

    device.display();
    /**
      video_10
      video_11
      video_2
      video_3
      video_4
      video_5
      video_6
      video_7
      video_8
      video_9
    */

    device.displayByOrder();
    /**
      video_11
      video_10
      video_9
      video_8
      video_7
      video_6
      video_5
      video_4
      video_3
      video_2
    */
  }
}

// 此时，如果用户不对数组进行维护，而随意的对数据进行删除或修改，就会导致索引位置错乱，再次添加记录
// 很可能会导致最新的数据被覆盖，导致用户数据安全无法保证，为此，需要定义一个迭代器

public interface Iterator<E> {
  E next();

  boolean hasNext();
}

public class DrivingRecorder implements Iterable<String> {

  private int index = -1;
  private String[] records = new String[10];

  public void append(String record) {
    if (index == 9) {
      index = 0;
    } else {
      index++;
    }

    records[index] = record;
  }

  @Override
  public Iterable<String> iterator() {
    return new Itr();
  }

  private class Itr implements Iterator<String> {

    int cursor = index;
    int loopCount = 0;

    @Override
    public boolean hasNext() {
      return loopCount < 10;
    }

    @Override
    public String next() {
      int i = cursor;
      if (cursor == 0) {
        cursor = 9;
      } else {
        cursor--;
      }

      loopCount++;
      return records[i];
    }

    public String get(int index) {
      return records[index];
    }
  }
}

public class Client {

  public static void main(String[] args) {
    DrivingRecorder device = new DrivingRecorder();

    for (int i = 0; i < 12; i++) {
      device.append("video_" + i);
    }

    Iterator<String> it = device.iterator();

    // 用户U盘
    List<String> uStorage = new ArrayList<String>();

    if (it.hasNext()) {
      String video = it.next();
      System.out.println(video);
    }

    // 存储到U盘
    uStorage.add(it.get(7));
  }
}
