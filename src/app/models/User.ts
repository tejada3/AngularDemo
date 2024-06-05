export class User {

  firstName: String;
  lastName: String;
  userName: String;
  password: String;
  isLoadedIn: Boolean


  constructor(firstName: String, lastName: String, userName: String, password: String, isLoadedIn: Boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.isLoadedIn = isLoadedIn

  }
}


