var fireWorks = [];
var gravity;

function setup(){

	createCanvas(window.innerWidth, window.innerHeight);
	colorMode(HSB);
	gravity = createVector(0,0.2);
	stroke(255);
	strokeWeight(8);
	background(0);
	frameRate(60);
	
}


function draw(){
	colorMode(RGB);
	background(0,30);
	if(Math.random(1) < 0.07){
		fireWorks.push(new FireWork());
	}

	for (var i = fireWorks.length-1; i >= 0 ; i--) {
		fireWorks[i].update();
		fireWorks[i].show();
		if(fireWorks[i].done()){
			fireWorks.splice(i,1);
		}

	}
}