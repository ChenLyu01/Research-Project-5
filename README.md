[Research Project Five Demo](http://www.06-90.com/projects/p5/index.html). 



## Welcome to my Research Project Four

Here, I have to say that the game engine which I used is Phaser and its URL is [Phaser](http://phaser.io/). The link of my previous project is [Research Project Four](https://github.com/ChenLyu01/Research-Project-4).

These are also some technical researches for [Navigable Video](http://www.06-90.com/final/finalprojectChenLyu.html). In this project, I want to increase some function of human-computer interaction into the Navigable Video. You know, Some members in the audience have critical eyes， they are not watching movies blindly. When the audience needs to interact. For example, when the plot changes or there are combination of different plots. I think I should do something for them. 

### Required technology

In the picture below.

![Image text](https://github.com/ChenLyu01/Research-Project-5/blob/master/img/image1.png) 

We all know that, in the movie, the plots are not easy to change, especially for the videos or short films. I use these beating images to represent different plots. The theme of love should be active, images representing the theme of death or the theme of nuclear weapons should be move slower or even quiescent.


```
var canvas = this.textures.createCanvas('pad', 48, 42).source[0].image;
var ctx = canvas.getContext('2d');
ctx.drawImage(source, 0, 0);
```

These three sentences, they mean that the object canvases are created an instantiated the canvas. After the declaration, we can easily use ctx's events to draw graphics. **ctx.drawImage(source, 0, 0)** It means to draw "source[0].image" on X = 0 and Y = 0 coordinate axis.  



![Image text](https://github.com/ChenLyu01/Research-Project-5/blob/master/img/image3.png) 

### Source code description

```
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

```
**arcade** and **matter** are two similar rigid systems, But there are some differences.  Because **matter** involves the transmission and loss of kinetic energy and momentum. So it looks closer to the macro physical world. But in a lot of times we don't need to use it. **arcade** can penetrate the object, and it can go on unending movemet.

```
this.matter.add.image(220, 200, 'img3', null, { isStatic: true });

var block = this.physics.add.image(400, 100, 'img7');

var block1 = group.create(100, 200, 'img1').setVelocity(100, 200);
```
They are examples of these systems. I put them together. You can annotate the corresponding code, run the program and see what's different.




![Image text](https://github.com/ChenLyu01/Research-Project-5/blob/master/img/image2.png)

My idea is still studying the game engine, so that some of the functions can be run in video.


### Reference
[The official example 1](https://labs.phaser.io/edit.html?src=src\physics\arcade\simple%20group.js) 

[The official example 2](https://labs.phaser.io/edit.html?src=src\physics\impact\multiple%20scenes.js) 
