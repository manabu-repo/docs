// 组合模式
// 针对多节点对象组成树节点对象的结构性设计模式
// 由部分到整体的抽象，使客户端在操作整体对象或者下面的每个节点对象时都可做出统一的响应
// 保证树形结构对象使用方法的统一性，同时使客户端不必关系对象的整体或部分，达到对象复杂层次结构与客户端解耦的目的

// 文件系统 抽象节点Node
public abstract class Node {

  protected String name;

  public Node(String name) {
    this.name = name;
  }

  protected abstract void add(Node child);

  // 追加tree指令
  protected void tree(int space) {
    for (int i = 0; i < space; i++) {
      System.out.println("  ");
    }
    System.out.println(name);
  }
}

// 文件夹
public class Folder extends Node {

  private List<Node> children = new ArrayList<>();

  public Folder(String name) {
    super(name);
  }

  @Override
  protected void add(Node child) {
    children.add(child);
  }

  @Override
  public void tree(int space) {
    // 调用父类方法列出自己的name
    super.tree(space);

    space += 2;
    for (Node node : children) {
      node.tree(space);
    }
  }
}

// 文件
public class File extends Node {

  public File(String name) {
    super(name);
  }

  @Override
  protected void add(Node child) throws Exception {
    System.out.println("不能添加子节点");
    throw new Exception("file can not add any child");
  }

  @Override
  public tree(int space) {
    super.tree(space);
  }
}

public class Client {

  public static void main(String[] args) {
    Node root = new Folder("Root");

    Node source = new Folder("Source");
    source.add(new File("a.java"));
    source.add(new File("b.ts"));

    root.add(source);

    Node music = new Folder("Music");
    Node aimer = new Folder("Aimer");
    aimer.add(new File("AM 1:00"));
    aimer.add(new File("AM 2:00"));
    aimer.add(new File("AM 3:00"));

    music.add(aimer);

    root.add(music);
  }
}
