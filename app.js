var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var path = require("path");
var PORT = 80;
var routes = require("./router/router.js")

server.listen(PORT);
app.set('views', path.join(__dirname, 'example'));
app.set('view engine', 'jade');
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'example')));

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

var sockets = [];
io.sockets.on('connection', function(client) {
	sockets.push(client);
	client.session = {
		id: client.id,
		name: 'Player',
		character: 'bear',
		side: 'right',
		action: 'stand',
		left: 0,
		top: 0,
		moveStep: 1,
		attackStep: 1,
		standStep: 1
	};

	client.on('auth', function(nick) {
			console.log(nick + ' auth');
			client.emit('toClientAuth', client.id);
			this.session.nick = nick;
	})
	client.on('move', function(move) {
		console.log(move);
		if (move.top != undefined) {
			this.session.top = move.top;
		}
		if (move.left != undefined) {
			this.session.left = move.left;
		}
		this.session.side = move.side;
		this.session.action = move.action;
		this.session.character = move.character;
		this.session.moveStep = move.moveStep;
		this.session.attackStep = move.attackStep;
		this.session.standStep = move.standStep;
		console.log(this.session);
		client.broadcast.emit('move', this.session);
	});
	
	
	
})
