function Snake(){
  this.rad = 25;
  this.loc = new JSVector(0,0);
  // this.segs = [];
  // for(var i = 0; i < 10; i++){
  //   this.segs[i] = new JSVector(0,0);
  // }

  // this.ran = Math.floor(Math.random()*3+1);
  // if (this.ran === 1){
  //   this.c = "blue";
  // } else if (this.ran === 2){
  //   this.c = "red";
  // } else if (this.ran === 3){
  //   this.c = "green";
  // }
  //this.c = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
  //this.c = 'rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.random() + ')';
  this.c = 'red';
  //this.c = 'rgba(' + Math.floor(Math.random()*1) + ',' + Math.floor(Math.random()*1) + ',' + Math.floor(Math.random()*1) + ',' + ((Math.random()*1.2)-0.8) + ')';
}

Snake.prototype.update = function(){

}

Snake.prototype.render = function(){
  ctx.beginPath();
  var loc = JSVector.addGetNew(orbs[0].vec, this.loc);
  ctx.arc(loc.x,loc.y,this.rad,0,2*Math.PI);
  //ctx.rect(this.loc.x,this.loc.y+this.rad,0,10000)
  //ctx.rect(this.loc.x,this.loc.y,this.loc.x+100,this.loc.y+100)
  ctx.fillStyle = this.c;
  ctx.fill();
  ctx.strokeStyle = this.c;
  ctx.stroke();
//   this.dragSegment(0, orbs[0].vec.x, orbs[0].vec.y);
//   for(var i=0; i<segs.length-1; i++) {
//    this.dragSegment(i+1, this.segs[i].x, this.segs[i].y);
//   }
}
//
// Snake.prototype.dragSegment = function(i, xin, yin) {
//   var dx = xin - this.segs[i].x;
//   var dy = yin - this.segs[i].y;
//   var angle = Math.atan2(dy, dx);
//   this.segs[i].x = xin - Math.cos(angle) * (this.rad*2);
//   this.segs[i].y = yin - Math.sin(angle) * (this.rad*2);
//   this.segment(this.segs[i].x, this.segs[i].y, angle);
// }
//
// Snake.prototype.segment = function(x, y, a) {
//   ctx.save();
//   ctx.translate(x, y);
//   ctx.rotate(a);
//   //ctx.line(0, 0, this.rad, 0);
//   ctx.restore();
// }
//
// Snake.prototype.applyForce = function(f){
//   this.acc.add(f);
// }
