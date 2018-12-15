/*var mainData;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.kdsatp.org/nnpp/"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => //if you have a function inside a function, you this to  
    console.log(JSON.parse(contents))
  //  mainData = JSON.parse(contents),
   // console.log(mainData)
)
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
console.log(mainData);*/
//Learning and what actually happened
//THeme that ties it all together
//
let data;
let ready = false;
async function setup(){
  createCanvas(1500,400);

  background(50);
}
function overCircle(x,y,diameter) {
  let disX = x - mouseX;
  let disY = y - mouseY;
  if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}

async function draw(){
  if(ready) {
    let r = 190;

    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);

  var IHWx1 = data["IHW"]["data"][0][0];
  var IHWx2 = data["IHW"]["data"][0][1];
  var IHWx3 = data["IHW"]["data"][0][2];
  var IHWy1 = data["IHW"]["data"][1][0];
  var IHWy2 = data["IHW"]["data"][1][1];
  var IHWy3 = data["IHW"]["data"][1][2];
  var IHWz1 = data["IHW"]["data"][2][0];
  var IHWz2 = data["IHW"]["data"][2][1];
  var IHWz3 = data["IHW"]["data"][2][2];
//console.log(IHWx3);
  textSize(10);
  let r2 = 255;
  fill(r2,IHWx1*255,0);
  rect(130,95, 140, 10); //top top
  
  
  fill(r2,IHWx2*255,0);
  rotate(0.55);
  rect(160,15, 180, 10); //top mid
  rotate(-0.55);
  
  fill(r2,IHWx3*255,0);
  rotate(0.89);
  rect(160,-35, 235, 10); //top low
  rotate(-0.89);
  
  fill(r2,IHWy2*255,0);
  rect(130,195, 140, 10); //mid mid
  
  fill(r2,IHWy1*255,0);
  rotate(-0.55);
  rect(0,230, 180, 10); //mid top
  rotate(0.55);

  fill(r2,IHWy3*255,0);
  rotate(0.55);
  rect(210,105, 180, 10); //mid low
  rotate(-0.55);
  
  fill(r2,IHWz3*255,0);
  rect(130,295, 140, 10); //low low
  
  fill(r2,IHWz2*255,0);
  rotate(-0.55);
  rect(-50,310, 180, 10); //low mid
  rotate(0.55);
  
  fill(r2,IHWz1*255,0);
  rotate(-0.89);
  rect(-170,280, 255, 10); // low top
  rotate(0.89);
  textSize(16);
  var i1 = data["inputs"][0];
  var i2 = data["inputs"][1];
  var i3 = data["inputs"][2];
  fill(r,0,i1*255);

  ellipse(100,100,60);
  if(overCircle(100,100,60)){ // mouse over top input node
    fill(0);
    textSize(10);
    text(IHWx1.toString().substring(0,5), 180,101);
    rotate(0.55);
    text(IHWx2.toString().substring(0,5), 220,20);
    rotate(-0.55);
    rotate(0.89);
    text(IHWx3.toString().substring(0,5), 210,-30);
    rotate(-0.89);

  }
  textSize(16);
  text(i1.toString().substring(0,5), 100,100);
  fill(r,0,i2*255);
  ellipse(100,200,60);

  if(overCircle(100,200,60)){ //mouse over mid node
    fill(0);
    textSize(10);
    text(IHWy2.toString().substring(0,5), 180,201);
    rotate(0.55);
    text(IHWy3.toString().substring(0,5), 260,110);
    rotate(-0.55);
    rotate(-0.55);
    text(IHWy1.toString().substring(0,5), 60,236);
    rotate(0.55);
  }
  textSize(16);
  text(i2.toString().substring(0,5), 100,200);
  fill(r,0,i3*255);
  ellipse(100,300,60);

  if(overCircle(100,300,60)){ //if mouse over low node
    fill(0);
    textSize(10);
    text(IHWz3.toString().substring(0,5), 180,301);
    rotate(-0.55);
    text(IHWz2.toString().substring(0,5), 30,316);
    rotate(0.55);
    rotate(-0.89);
    text(IHWz1.toString().substring(0,5), -70,286);
    rotate(0.89);


  }
  textSize(16);
  text(i3.toString().substring(0,5), 100,300);
  

  var h1 = data["hidden"][0];
  var h2 = data["hidden"][1];
  var h3 = data["hidden"][2];
  fill(r,0,h1*255);
  ellipse(300,100,60);
  if(overCircle(300,100,60)){
    fill(225);
  }
  text(h1.toString().substring(0,5), 300,100);
  fill(r,0,h2*255);
  ellipse(300,200,60);

  if(overCircle(300,200,60)){
    fill(225);
  }
  
  text(h2.toString().substring(0,5), 300,200);
  fill(r,0,h3*255);
  ellipse(300,300,60);

  if(overCircle(300,300,60)){
    fill(225);
  }
  text(h3.toString().substring(0,5), 300,300);
  var o1 = data["outputs"][0];
  var o2 = data["outputs"][1];
   

  fill(r,0,o1*255);
  ellipse(500,150,60);
  if(overCircle(500,150,60)){
    fill(225);
  }
  text(o1.toString().substring(0,5), 500,150);
  fill(r,0,o2*255);
  ellipse(500,250,60);

  if(overCircle(500,250,60)){
    fill(225);
  }
  
  text(o2.toString().substring(0,5), 500,250);
  
  
  }

}

async function getData() {
  let req = await fetch('https://kdsatp.org/nnpp/');
  let data = await req.json();
  console.log(data);
  ready = true;
  return data;
}
async function setData(){
  data = await getData();
}
setInterval(setData, 1000);
/*async function onLoad() {
  let data = await getData();
}
*/
//window.onload = onLoad;