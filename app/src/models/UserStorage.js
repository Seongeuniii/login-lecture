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
}

module.exports = UserStorage;