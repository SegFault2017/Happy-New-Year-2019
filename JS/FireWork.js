var heartX =[];


function FireWork(){
	this.hu = random(255);
	this.fireWork = new Particle(random(width),height,this.hu,true);
	this.exploded = false;
	this.particles = [];

	this.update = function(){
		if(!this.exploded){
			this.fireWork.applyForce(gravity);
			this.fireWork.update();
			//Explosion
			if(this.fireWork.vel.y >= 0 ){
				this.exploded =true;
				this.explode();
			}
		}

		for(var i = this.particles.length-1; i >=0 ;i--){
			this.particles[i].applyForce(gravity);
			this.particles[i].update();
			if(this.particles[i].done()){
				this.particles.splice(i,1);
			}
		}
		
	}

	this.explode = function(){
		var type = "normal";
		var rand = Math.random(1);
		if(rand < 0.1){
			type = "heart"
		}
		var particlesLen = 52;
		for(var i = 0;i <=particlesLen/2 ;i++){
			heartX.push(-3 + i*(3+3)/(particlesLen/2));
		}
		for (var i = 0; i < particlesLen+2; i++) {
			var p = new Particle(this.fireWork.pos.x,this.fireWork.pos.y,this.hu,false,i,type);
			this.particles.push((p));
		}
		heartX =[];
	}


	this.done = function(){
		if(this.exploded && this.particles.length === 0){
			return true;
		}else{
			return false;
		}
	}


	this.show = function(){
		if(!this.exploded){
			this.fireWork.show();
		}

		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].show();
		}


	}
}