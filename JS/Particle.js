var heartLen = 8;

function heartUp(x){
	return Math.pow(abs(x),2/3) + Math.pow(9-(x*x),0.5);
}

function heartDown(x){
	return Math.pow(abs(x),2/3) - Math.pow(9-(x*x),0.5);
}


function Particle(x,y,hu,firework,id,type){
	this.id = id;
	this.pos = createVector(x,y);
	this.firework = firework;
	this.lifeSpan = 260;
	this.hu = hu;
	this.type = type;
	if(this.firework){
		this.vel = createVector(0,random(-19,-14));
	}else{
		if(this.type === "heart"){
			var hUX = heartX[this.id];
			var hDX = heartX[this.id - 26];
			var hUY = heartUp(hUX);
			var hDY = heartDown(hDX);
			if(this.id < 26){
				this.vel = createVector(hUX,-hUY);
			}else{
				this.vel = createVector(hDX,-hDY);
			}
			this.vel.mult(1.9);
		}else{
			this.vel = p5.Vector.random2D();
			this.vel.mult(random(2, 10));
		}
		

	}

	this.acc = createVector(0,0);

	


	this.applyForce = function(force){
		this.acc.add(force);
	}

	this.update = function(){
		if(!this.firework){
			this.vel.mult(0.95);
			this.lifeSpan -= 4;
		}
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.done = function(){
		if(this.lifeSpan < 0){
			return true;
		}else{
			return false;
		}
	}

	this.show = function(){
		colorMode(HSB);
		if(!this.firework){
			strokeWeight(4);
			stroke(hu,255,255,this.lifeSpan);
		}else{
			strokeWeight(8);
			stroke(hu,255,255);
		}
		
		point(this.pos.x,this.pos.y);
	}
}

Particle.prototype.getId = function() {
	this.id +=1;
};