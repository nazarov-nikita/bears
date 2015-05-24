var stepSpeed = 1;

setInterval(function(){
	if (!keysRegister.variable.downKey && !keysRegister.variable.upKey && !keysRegister.variable.rightKey && !keysRegister.variable.leftKey) {
		animation.bear.variable.action = 'stand';
	} else { 
		if ((keysRegister.variable.meleeAttackKey === false) && (keysRegister.variable.rangeAttackKey === false)) {
			if (keysRegister.variable.downKey) {
				animation.bear.variable.top += stepSpeed;
				animation.bear.variable.action = 'down';
			};
			if (keysRegister.variable.upKey) {
				animation.bear.variable.top -= stepSpeed;
				animation.bear.variable.action = 'up';
			};
			if (keysRegister.variable.rightKey) {
				animation.bear.variable.left += stepSpeed;
				animation.bear.variable.action = 'right';
				animation.bear.variable.side = 'right';
			};
			if (keysRegister.variable.leftKey) {
				animation.bear.variable.left -= stepSpeed;
				animation.bear.variable.action = 'left';
				animation.bear.variable.side = 'left';
			};
		}
	};
	if (keysRegister.variable.tableKey) {
		$('#playersTable').css('display', 'block');
	} else {
		$('#playersTable').css('display', 'none');
	};
	if (keysRegister.variable.meleeAttackKey) {
		animation.bear.variable.action = 'meleeAttack';
	}
} , 10);