import fs from "fs";
class UserDataService {
  constructor(path) {
    this.path = path;
  }

  async isUser(user) {
    const data = await this.getData();
    // console.log(user.useremail);
    if (
      data[user.useremail] &&
      data[user.useremail]?.password === user.userpassword
    ) {
      return data;
    }
    return null;
  }

  async addData(newUser) {
    const data = await this.getData();
    console.log(data);
    const newData = { ...data, newUser };
    if (fs.writeFileSync(this.path, JSON.stringify(newData))) {
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
