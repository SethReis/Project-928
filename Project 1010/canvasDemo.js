window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var mouseLoc = new JSVector(0, 0);
var movers = [];
var atts = [];
var reps = [];

var x = [],
  y = [],
  segNum = 20,
  segLength = 18;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

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
    movers.push(new Mover());
  }
  for(var i = 0; i < 250; i++){
    atts.push(new Att());
  }
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
    for(var j = atts.length-1; j >= 0; j--){
      var mover = movers[i];
      var att = atts[j];
      var distance = att.loc.distance(mover.loc)
      if (distance <= 25){
        atts.splice(j, 1);
      }
    }
    for(var j = 0; j < atts.length; j++){
      var count = 0;
      var att= atts[j];
      var mover = movers[i];
      var distance = att.loc.distance(mover.loc)
      if (distance <= 200){
        var f = JSVector.subGetNew(atts[j].loc, movers[i].loc);
        f.normalize();
        f.mult(2.9);
        att.applyForce(f);
        count += 1;
      }
      if (count >= 10 && distance > 200){
        count = 0;
        att.vel.normalize();
      }
    }
  }
  for(var i = 0; i < atts.length; i++){
    var att = atts[i];
    att.update();
    att.render();
    // for(var j = 0; j < movers.length; j++){
    //   var mover = movers[j];
    //   var att = atts[i];
    //   var distance = mover.loc.distance(att.loc)
    //   if (distance <= 200){
    //     var f = JSVector.subGetNew(atts[i].loc, movers[j].loc);
    //     f.normalize();
    //     f.mult(3);
    //     mover.applyForce(f);
    //   }
    // }
  }
}
