export class News {
  public ID;
  public title;
  public description;
  public image;

  constructor(ID = 0, title = "", description = "", image = "") {
    this.ID = ID;
    this.title = title;
    this.description = description;
    this.image = image;
  }
}
