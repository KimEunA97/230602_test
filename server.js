const express = require('express');
const app = express();
const fs = require('fs')

app.get('/', function (req, res) {
  res.send('hello world');

});


// 서버를 실행합니다.
app.listen(2080, () => {
  console.log('서버가 3000 포트에서 실행 중입니다.');
});