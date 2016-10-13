var express = require("express");
var app = express();

var port = 3000;

var todosMock = require("./server/model/todo");

app.get("/", function(req, res){
  res.send(todosMock);
});

app.listen(port, function() {
  console.log("App listening on port " + port);
});
