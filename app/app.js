"use strict";

// 모듈
const express = require('express');
const bodyParser = require("body-parser");

const app = express(); // app은 express의 인스턴스이다.

// 라우팅
const home = require('./src/routes/home/index'); // 상대적인 위치를 명시해줘야함.

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)) // 정적 경로 추가
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); // use => 미들 웨어를 등록해주는 메서드. 라우터 분리.

module.exports = app;