		var config = {
			type: Phaser.AUTO,
			width: 800,
			height: 600,
			parent: 'phaser-example',
			scene: {
				preload: preload,
				create: create,
				physics: {
					arcade: {
						debug: true,
						gravity: { y: 200 }
					},
					matter: {
						debug: true,
						gravity: { y: 0.5 }
					}
				}
			}
		};

		var game = new Phaser.Game(config);


		function preload ()
		{
			//this.load.setBaseURL('http://localhost/');
			this.load.setBaseURL('http://www.06-90.com/projects/p4/');
			this.load.image('bg', 'image/BG.png');
			this.load.image('img1', 'image/img1.png');
			this.load.image('img2', 'image/img2.png');
			this.load.image('img3', 'image/img3.png');
			this.load.image('img4', 'image/img4.png');
			this.load.image('img5', 'image/img5.png');
			this.load.image('img6', 'image/img6.png');
			this.load.image('img7', 'image/img7.png');
			this.load.image('img8', 'image/img8.png');
			this.load.image('img9', 'image/img9.png');
			this.load.image('img10', 'image/img10.png');
			this.load.image('honeycomb1', 'image/honeycomb1.png');
			this.load.image('honeycomb2', 'image/honeycomb2.png');
		}

		function create ()
		{
			
			var group = this.physics.add.group({
				bounceX: 1,
				bounceY: 1,
				collideWorldBounds: true
			})
			
			
			this.add.image(340, 300, 'bg');		
			
			var line1 = new Phaser.Geom.Line(100, 200, 100 + 4 * 162, 200);
			var group1 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group1.getChildren(), line1);
			
			var line2 = new Phaser.Geom.Line(100 + 81, 200+46, 100 + 81 +3* 162, 200+46);
			var group2 = this.add.group({ key: 'honeycomb2', frameQuantity: 3 });
			Phaser.Actions.PlaceOnLine(group2.getChildren(), line2);			

			var line3 = new Phaser.Geom.Line(100, 200+1 * 93, 100 + 4 * 162, 200+1 * 93);
			var group3 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group3.getChildren(), line3);
			
			var line4 = new Phaser.Geom.Line(100 + 81 , 200+ 46+1 * 93, 100 + 81 +3* 162 , 200+ 46+1 * 93);
			var group4 = this.add.group({ key: 'honeycomb2', frameQuantity: 3 });
			Phaser.Actions.PlaceOnLine(group4.getChildren(), line4);	
			
			var line5 = new Phaser.Geom.Line(100, 200+2 * 93, 100 + 4 * 162, 200+2 * 93);
			var group5 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group5.getChildren(), line5);	
			



			//  Matter JS:
			this.matter.add.image(400, -100, 'img1');
			this.matter.add.image(360, -600, 'img2');
			this.matter.add.image(420, -900, 'img3');

			this.matter.add.image(400, 550, 'img2', null, { isStatic: true });
			this.matter.add.image(120, 350, 'img6', null, { isStatic: true });
			this.matter.add.image(220, 200, 'img3', null, { isStatic: true });
			
			//  Arcade Physics:

			var block = this.physics.add.image(400, 100, 'img5');
			var block = this.physics.add.image(400, 100, 'img8');
			var block = this.physics.add.image(400, 100, 'img7');

			block.setVelocity(100, 200);
			block.setBounce(1, 1);
			block.setCollideWorldBounds(true);
			
			var block1 = group.create(100, 200, 'img1').setVelocity(100, 200);
			var block2 = group.create(500, 200, 'img2').setVelocity(-100, -100);
			var block3 = group.create(300, 400, 'img3').setVelocity(200, 100);
			var block4 = group.create(300, 300, 'img4').setVelocity(-30, -150);
			var block5 = group.create(350, 600, 'img5').setVelocity(120, 120);
			var block6 = group.create(350, 500, 'img6').setVelocity(-130, -100);
			var block7 = group.create(350, 200, 'img7').setVelocity(160, 120);
			var block8 = group.create(250, 300, 'img8').setVelocity(-130, -150);			
			var block9 = group.create(450, 400, 'img9').setVelocity(130, 130);
			var block10 = group.create(350, 100, 'img10').setVelocity(-140, -180);
			
			
			
	}






