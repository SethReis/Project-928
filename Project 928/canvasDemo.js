window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var mouseX;
var mouseY;
var movers = [];
var atts = [];
var reps = [];

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
  for(var i = 0; i < 50; i++){
    movers.push(new Mover());
  }
  for(var i = 0; i < 1; i++){
    atts.push(new Att());
  }
  for(var i = 0; i < 1; i++){
    reps.push(new Rep());
  }
  animate(); // Call to your animate function
}
// To do::
//  1. Declare and init variables x, y, dx, dy, radius;
function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < movers.length; i++){
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
      if (distance <= 300 && distance >= 50){
        var f = JSVector.subGetNew(atts[i].loc, movers[j].loc);
        f.normalize();
        f.mult(3);
        mover.applyForce(f);
      }
    }
  }
  for(var i = 0; i < reps.length; i++){
    var rep = reps[i];
    rep.update();
    rep.render();
    for(var j = 0; j < movers.length; j++){
      var mover = movers[j];
      var rep = reps[i];
      var distance = mover.loc.distance(rep.loc)
      if (distance <= 200){
        var f = JSVector.subGetNew(movers[j].loc, reps[i].loc);
        f.normalize();
        f.mult(3);
        mover.applyForce(f);
      }
    }
  }
}
