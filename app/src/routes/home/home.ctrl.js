"use strict";
const User = require("../../models/User");

const output = {
  home: (req,res) => {
    res.render("home/index");
  },
  login: (req,res) => {
    res.render("home/login");
  },
  register: (req,res) => {
    res.render("home/register")
  }
}

// 로그인 요청 왔을 때
// 인증 & 결과 응답
const process = {
  login: (req,res) => {
    const user = new User(req.body);
    const response = user.login(); // 유저가 로그인하면 응답받음
    console.log(response)
    return res.json(response);
  }
}

module.exports = {
  output,
  process
}

// 객체지향 프로그래밍 | 인스턴스화
// const user = new(user(req.body)); 사용자가 전달한 데이터를 가지고 있는 객체를 하나 만든다.
// const response = user.login(); 객체가 로그인을 하면 응답을 받고
// return res.json(response); 처리