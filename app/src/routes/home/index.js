"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl'); // MVC 컨트롤러 분리

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
// login data를 받는 API
router.post('/login', ctrl.process.login);

module.exports = router;