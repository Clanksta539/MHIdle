var resources = 0;
var felynes = 1; //these cats do what you tell them.
var gatherers = 0; //these are automatic cats.

function gatherClick(number){
	resources = resources + number;
    document.getElementById("resources").innerHTML = resources;
};

function hireCat() {//hiring spare cats
    var hireCost = Math.floor(10 * Math.pow(1.1, felynes));
    if (resources >= hireCost) {
        felynes = felynes + 1;
        resources = resources - hireCost;
        document.getElementById('felynes').innerHTML = felynes;
        document.getElementById('resources').innerHTML = resources;
        var nextCost = Math.floor(10 * Math.pow(1.1, felynes));
        document.getElementById('hiringCost').innerHTML = nextCost;
    }
}

function trainCat(){
    var trainingCost = Math.floor(10 * Math.pow(1.1,gatherers));     
    if(resources >= trainingCost & felynes > 0){ 
        gatherers = gatherers + 1; 
        resources = resources - trainingCost;
        felynes = felynes - 1; //removes from spare pool
        document.getElementById('gatherers').innerHTML = gatherers;
        document.getElementById('felynes').innerHTML = felynes;
        document.getElementById('resources').innerHTML = resources;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,gatherers)); 
    document.getElementById('trainingCost').innerHTML = nextCost;
};

window.setInterval(function(){

    gatherClick(gatherers);

}, 1000);
