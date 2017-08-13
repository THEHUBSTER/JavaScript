
function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	
	
	
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("Size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 += selectedSize;
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
    getCheese(runningTotal,text1); // All three of these variables will be passed on to each function

};

function getCheese(runningTotal,text1){
	var cheeseTotal = 0;
    var selectedCheese;
	var cheeseArray = document.getElementsByName("Cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
			text1 += selectedCheese;
		}
	}
	if (selectedCheese === "Extra Cheese") { 
				cheeseTotal = 3;
	}
	runningTotal += cheeseTotal;
	getCrust(runningTotal,text1);
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0 ;
	var selectedCrust;
	var crustArray = document.getElementsByName("Crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 += selectedCrust;
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
				crustTotal = 3;
	}
		runningTotal += crustTotal;
		getSauce(runningTotal,text1);
};

function getSauce(runningTotal,text1){
	var sauceTotal = 0;
    var selectedSauce;
	var sauceArray = document.getElementsByName("Sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 += selectedSauce;
		}

	runningTotal += sauceTotal;
	getVeggies(runningTotal,text1);
	}
};

function getVeggies(runningTotal,text1) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("Veggies");
	for (var j = 0; j < veggiesArray.length; j++) {
		if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);
			console.log("selected veggies item: ("+veggiesArray[j].value+")");
			text1 = text1+veggiesArray[j].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	runningTotal += veggiesTotal;
	getMeats(runningTotal,text1);
};

function getMeats(runningTotal,text1) {
	var meatsTotal = 0;
	var selectedMeats = [];
	var meatsArray = document.getElementsByClassName("Meats");
	for (var j = 0; j < meatsArray.length; j++) {
		if (meatsArray[j].checked) {
			selectedMeats.push(meatsArray[j].value);
			console.log("selected meats item: ("+meatsArray[j].value+")");
			text1 = text1+meatsArray[j].value+"<br>";
		}
	}
	var meatsCount = selectedMeats.length;
	if (meatsCount > 1) {
		meatsTotal = (meatsCount - 1);
	} else {
		meatsTotal = 0;
	}
	runningTotal = (runningTotal + meatsTotal);
	console.log("total selected meat items: "+meatsCount);
	console.log(meatsCount+" meats - 1 free meats = "+"$"+meatsTotal+".00");
	console.log("meats text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};		
		





















