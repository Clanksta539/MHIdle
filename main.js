var resources = 0;

function gatherClick(number){
	resources = resources + number;
    document.getElementById("resources").innerHTML = resources;
};

var gatherers = 0;

function trainCat(){
    var trainingCost = Math.floor(10 * Math.pow(1.1,gatherers));     //works out the cost of this cursor
    if(resources >= trainingCost){                                   //checks that the player can afford the cursor
        gatherers = gatherers + 1;                                   //increases number of gatherers
        resources = resources - trainingCost;                          //removes the resources spent
        document.getElementById('gatherers').innerHTML = gatherers;  //updates the number of gatherers for the user
        document.getElementById('resources').innerHTML = resources;  //updates the number of resources for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,gatherers));       //works out the cost of the next cursor
    document.getElementById('trainingCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

    gatherClick(gatherers);

}, 1000);
