export class Credentials {
  public email;
  public password;

  constructor(email = "", password = "") {
    this.email = email;
    this.password = password;
  }
}
