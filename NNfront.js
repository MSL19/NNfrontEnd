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
  pixelDensity(5);
  //fullScreen();
  createCanvas(1500,500);

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
    let r = 255;

    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);

  let IHWx1 = data["IHW"]["data"][0][0];
  let IHWx2 = data["IHW"]["data"][0][1];
  let IHWx3 = data["IHW"]["data"][0][2];
  let IHWy1 = data["IHW"]["data"][1][0];
  let IHWy2 = data["IHW"]["data"][1][1];
  let IHWy3 = data["IHW"]["data"][1][2];
  let IHWz1 = data["IHW"]["data"][2][0];
  let IHWz2 = data["IHW"]["data"][2][1];
  let IHWz3 = data["IHW"]["data"][2][2];

  let BH1 = data["BH"]["data"][0];
  let BH2 = data["BH"]["data"][1];
  let BH3 = data["BH"]["data"][2];

  let HOWx1 = data["HOW"]["data"][0][0];
  let HOWx2 = data["HOW"]["data"][0][1];
  let HOWx3 = data["HOW"]["data"][1][2];
  let HOWy1 = data["HOW"]["data"][1][0];
  let HOWy2 = data["HOW"]["data"][1][1];
  let HOWy3 = data["HOW"]["data"][0][2];

  let BO1 = data["BO"]["data"][0];
  let BO2 = data["BO"]["data"][1];
//console.log(IHWx3);
  textSize(10);
  let r2 = 250;
  fill(r2,IHWx1*255,255);
  rect(130,95, 140, 10); //top top
  
  
  fill(r2,IHWy1*255,255);
  rotate(0.55);
  rect(160,15, 180, 10); //top mid
  rotate(-0.55);
  
  fill(r2,IHWz1*255,255);
  rotate(0.89);
  rect(160,-35, 235, 10); //top low
  rotate(-0.89);
  
  fill(r2,IHWy2*255,255);
  rect(130,195, 140, 10); //mid mid
  
  fill(r2,IHWx2*255,255);
  rotate(-0.55);
  rect(0,230, 180, 10); //mid top
  rotate(0.55);

  fill(r2,IHWz2*255,255);
  rotate(0.55);
  rect(210,105, 180, 10); //mid low
  rotate(-0.55);
  
  fill(r2,IHWz3*255,255);
  rect(130,295, 140, 10); //low low
  
  fill(r2,IHWy2*255,255);
  rotate(-0.55);
  rect(-50,310, 180, 10); //low mid
  rotate(0.55);
  
  fill(r2,IHWx3*255,255);
  rotate(-0.89);
  rect(-170,280, 255, 10); // low top
  rotate(0.89);
  textSize(16);

  fill(r2,IHWz3*255,255);
  rect(130,295, 140, 10); //low low
  

  fill(r2,BH3*255,255);
  rect(330,295, 140, 10); //low low
fill(r2,BH2*255,255);
  rect(330,195, 140, 10); //low low
    fill(r2,BH1*255,255);
  rect(330,95, 140, 10); //low low
    

  fill(r2,255,255);
  rect(530,295, 140, 10); //low low
