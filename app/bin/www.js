"use strict";

const app = require("../app")

const PORT = 3000;

// 서버는 port 3000에서 사용자의 접속을 대기함
app.listen(PORT, () => {
  console.log('서버 가동');
})