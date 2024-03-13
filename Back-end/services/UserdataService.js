import fs from "fs";
class UserDataService {
  constructor(path) {
    this.path = path;
  }

  async getData() {
    const users = await fs.readFileSync(this.path);
    return JSON.parse(users);
  }
}

export default UserDataService;