fill(r2,255,255);
  rect(530,195, 140, 10); //low low
    fill(r2,255,255);
  rect(530,95, 140, 10); //low low
  
  rotate(0.3);
  fill(r2,HOWx1*255,255);
  rect(720,-125, 170, 10); //low low
  rotate(-0.3);

  rotate(0.73);
  fill(r2,HOWy1*255,255);
  rect(610,-405, 220, 10); //low low
  rotate(-0.73);

  rotate(-0.3);
  fill(r2,HOWx2*255,255);
  rect(600,400, 200, 10); //low low
  rotate(0.3);

  rotate(0.3);
  fill(r2,HOWy2*255,255);
  rect(720,-20, 200, 10); //low low
  rotate(-0.3);

  rotate(-0.3);
  fill(r2,HOWx3*255,255);
  rect(600,500, 170, 10); //low low
  rotate(0.3);

  rotate(-0.73);
  fill(r2,HOWy3*255,255);
  rect(340,697, 220, 10); //low low
  rotate(0.73);

  fill(r2,BO1*255,255);
  rect(930,145, 140, 10); //low low

  fill(r2,BO2*255,255);
  rect(930,245, 140, 10); //low low

  fill(r2,255,255);
  rect(1130,145, 140, 10); //low low
  rect(1130,245, 140, 10); //low low

  var i1 = data["inputs"][0];
  var i2 = data["inputs"][1];
  var i3 = data["inputs"][2];
  let message = "undef";
  if(data["outputs"][0]>data["outputs"][1]){
    message = "Stock Price will go UP";
  }
  else{
    message = "Stock Price will go DOWN";

  }
  var price = data["currentPrice"];
  var vol = data["currentVolume"];
  var intrest = data["currentIntrest"];
  let correctPer = data["numCorrect"]/data["totalRuns"]*100;
  let numRuns = data["totalRuns"];
  fill(230);
  text("[INPUT NODES]", 100,50);
  text("[INPUT WEIGHTS]", 200,80);

  text("[HIDDEN NODES]", 300,50);
  text("[HIDDEN BIASES]", 400,80);

  text("[SIGMOID FN]", 600,80);
  rotate(0.30);
  text("[HIDDEN WEIGHTS]", 795,-145);
  rotate(-0.30);
  text("[OUTPUT BIASES]", 1000,130);

  text("[SIGMOID FN]", 1200,130);
  text("[OUTPUT NODES]", 1300,100);
  text("[RESULT FROM COMPARING OUTPUTS]: \n"+"["+message+"]", 1320,200);

  textSize(20);
  text("Apple Stock Price: $"+price, 200,360);
  text("Apple Stock Volume: "+vol, 550,360);
  text("Apple Stock Interest: "+intrest, 850,360);
  text("Prediction Correctness: "+correctPer+"%", 1120,360);
  text("Number of runs: "+numRuns, 1370,360);
  text("**How This Site Works**", 200,390);
  textAlign(LEFT, CENTER);
  text("This site is a graphical representation of a neural network I created to predict the price of Apple stock.\nEach node, weight, and bias of the netowrk is colorized based on it's value.\nTo see specific values, hover your mouse over each node.  -By MAX L. for AT CS", 100,450);
  textAlign(CENTER, CENTER);

  fill(r,0,i1*255);

  ellipse(100,100,60);
  if(overCircle(100,100,60)){ // mouse over top input node
    fill(0);
    textSize(10);
    text(IHWx1.toString().substring(0,5), 180,101);
    rotate(0.55);
    text(IHWy1.toString().substring(0,5), 220,20);
    rotate(-0.55);
    rotate(0.89);
    text(IHWz1.toString().substring(0,5), 210,-30);
    rotate(-0.89);
    //textSize(20);
    //fill(230);

  }
  textSize(16);
  text(i1.toString().substring(0,5), 100,100);
  fill(r,0,i2*255);
  ellipse(100,200,60);

  if(overCircle(100,200,60)){ //mouse over mid node
    fill(0);
    textSize(10);
    text(IHWy2.toString().substring(0,5), 170,201);
    rotate(0.55);
    text(IHWz2.toString().substring(0,5), 250,110);
    rotate(-0.55);
    rotate(-0.55);
    text(IHWx2.toString().substring(0,5), 50,236);
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
    text(IHWy3.toString().substring(0,5), 30,316);
    rotate(0.55);
    rotate(-0.89);
    text(IHWx3.toString().substring(0,5), -70,286);
    rotate(0.89);


  }
  textSize(16);
  text(i3.toString().substring(0,5), 100,300);
  

  var h1 = data["hiddenRaw"][0];
  var h2 = data["hiddenRaw"][1];
  var h3 = data["hiddenRaw"][2];
  fill(r,0,Math.abs(h1*255));
  ellipse(300,100,60);
  if(overCircle(300,100,60)){
    fill(0);
    textSize(10);
    text(BH1.toString().substring(0,5), 360,101);

  }
  textSize(16);
  text(h1.toString().substring(0,5), 300,100);
  fill(r,0,Math.abs(h2*255));
  ellipse(300,200,60);

  if(overCircle(300,200,60)){
    fill(0);
    textSize(10);
    text(BH2.toString().substring(0,5), 360,201);

  }
  textSize(16);
  text(h2.toString().substring(0,5), 300,200);
  fill(r,0,Math.abs(h3*255));
  ellipse(300,300,60);

  if(overCircle(300,300,60)){
    fill(0);
    textSize(10);
    text(BH3.toString().substring(0,5), 360,301);

  }
  textSize(16);
  text(h3.toString().substring(0,5), 300,300);
  
  
  var hB1 = data["hiddenB"][0];
  var hB2 = data["hiddenB"][1];
  var hB3 = data["hiddenB"][2];
  fill(r,0,Math.abs(hB1*255));
  ellipse(500,100,60);
  if(overCircle(500,100,60)){ //mouse over hidden top hidden node
    fill(0);
  }
  text(hB1.toString().substring(0,5), 500,100);
  fill(r,0,Math.abs(hB2*255));
  ellipse(500,200,60);

  if(overCircle(500,200,60)){
    fill(0);
  }
  
  text(hB2.toString().substring(0,5), 500,200);
  fill(r,0,Math.abs(hB3*255));
  ellipse(500,300,60);

  if(overCircle(500,300,60)){
    fill(0);
  }
  text(hB3.toString().substring(0,5), 500,300);
  
  
  var hF1 = data["hidden"][0];
  var hF2 = data["hidden"][1];
  var hF3 = data["hidden"][2];
  fill(r,0,Math.abs(hF1*255));
  ellipse(700,100,60);
  if(overCircle(700,100,60)){ //mouse over hidden top hidden node
    fill(0);
    rotate(0.3);
    textSize(10);
    text(HOWx1.toString().substring(0,5), 750,-119);
    rotate(-0.3);
    rotate(0.73);
    text(HOWy1.toString().substring(0,5), 640,-400);
    rotate(-0.73);

  }
  textSize(16)
  text(hF1.toString().substring(0,5), 700,100);
  fill(r,0,Math.abs(hF2*255));
  ellipse(700,200,60);

  if(overCircle(700,200,60)){
    fill(0);
    rotate(-0.3);
    textSize(10);
    text(HOWx2.toString().substring(0,5), 660,405);
    rotate(0.3);
    rotate(0.3);
    text(HOWy2.toString().substring(0,5), 780,-15);
    rotate(-0.3);
  
  }
  textSize(16);
  text(hF2.toString().substring(0,5), 700,200);
  fill(r,0,Math.abs(hF3*255));
  ellipse(700,300,60);

  if(overCircle(700,300,60)){
    fill(0);
    textSize(10);
    rotate(-0.3);
    text(HOWx3.toString().substring(0,5), 650,505);
    rotate(0.3);
    rotate(-0.73);
    text(HOWy3.toString().substring(0,5), 380,703);
    rotate(0.73);


  }
  textSize(16);
  text(hF3.toString().substring(0,5), 700,300);

  var oR1 = data["outputsRaw"][0];
  var oR2 = data["outputsRaw"][1];
   

  fill(r,0,Math.abs(oR1)*255);
  ellipse(900,150,60);
  if(overCircle(900,150,60)){
    fill(0);
    textSize(10);
    text(BO1.toString().substring(0,5), 960,150);

  }
  textSize(16);
  text(oR1.toString().substring(0,5), 900,150);
  fill(r,0,Math.abs(oR2)*255);
  ellipse(900,250,60);

  if(overCircle(900,250,60)){
    fill(0);
    textSize(10);
    text(BO2.toString().substring(0,5), 960,250);

  }
  textSize(16);
  text(oR2.toString().substring(0,5), 900,250);
  
  var oB1 = data["outputsB"][0];
  var oB2 = data["outputsB"][1];
   

  fill(r,0,Math.abs(oB1)*255);
  ellipse(1100,150,60);
  if(overCircle(1100,150,60)){
    fill(0);
    
  }
  text(oB1.toString().substring(0,5), 1100,150);
  fill(r,0,Math.abs(oB2)*255);
  ellipse(1100,250,60);

  if(overCircle(1100,250,60)){
    fill(0);
  }
  text(oB2.toString().substring(0,5), 1100,250);
  
  var o1 = data["outputs"][0];
  var o2 = data["outputs"][1];
   

  fill(r,0,Math.abs(o1)*255);
  ellipse(1300,150,60);
  if(overCircle(1300,150,60)){
    fill(0);
    
    
  }
  text(o1.toString().substring(0,5), 1300,150);
  fill(r,0,Math.abs(o2)*255);
  ellipse(1300,250,60);

  if(overCircle(1300,250,60)){
    fill(0);
  }
  text(o2.toString().substring(0,5), 1300,250);
  
  
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
