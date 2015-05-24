$(document).ready(function() {
	
	setInterval(function(){
		animation.do('self', '', 'bear', animation.bear.variable.side, animation.bear.variable.action, animation.bear.variable.left, animation.bear.variable.top, animation.bear.variable.moveStep, animation.bear.variable.attackStep, animation.bear.variable.standStep);
	} , 100);
});

var socket = io.connect('http://192.168.22.46/');

console.log(socket);
socket.on('connecting', function () {
});
socket.on('connect', function () {
	console.log('Соединение установлено!');
	socket.emit('auth', 'player');
	socket.on('toClientAuth', function(data) {
		player.id = data;
		$('.field').empty();
		$('.field').append('<div class="player" id='+ data +'></div>');
	});
});

var ios = {
	initialize: function() {
		this.ioRequest();
	},
	ioRequest: function() {
		var collect = {};
		setInterval(function(){
			if ((collect.top != player.position.top) || (collect.left != player.position.left) || (collect.rotate != animation.bear.rotate) || (collect.animation != animation.bear.toSocket)) {
				if (keyRegister.actionOn.down || keyRegister.actionOn.up || keyRegister.actionOn.right || keyRegister.actionOn.left) {
					socket.emit("move", {top: player.position.top, left: player.position.left, animation: animation.bear.toSocket, rotate: animation.bear.rotate});
					console.log(hash1++);
				} else {
					socket.emit("move", {top: player.position.top, left: player.position.left, animation: animation.bear.toSocket, rotate: animation.bear.rotate});
					console.log(hash1++);
				}
				collect.top = player.position.top;
				collect.left = player.position.left;
				collect.rotate = animation.bear.rotate;
				collect.animation = animation.bear.toSocket;
			}
		} , 40);
	},
	ioResponse: function() {
		socket.on('move', function(data) {
			if ((!document.getElementById(data.id)) && (document.getElementById(data.id) == null)) {
				$('.field').append('<div class="player" id="' + data.id + '"></div>')
			}
			$('#' + data.id).css('top', data.top);
			$('#' + data.id).css('left', data.left);
		});
	}
}