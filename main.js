var resources = 0;
var felynes = 1;
function gatherClick(number){
	resources = resources + number;
    document.getElementById("resources").innerHTML = resources;
};

var gatherers = 0;

function trainCat(){
    var trainingCost = Math.floor(10 * Math.pow(1.1,gatherers));     
    if(resources >= trainingCost & felynes > 0){ 
        gatherers = gatherers + 1; 
        resources = resources - trainingCost;
        felynes = felynes - 1;
        document.getElementById('gatherers').innerHTML = gatherers;  
        document.getElementById('resources').innerHTML = resources;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,gatherers)); 
    document.getElementById('trainingCost').innerHTML = nextCost;
};

window.setInterval(function(){

    gatherClick(gatherers);

}, 1000);