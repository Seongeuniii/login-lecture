"use strict";
// 클라이언트 요청에 응답하는 방법을 결정하는 것을 라우팅이라 한다.
// 각 라우트는 하나 이상의 핸들러 함수를 가질 수 있으며, 이러한 함수는 라우트가 일치할 때 실행된다.

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl'); // MVC 컨트롤러 분리

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);

router.post('/login', ctrl.process.login);  // login data를 받는 API
router.post('/register', ctrl.process.register);

module.exports = router;