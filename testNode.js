var https = require("https");

function getNumRuns(){
    return new Promise(function(resolve, reject){
    var request = https.request({
        method: "GET",
        host: "www.kdsatp.org", //"api.intrinio.com",
        path: "/nnpp/", 
    }, function(response) {
        var json = "";
        response.on('data', function (chunk) {
            json += chunk;
        });
        response.on('end', function() {
            var jsonRAW = JSON.parse(json);
            //console.log(company);
            
            
            console.log(jsonRAW);
               let runs = jsonRAW["totalRuns"];
             
          
            resolve(runs);
        });
    });
    request.end();
    });
    }
    async function test(){
        var runsNum = await getNumRuns();
        console.log(runsNum);
    }
    test();