export class News {
  public ID;
  public UpdatedAt;
  public DeletedAt;
  public title;
  public description;
  public image;

  constructor(
    ID = 0,
    UpdatedAt = "",
    DeletedAt = "",
    title = "",
    description = "",
    image = ""
  ) {
    this.ID = ID;
    this.UpdatedAt = UpdatedAt;
    this.DeletedAt = DeletedAt;
    this.title = title;
    this.description = description;
    this.image = image;
  }
}
