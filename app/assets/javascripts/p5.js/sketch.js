// allow initial amplitude to =1
// Amplitudes
var A1;
var A2;
var A3;
var A4;

// Frequencies
var f1;
var f2;
var f3;
var f4;

//Phases
var p1;
var p2;
var p3;
var p4;

// Dampers
var d1;
var d2;
var d3;
var d4;

var prevX;
var prevY;
var X;
var Y;
var RedrawToggle;
var BeginShapeToggle;
var EndShapeToggle;

var t;
function setup()
{
  t=0;
  // allow initial amplitude to =1
  // Amplitudes
  A1 = 6;
  A2 = 1;
  A3 = 1;
  A4 = 1;

  // Frequencies
  f1 = 3.001;
  f2 = 6.09;
  f3 = 3;
  f4 = 6;

   //Phases
  p1 = 0;
  p2 = 0;
  p3 = 180;
  p4 = 270;

  // Dampers
  d1 = 0.004;
  d2 = 0.0065;
  d3 = 0.008;
  d4 = 0.019;

  frameRate(100);
  createCanvas(windowWidth, windowHeight);
}

function draw()
{
  t += 0.025;

  //console.log(t);
  noFill();
  strokeWeight(1);
  strokeJoin(round);

//  if(RedrawToggle)
  //{
    drawHarmonograph();
//  }

}

function drawHarmonograph()
{
  if(t <= 150)
  {
    prevX = X;
    prevY = Y;

    X = (windowWidth/15) * HarmonographX(t) + (windowWidth/2);
    Y = (windowHeight/15) * HarmonographY(t) + (windowHeight/2);
    console.log(X);
    beginShape();
    line(prevX, prevY, X, Y);
    endShape();
  }
  else
  {
      RedrawToggle = 0;
      EndShapeToggle = 1;
  }

}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

function updateAndClear()
{
  clear();

  var x = document.getElementById("Amplitudes");

  A1 = x.elements[0].value;
  A2 = x.elements[1].value;
  A3 = x.elements[2].value;
  A4 = x.elements[3].value;

  RedrawToggle = 1;
  BeginShapeToggle = 1;
  EndShapeToggle = 0;
}

function HarmonographX(t)
{
  x = (A1 * sin((t * f1) + p1) * (exp(-d1 * t))) +
      (A2 * sin((t * f2) + p2) * (exp(-d2 * t)));

  return x;
}

function HarmonographY(t)
{
  y = (A3 * sin((t * f3) + p3) * (exp(-d3 * t))) +
      (A4 * sin((t * f4) + p4) * (exp(-d4 * t)));

  return y;
}
