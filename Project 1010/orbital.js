function Orb(){
  this.vec = new JSVector(40, 0);
  this.vel = new JSVector(Math.random()*10-5, Math.random()*10-5);
  this.rad = 25;
  this.acc = new JSVector(0, 0);
  // this.ran = Math.floor(Math.random()*3+1);
  // if (this.ran === 1){
  //   this.c = "blue";
  // } else if (this.ran === 2){
  //   this.c = "red";
  // } else if (this.ran === 3){
  //   this.c = "green";
  // }
  //this.c = 'red';
  this.c = 'rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.random() + ')';
  //this.c = 'rgba(' + Math.floor(Math.random()*1) + ',' + Math.floor(Math.random()*1) + ',' + Math.floor(Math.random()*1) + ',' + ((Math.random()*1.2)-0.8) + ')';
  this.theta = 0;
  this.angvel = 1/10;
}

Orb.prototype.update = function(){
  this.theta += this.angvel;
  this.vec.setDirection(this.theta);
}

Orb.prototype.render = function(){
  ctx.beginPath();
  var loc = JSVector.addGetNew(movers[0].loc, this.vec);
  //ctx.arc(this.loc.x,this.loc.y,this.rad,0,2*Math.PI);
  ctx.rect(loc.x-this.rad/2,loc.y-this.rad/2,this.rad,this.rad);
  //ctx.rect(this.loc.x,this.loc.y,this.loc.x+100,this.loc.y+100)
  ctx.fillStyle = this.c;
  ctx.fill();
  ctx.strokeStyle = this.c;
  ctx.stroke();
}

Orb.prototype.applyForce = function(f){
  this.acc.add(f);
}
