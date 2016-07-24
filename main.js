var herbs = 0;
var meat = 0;
var felynes = 1; //these cats do what you tell them.
var farmers = 0; //these are automatic cats.
var hunters = 0;
var loopCount = 0;
var hunger = 1;

function unhide(x) {
    document.getElementById(x).style.display = "hide";
};


function farmClick(number) {
    herbs = herbs + number;
    document.getElementById("herbs").innerHTML = herbs;
};

function meatClick(number) {
    meat = meat + number;
    document.getElementById("meat").innerHTML = meat;
};

function hireCat() {//hiring spare cats
    var hireCost = Math.floor(10 * Math.pow(1.1, felynes));
    if (herbs >= hireCost) {
        felynes = felynes + 1;
        herbs = herbs - hireCost;
        document.getElementById('felynes').innerHTML = felynes;
        document.getElementById('herbs').innerHTML = herbs;
        var nextCost = Math.floor(10 * Math.pow(1.1, felynes));
        document.getElementById('hiringCost').innerHTML = nextCost;
    }
}

function trainCatFarm() {
    var trainingCost = Math.floor(10 * Math.pow(1.1, farmers));
    var nextCost;
    if (herbs >= trainingCost & felynes > 0) {
        farmers = farmers + 1;
        herbs = herbs - trainingCost;
        felynes = felynes - 1; //removes from spare pool
        document.getElementById('farmers').innerHTML = farmers;
        document.getElementById('felynes').innerHTML = felynes;

        nextCost = Math.floor(10 * Math.pow(1.1, felynes));
        document.getElementById('hiringCost').innerHTML = nextCost;

        document.getElementById('herbs').innerHTML = herbs;
    };
    nextCost = Math.floor(10 * Math.pow(1.1, farmers));
    document.getElementById('trainingCostFarm').innerHTML = nextCost;
};

function trainCatHunt() {
    var trainingCost = Math.floor(10 * Math.pow(1.1, hunters));
    var nextCost;
    if (herbs >= trainingCost & felynes > 0) {
        hunters = hunters + 1;
        herbs = herbs - trainingCost;
        felynes = felynes - 1; //removes from spare pool
        document.getElementById('hunters').innerHTML = hunters;
        document.getElementById('felynes').innerHTML = felynes;

        nextCost = Math.floor(10 * Math.pow(1.1, felynes));
        document.getElementById('hiringCost').innerHTML = nextCost;

        document.getElementById('herbs').innerHTML = herbs;
    };
    nextCost = Math.floor(10 * Math.pow(1.1, hunters));
    document.getElementById('trainingCostHunt').innerHTML = nextCost;
};

window.setInterval(function () {
    loopCount++
    var loopCheck = 0;
    var endLoop = false;

    //feed check
    while (hunger > 1 && endLoop == false) {
        if (meat > farmers + hunters) {
            meat = meat - farmers - hunters;
            hunger--;
        } else {
            endLoop = true;
        }
    }

    //every 1/2 seconds
    loopCheck = loopCount % 1 * hunger;

    //every second
    loopCheck = loopCount % 2 * hunger;
    if (loopCheck == 0) {
        farmClick(farmers);
    }

    //every 2 seconds
    loopCheck = loopCount % 4 * hunger;
    if (loopCheck == 0) {
        meatClick(hunters);
    }

    //30 seconds
    loopCheck = loopCount % 60
    if (loopCheck == 0) {
        hunger++;
    }

    loopCount % 120//60 seconds
}, 500);
