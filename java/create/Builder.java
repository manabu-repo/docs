// 建造者模式
// 按照既定的制造工序将组件组装起来而构建的庞大而复杂的对象

// 1. 建筑物类
public class Building {

  public List<String> buildingComponents = new ArrayList<String>();

  // 地基
  public void setBasement(String basement) {
    this.buildingComponents.add(basement);
  }

  // 墙体
  public void setWall(String wall) {
    this.buildingComponents.add(wall);
  }

  // 屋顶
  public void setRoof(String roof) {
    this.buildingComponents.add(roof);
  }

  @Override
  public String toString() {
    String buildingStr = "";
    for (int i = buildingComponents.size() - 1; i >= 0; i--) {
      buildingStr += buildingComponents.get(i);
    }
    return buildingStr;
  }
}

// 2. 建筑施工方

// 施工标准
public interface Builder {
  // 3个施工标准
  public void buildBasement();

  public void buildWall();

  public void buildRoof();

  // 供产品交付的接口
  public Building getBuilding();
}

// 别墅施工方
public class HouseBuilder implements Builder {

  private Building house;

  public HouseBuilder() {
    house = new Building();
  }

  @Override
  public void buildBasement() {
    System.out.println("别墅地基");
    house.setBasement("+++++++++++++++");
  }

  @Override
  public void buildWall() {
    System.out.println("别墅墙体");
    house.setWall("| 田 | 田 | 田 |");
  }

  @Override
  public void buildRoof() {
    System.out.println("别墅屋顶");
    house.setRoof("口口口口口口口口口口口");
  }

  @Override
  public Building getBuilding() {
    return house;
  }
}

// 多层公寓施工方
public class ApartmentBuilder implements Builder {

  private Building apartment;

  public ApartmentBuilder() {
    apartment = new Building();
  }

  @Override
  public void buildBasement() {
    System.out.println("公寓地基");
    apartment.setBasement("|____________________|");
  }

  @Override
  public void buildWall() {
    System.out.println("公寓墙体");
    apartment.setWall("| 口 口 口 口 口 口 口 |");
  }

  @Override
  public void buildRoof() {
    System.out.println("公寓屋顶");
    apartment.setRoof("|======================|");
  }

  @Override
  public Building getBuilding() {
    return apartment;
  }
}

// 3. 工程总监
public class Director {

  private Builder builder;

  public Director(Builder builder) {
    this.builder = builder;
  }

  public void setBuilder(Builder builder) {
    this.builder = builder;
  }

  public Building direct() {
    System.out.println("===== 工程项目启动 =====");
    builder.buildBasement();
    builder.buildWall();
    builder.buildRoof();
    System.out.println("===== 工程项目竣工 =====");
    return builder.getBuilding();
  }
}

// 4. 项目实施
public class Client {

  public static void main(String[] args) {
    Director director = new Director(new HouseBuilder());

    director.direct();

    director.setBuilder(new ApartmentBuilder());
    director.direct();
  }
}
