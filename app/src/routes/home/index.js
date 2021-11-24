"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl'); // MVC 컨트롤러 분리

router.get('/', ctrl.home);

module.exports = router;