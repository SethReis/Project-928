window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var mouseLoc = new JSVector(0, 0);
var movers = [];
var atts = [];
var orbs = [];
var snakes = []


function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 0px';
  //canvas.style.backgroundColor = 'gray';
  canvas.style.backgroundColor = 'rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.random() + ')';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  for(var i = 0; i < 1; i++){
    snakes.push(new Snake());
  }
  for(var i = 0; i < 1; i++){
    movers.push(new Mover());
  }
  for(var i = 0; i < 1; i++){
    orbs.push(new Orb());
  }
  // for(var i = 0; i < 250; i++){
  //   atts.push(new Att());
  // }
  canvas.addEventListener("mousemove", handleMouseMove);
  animate(); // Call to your animate function
}
function handleMouseMove(evt){
  mouseLoc.x = evt.offsetX;
  mouseLoc.y = evt.offsetY;
}
// To do::
//  1. Declare and init variables x, y, dx, dy, radius;
function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(var i = movers.length-1; i >= 0; i--){
    var mover = movers[i];
    mover.update();
    mover.render();
  }
  for(var i = 0; i < atts.length; i++){
    var att = atts[i];
    att.update();
    att.render();
    for(var j = 0; j < movers.length; j++){
      var mover = movers[j];
      var att = atts[i];
      var distance = mover.loc.distance(att.loc)
      if (distance <= 200){
        var f = JSVector.subGetNew(atts[i].loc, movers[j].loc);
        f.normalize();
        f.mult(3);
        mover.applyForce(f);
      }
    }
  }
  for(var i = 0; i < orbs.length; i++){
    var orb = orbs[i];
    orb.update();
    orb.render();
  }
  for(var i = 0; i < snakes.length; i++){
    var snake = snakes[i];
    snake.update();
    snake.render();
    for(var j = atts.length-1; j >= 0; j--){
      var snake = snakes[i];
      var att = atts[j];
      var distance = att.loc.distance(snake.loc)
      if (distance <= 25){
        atts.splice(j, 1);
      }
    }
    for(var j = 0; j < atts.length; j++){
      var att= atts[j];
      var snake = snakes[i];
      var distance = att.loc.distance(snake.loc)
      if (distance <= 200){
        var f = JSVector.subGetNew(atts[j].loc, snakes[i].loc);
        f.normalize();
        f.mult(2.9);
        att.applyForce(f);
      }
      if (count >= 10 && distance > 200){
        att.vel.normalize();
      }
    }
  }
}
