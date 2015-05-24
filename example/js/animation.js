var animation = {
	do: function(id, name, character, side, action, left, top, moveStep, attackStep, standStep) {
		switch(character) {
			case 'bear':
				this.bear.do(id, name, side, action, left, top, moveStep, attackStep, standStep)
				break;
		}
	},
	bear: {
		do: function(id, name, side, action, left, top, moveStep, attackStep, standStep) {
			!$('#field').is('#' + id) ? 0 : $('#field').append('<div id="' + id + '" class="bear"></div>');
			if (id === 'self') {
				if ((keysRegister.variable.meleeAttackKey === false) && (keysRegister.variable.rangeAttackKey === false)) {
					if (side === 'right') {
						switch(action) {
							case 'stand':
								$('#' + id).css('background', 'url(img/bear.png)' + this.variable.step.stand.rotateRight[standStep]);
								this.variable.standStep >= 6 ? this.variable.standStep = 0 : 0;
								++this.variable.standStep;
								break;
							case 'right':
								$('#' + id).css('background', 'url(img/bear.png)' + this.variable.step.right[moveStep]);
								this.variable.moveStep >= 6 ? this.variable.moveStep = 0 : 0;
								break;
							case 'up':
								$('#' + id).css('background', 'url(img/bear.png)' + this.variable.step.right[moveStep]);
								this.variable.moveStep >= 6 ? this.variable.moveStep = 0 : 0;
								break;
							case 'down':
								$('#' + id).css('background', 'url(img/bear.png)' + this.variable.step.right[moveStep]);
								this.variable.moveStep >= 6 ? this.variable.moveStep = 0 : 0;
								break;
							case 'meleeAttack':
								$('#' + id).css('background', 'url(img/bear.png)' + this.variable.step.meleeAttack.rotateRight[attackStep]);
								this.variable.attackStep >= 9 ? this.variable.attackStep = 0 : 0;
								++this.variable.attackStep;
								break;
						}
						$('#' + id).css('left', left);
						$('#' + id).css('top', top);
					};
					if (side === 'left') {
						switch(action) {
							case 'stand':
								$('#' + id).css('background', 'url(img/bear.png)' + this.variable.step.stand.rotateLeft[standStep]);
								this.variable.standStep >= 6 ? this.variable.standStep = 0 : 0;
								++this.variable.standStep;
								break;
							case 'left':
								$('#' + id).css('background', 'url(img/bear.png)' + this.variable.step.left[moveStep]);
								this.variable.moveStep >= 6 ? this.variable.moveStep = 0 : 0;
								break;
							case 'up':
								$('#' + id).css('background', 'url(img/bear.png)' + this.variable.step.left[moveStep]);
								this.variable.moveStep >= 6 ? this.variable.moveStep = 0 : 0;
								break;
							case 'down':
								$('#' + id).css('background', 'url(img/bear.png)' + this.variable.step.left[moveStep]);
								this.variable.moveStep >= 6 ? this.variable.moveStep = 0 : 0;
								break;
						}
						$('#' + id).css('left', left);
						$('#' + id).css('top', top);
					};
				} else {
					if (side === 'left') {
						switch(action) {
							case 'meleeAttack':
								$('#' + id).css('background', 'url(img/bear.png)' + this.variable.step.meleeAttack.rotateLeft[attackStep]);
								this.variable.attackStep >= 9 ? this.variable.attackStep = 0 : 0;
								++this.variable.attackStep;
								break;
						}
					};
					if (side === 'right') {
						switch(action) {
							case 'meleeAttack':
								$('#' + id).css('background', 'url(img/bear.png)' + this.variable.step.meleeAttack.rotateRight[attackStep]);
								this.variable.attackStep >= 9 ? this.variable.attackStep = 0 : 0;
								++this.variable.attackStep;
								break;
						}
					};
				}
				if (!keysRegister.variable.meleeAttackKey && !keysRegister.variable.rangeAttackKey) {
					this.variable.attackStep = 1;
				}
				if (!keysRegister.variable.downKey && !keysRegister.variable.upKey && !keysRegister.variable.rightKey && !keysRegister.variable.leftKey) {
					this.variable.moveStep = 1;
				}
				++this.variable.moveStep;
			} else {
				
			}
			
		},
		variable: {
			standStep: 1,
			moveStep: 1,
			attackStep: 1,
			action: 'stand',
			side: 'right',
			left: 0,
			top: 0,
			right: 0,
			step: {
				stand: {
					rotateLeft: {
						1: '-4445px bottom',
						2: '-4565px bottom',
						3: '-4685px bottom',
						4: '-4805px bottom',
						5: '-4925px bottom',
						6: '-5045px bottom'
					},
					rotateRight: {
						1: '-3480px top',
						2: '-3600px top',
						3: '-3720px top',
						4: '-3840px top',
						5: '-3960px top',
						6: '-4080px top'
					}
				},
				right: {
					1: '-5880px top',
					2: '-6000px top',
					3: '-6120px top',
					4: '-6240px top',
					5: '-6360px top',
					6: '-6480px top'
				},
				left: {
					1: '-2650px bottom',
					2: '-2530px bottom',
					3: '-2410px bottom',
					4: '-2290px bottom',
					5: '-2170px bottom',
					6: '-2050px bottom'
				},
				meleeAttack: {
					rotateLeft: {
						1: '-1920px bottom',
						2: '-1800px bottom',
						3: '-1680px bottom',
						4: '-1560px bottom',
						5: '-1440px bottom',
						6: '-1320px bottom',
						7: '-1200px bottom',
						8: '-1080px bottom',
						9: '-960px bottom'
					},
					rotateRight: {
						1: '-6600px top',
						2: '-6720px top',
						3: '-6840px top',
						4: '-6960px top',
						5: '-7080px top',
						6: '-7200px top',
						7: '-7320px top',
						8: '-7440px top',
						9: '-7560px top'
					}
				}
			}
		}
	}

}