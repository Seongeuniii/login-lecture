"use strict";

// 모듈
const express = require('express')
const app = express()

// 라우팅
const home = require('./routes/home/index'); // 상대적인 위치를 명시해줘야함.

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use => 미들 웨어를 등록해주는 메서드.

module.exports = app;