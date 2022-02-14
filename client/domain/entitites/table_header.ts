export class TableHeader {
  public isSortable;
  public title;
  public orderBy;
  public isAsc;
  public horizontalAlignment;
  public widthPerCent;

  constructor(
    isSortable: boolean,
    title: string,
    orderBy: string,
    isAsc: boolean,
    horizontalAlignment:
      | "flex-start"
      | "flex-end"
      | "space-between"
      | "space-evenly"
      | "space-around"
      | "center",
    widthPerCent: number
  ) {
    this.isSortable = isSortable;
    this.title = title;
    this.orderBy = orderBy;
    this.isAsc = isAsc;
    this.horizontalAlignment = horizontalAlignment;
    this.widthPerCent = widthPerCent;
  }
}
