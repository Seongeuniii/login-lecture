"use strict";

class UserStorage {
  static #users = {
    id: ["kim", "lee", "choi"],
    pwd: ["123", "1234", "12345"],
    name: ["김", "이", "최"]
  };
  
  // 데이터 은닉화하고 메서드로 전달
  static getUsers(...fields) {
    const users = this.#users;
    // 필요한 내용만
    const newUsers =  fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    },{})
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users)
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.id.push(userInfo.name);
    users.id.push(userInfo.pwd);
  }
}

module.exports = UserStorage;