import fs from "fs";
class UserDataService {
  constructor(path) {
    this.path = path;
  }

  async isUser(loginUser) {
    const users = await this.getData();
    console.log("Checking for user...");

    const value = users.find((user) => {
      if (
        user.email === loginUser.useremail &&
        user.password === loginUser.userpassword
      ) {
        return true;
      }
    });
    // console.log(value);
    return value;
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
    const users = await this.getData();
    if (!users) {
      //No User exist.
      //You are first user to use this application.
      const users = [newUser];
      fs.writeFileSync(this.path, JSON.stringify(users));
      return { status: true, msg: "Account Created Successfully." };
    }
    if (this.isAlreadyExist(users, newUser)) {
      return { status: false, msg: "Account Already exists!" };
    }
    users.push(newUser);
    fs.writeFileSync(this.path, JSON.stringify(users));
    return { status: true, msg: "Account Created Successfully." };
  }

  async getData() {
    //1- Checking does file exist.
    if (!fs.existsSync(this.path)) {
      return [];
    }
    //2- Read the file and parse the JSON data
    const users = fs.readFileSync(this.path, "utf8");
    // Check if the file is empty
    if (!users.trim()) {
      console.log("TRIM");
      return [];
    }
    const data = JSON.parse(users);
    console.log("Read Data");
    console.log(data);

    return data;
  }
}

export default UserDataService;
