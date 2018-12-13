/*var mainData;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://www.kdsatp.org/nnpp/"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => 
    console.log(JSON.parse(contents))
  //  mainData = JSON.parse(contents),
   // console.log(mainData)
)
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
console.log(mainData);*/
var xmlhttp = new XMLHttpRequest();
var mainJSONData;
var url = "https://cors-anywhere.herokuapp.com/https://www.kdsatp.org/nnpp/";
function setup(){
  createCanvas(600,300);
}
function draw(){
  fill(0);
  ellipse(150,250,60);
}
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var nnData = JSON.parse(this.responseText);
   // myFunction(myArr);
   console.log(nnData);
   var BH = nnData["BH"]["data"];
   var BO = nnData["BO"]["data"];
   var HOW = nnData["HOW"]["data"];
   var IHW = nnData["IHW"]["data"];
   console.log(BO);
   console.log(IHW);
 //  mainJSONData = nnData;
      
  }
  
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

//console.log(mainJSONData);
