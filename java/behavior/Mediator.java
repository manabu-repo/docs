// 中介模式
// 为对象构架出一个互动平台，通过减少对象间的依赖程度以达到解耦的目的

// eg.以聊天室为例
public class User {

  private String name;

  private ChatRoom = chatRoom;

  public User(String name) {
    this.name = name;
  }

  public String getName() {
    return this.name;
  }

  public void login(ChatRoom chatRoom) {
    this.chatRoom = chatRoom;
    this.chatRoom.register(this);
  }

  public void talk(String msg) {
    chatRoom.sendMsg(this, msg);
  }

  public void listen(User fromWhom, String msg) {
    System.out.print("[" + this.name + "]");
    System.out.println(fromWhom.getName() + "说： " + msg);
  }
}

public class ChatRoom {

  private String name;

  public ChatRoom(String name) {
    this.name = name;
  }

  List<User> users = new ArrayList<>();

  public void register(User user) {
    this.users.add(user);
    System.out.println("系统消息：欢迎[" + user.getName + "]加入聊天室" + this.name);
  }

  public void sendMsg(User fromWhom, String msg) {
    users.stream().forEach(toWhom -> toWhom.listen(fromWhom, msg));
  }
}

public class Client {

  public static void main(String[] args) {
    ChatRoom chatRoom = new ChatRoom("NOGI");

    User user = new User("akashi");
    User user1 = new User("asuka");
    User user2 = new User("shiori");

    user.login(chatRoom);
    user1.login(chatRoom);

    user.talk("hi!");
    user1.talk("asuu desi");

    user2.login(chatRoom);
    user2.talk("woooooow!");
  }
}

