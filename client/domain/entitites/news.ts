export class News {
  public id;
  public title;
  public description;
  public image;

  constructor(id = 0, title = "", description = "", image = "") {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
  }
}
