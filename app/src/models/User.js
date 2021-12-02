"use strict";

const UserStorage = require("./UserStorage");

class User {
  // body를 받음
  constructor(body) {
    this.body = body;
  }
  // 메서드 생성
  login() {
    const client = this.body
    const {id, pwd} = UserStorage.getUserInfo(client.id); // id에 해당하는 정보 받아옴
    if (id) { 
      if (id === client.id && pwd === client.pwd) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다."}
    }
    return { success: false, msg: "존재하지 않는 아이디입니다."}
  }
  register() {
    const client = this.body
    UserStorage.save(client);
  }
} 

module.exports = User