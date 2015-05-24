var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server, options);
var routes = require("./router/router.js")
var path = require("path");
var PORT = 8888;
var options = {
//    'log level': 0
};
server.listen(PORT);

app.set('views', path.join(__dirname, 'example'));
app.set('view engine', 'jade');

app.use('/', routes);
app.use(express.static(path.join(__dirname, 'example')));

var collect = {};
io.sockets.on('connection', function(client) {
	client.on('message', function(message) {
		try {
			if ((collect.rotate != message.rotate) || (collect.animation != message.animation) || (collect.top != message.top) || (collect.left != message.left)) {
				client.broadcast.emit('message', message);
				console.log(message);
				collect.rotate = message.rotate;
				collect.animation = message.animation;
				collect.top = message.top;
				collect.left = message.left;
			}
		} catch (e) {
			cosole.log(e);
			client.disconnect;
		}
	})
} )

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});
