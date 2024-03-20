import fs from "fs";
class UserDataService {
  constructor(path) {
    this.path = path;
  }

  async isUser(loginUser) {
    const { users } = await this.getData();
    // console.log(user.useremail);

    console.log(users);
    const value = users.find((user) => {
      if (
        user.email === loginUser.useremail &&
        user.password === loginUser.userpassword
      ) {
        return true;
      }
    });
    console.log(value);
    if (value) {
      return true;
    }
    return false;
  }

  isAlreadyExist(users, newUser) {
    const result = users.find((user) => {
      if (user.email === newUser.email || user.username === newUser.username) {
        return true;
      }
    });

    if (result) {
      return true;
    }
    return false;
  }

  async addData(newUser) {
    const { users } = await this.getData();
    if (this.isAlreadyExist(users, newUser)) {
      return { status: false, msg: "Account Already exists!" };
    }
    users.push(newUser);
    fs.writeFileSync(this.path, JSON.stringify({ users }));
    return { status: true, msg: "Account Created Successfully." };
  }

  async getData() {
    const users = await fs.readFileSync(this.path);
    return JSON.parse(users);
  }
}

export default UserDataService;
