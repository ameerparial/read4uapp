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

  async addData(newUser) {
    const { users } = await this.getData();
    users.push(newUser);
    console.log(users);
    if (fs.writeFileSync(this.path, JSON.stringify({ users }))) {
      return true;
    }
    return false;
  }

  async getData() {
    const users = await fs.readFileSync(this.path);
    return JSON.parse(users);
  }
}

export default UserDataService;
