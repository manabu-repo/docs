// 备忘录模式
// 在不破坏对象封装性的前提下捕获某些时刻的内部状态，并像历史快照一样将它保留在原对象之外，以备恢复之用

// eg.文档恢复
public class Doc {

  private String title;
  private String body;

  public Doc(String title) {
    this.title = title;
    this.body = "";
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getTitle() {
    return this.title;
  }

  public void setBody(String body) {
    this.body = body;
  }

  public String getBody() {
    return this.body;
  }

  public History createHistory() {
    return new History(body);
  }

  public void restoreHistory(History history) {
    this.body = history.getBody();
  }
}

public class History {

  private String body;

  public History(String body) {
    this.body = body;
  }

  public String getBody() {
    return body;
  }
}

public class Editor {

  private Doc doc;

  private List<History> historyRecords;
  private int historyPosition = -1;

  public Editor(Doc doc) {
    System.out.println("<<< open document" + doc.getTitle());
    // 载入文档
    this.dov = doc;
    // 初始化历史记录列表
    historyRecords = new ArrayList<>();
    // 备份
    backup();
    // 显示内容
    show();
  }

  public void append(String text) {
    System.out.println("<<< insert");

    doc.setBody(doc.getBody());
    backup();
    show();
  }

  public void save() {
    System.out.println("<<< save");
  }

  public void delete() {
    System.out.println("<<< delete");
  }

  public void backup() {
    historyRecords.add(doc.createHistory());
    historyPosition++;
  }

  public void show() {
    System.out.println(doc.getBody());
    System.out.println("end >>>\n");
  }

  // 撤销
  public void undo() {
    System.out.println(">>> undo");

    if (historyPosition == 0) {
      return;
    }

    historyPosition--;
    History history = historyRecords.get(historyPosition);
    // 取出历史记录并恢复
    doc.restoreHistory(history);

    show();
  }

  // redo
  public void redo() {
    System.out.println(">>> redo");

    if (historyPosition == 0) {
      return;
    }

    historyPosition++;
    History history = historyRecords.get(historyPosition);
    // 取出历史记录并恢复
    doc.restoreHistory(history);

    show();
  }
}

public class Client {
  public static void main(String[] args) {
    Editor editor = new Editor(new Doc('<< Test >>'));

    editor.append("one set");
    editor.append("some text");
  }
}
