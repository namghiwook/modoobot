'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send("hello");
});

//초기 키보드
app.get('/keyboard', function(req, res){
	console.info("/keyboard");
	res.send({"type" : "text"});
});

//사용자에게 메세지 받을때
app.post('/message', function(req, res){
	console.log(req.body);
	res.send({
		"message" : {
			"text" : "hello! "
		} 
	});
});

//친구추가 알림
app.post("/friend", function(req, res){
	console.log("친구 추가 :::");
	console.log(req.body);
	res.send();
});

//친구 삭제
app.delete("/friend/:user_key", function(req, res){
	console.log("친구 삭제 :::");
	console.log(req.params.user_key);
	res.send();
});

app.listen(80);
console.log('webServer:80 ON');