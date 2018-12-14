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
let data;
let ready = false;
async function setup(){
  createCanvas(1000,400);

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
    textSize(15);
    textAlign(CENTER, CENTER);

  var i1 = data["inputs"][0];
  var i2 = data["inputs"][1];
  var i3 = data["inputs"][2];
  fill(0,0,i1*255);
  ellipse(100,100,60);
  if(overCircle(100,100,60)){
    fill(225);
  }
  text(i1.toString().substring(0,5), 100,100);
  fill(0,0,i2*255);
  ellipse(100,200,60);

  if(overCircle(100,200,60)){
    fill(225);
  }
  
  text(i2.toString().substring(0,5), 100,200);
  fill(0,0,i3*255);
  ellipse(100,300,60);

  if(overCircle(100,300,60)){
    fill(225);
  }
  text(i3.toString().substring(0,5), 100,300);
  }

  var i1 = data["inputs"][0];
  var i2 = data["inputs"][1];
  var i3 = data["inputs"][2];
  ellipse(300,100,60);
  ellipse(300,200,60);
  ellipse(300,300,60);

  ellipse(500,150,60);
  ellipse(500,250,60);



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
setInterval(setData, 4000);
/*async function onLoad() {
  let data = await getData();
}
*/
//window.onload = onLoad;