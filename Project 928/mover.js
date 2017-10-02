function Mover(){
  this.rad = Math.random()*5+10;
  this.loc = new JSVector((Math.random()*(canvas.width-2*this.rad))+this.rad, (Math.random()*(canvas.height-2*this.rad))+this.rad);
  this.vel = new JSVector(Math.random()*10-5, Math.random()*10-5);
  this.acc = new JSVector(0, 0);
  // this.ran = Math.floor(Math.random()*3+1);
  // if (this.ran === 1){
  //   this.c = "blue";
  // } else if (this.ran === 2){
  //   this.c = "red";
  // } else if (this.ran === 3){
  //   this.c = "green";
  // }
  //this.c = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
  this.c = 'rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.random() + ')';
  //this.c = 'rgba(' + Math.floor(Math.random()*1) + ',' + Math.floor(Math.random()*1) + ',' + Math.floor(Math.random()*1) + ',' + ((Math.random()*1.2)-0.8) + ')';
}

Mover.prototype.update = function(){
  this.loc.add(this.vel);
  this.vel.add(this.acc);
  this.vel.limit(3);
  this.acc.x = 0;
  this.acc.y = 0;
  if(this.loc.x + this.rad >= canvas.width || this.loc.x - this.rad <= 0){
    this.loc.x = canvas.width-this.loc.x;
   //this.vel.x = -(this.vel.x);
  }
  if(this.loc.y + this.rad >= canvas.height || this.loc.y - this.rad <= 0){
    this.loc.y= canvas.height-this.loc.y;
   //this.vel.y = -(this.vel.y);
  }
}

Mover.prototype.render = function(){
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y,this.rad,0,2*Math.PI);
  //ctx.rect(this.loc.x,this.loc.y+this.rad,0,10000)
  //ctx.rect(this.loc.x,this.loc.y,this.loc.x+100,this.loc.y+100)
  ctx.fillStyle = this.c;
  ctx.fill();
  ctx.strokeStyle = this.c;
  ctx.stroke();
}

Mover.prototype.applyForce = function(f){
  this.acc.add(f);
}
