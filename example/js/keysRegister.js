var keysRegister = {
	initialize: function() {
		this.keydown();
		this.keyup();
		this.visualization();
	},
	keydown: function() {
		$(document).keydown(function(event) {
			switch (event.keyCode) {
				case 83:
					keysRegister.variable.downKey = true;
					
					break
				case 87:
					keysRegister.variable.upKey = true;
					break
				case 65:
					keysRegister.variable.leftKey = true;
					break
				case 68:
					keysRegister.variable.rightKey = true;
					break
				case 76:
					keysRegister.variable.tableKey = true;
					break
				case 75:
					keysRegister.variable.meleeAttackKey = true;
					break
				case 74:
					keysRegister.variable.rangeAttackKey = true;
					break
			};
		})
	},
	keyup: function() {
		$(document).keyup(function(event) {
			switch (event.keyCode) {
				case 83:
					keysRegister.variable.downKey = false;
					break
				case 87:
					keysRegister.variable.upKey = false;
					break
				case 65:
					keysRegister.variable.leftKey = false;
					break
				case 68:
					keysRegister.variable.rightKey = false;
					break
				case 76:
					keysRegister.variable.tableKey = false;
					break
				case 75:
					keysRegister.variable.meleeAttackKey = false;
					break
				case 74:
					keysRegister.variable.rangeAttackKey = false;
					break
			}
		})
	},
	visualization: function() {
		$('.arrows').remove();
		$('body').append('<div class="arrows"></div>')
		setInterval(function(){
			if (keysRegister.variable.downKey === true) {
				!$("div").is(".downKey") ? $('.arrows').append('<div class="downKey icon"></div>') : 0;
			} else {
				$('.downKey').remove();
			};
			if (keysRegister.variable.upKey === true) {
				!$("div").is(".upKey") ? $('.arrows').append('<div class="upKey icon"></div>') : 0;
			} else {
				$('.upKey').remove();
			};
			if (keysRegister.variable.leftKey === true) {
				!$("div").is(".leftKey") ? $('.arrows').append('<div class="leftKey icon"></div>') : 0;
			} else {
				$('.leftKey').remove();
			};
			if (keysRegister.variable.rightKey === true) {
				!$("div").is(".rightKey") ? $('.arrows').append('<div class="rightKey icon"></div>') : 0;
			} else {
				$('.rightKey').remove();
			};
			if (keysRegister.variable.meleeAttackKey === true) {
				!$("div").is(".meleeAttackKey") ? $('.arrows').append('<div class="meleeAttackKey icon"></div>') : 0;
			} else {
				$('.meleeAttackKey').remove();
			};
			if (keysRegister.variable.rangeAttackKey === true) {
				!$("div").is(".rangeAttackKey") ? $('.arrows').append('<div class="rangeAttackKey icon"></div>') : 0;
			} else {
				$('.rangeAttackKey').remove();
			};
			if (keysRegister.variable.tableKey === true) {
				!$("div").is(".tableKey") ? $('.arrows').append('<div class="tableKey icon"></div>') : 0;
			} else {
				$('.tableKey').remove();
			};
		} , 50);
	},
	variable: {
		upKey: false,
		downKey: false,
		leftKey: false,
		rightKey: false,
		tableKey: false,
		meleeAttackKey: false,
		rangeAttackKey: false
	}
};

keysRegister.initialize();