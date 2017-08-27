console.log("in seasonal sales");

function domString(getProduct){
	var productString = "";
	for(var i = 0; i < getProduct.length; i++){
		productString += `<div class="product">`;
		productString += `<h2>${getProduct[i].name}</h2>`;
		productString += `<p class="price">${getProduct[i].price}</p>`;
		productString += `<p class="category">${getProduct[i].category_id}</p>`;
		productString += `</div>`;
	}
	writeToDom(productString);
}





function writeToDom(items){
	document.getElementById("items").innerHTML=items;
}

function putProductsInDom(){
	var data = JSON.parse(this.responseText);
	domString(data.products);
}

function doThisIfErrors(){
	console.log("It's broken");
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", putProductsInDom);
myRequest.addEventListener("error", doThisIfErrors);
myRequest.open("GET", "products.json")
myRequest.send();



function buildSelectString(selector){
	var selectString = "";
	for(var i = 0; i < selector.length; i++){
	selectString +=	`<option class="options" value=${selector[i].id}>${selector[i].season_discount}</option>`;
	}	
	writeToSelector(selectString);	


var stuff = document.getElementsByClassName("category");

function changeCatName(){
	for(var j = 0; j < category.length; j++)
		if (category.value == 1){
			stuff.innerHTML = "Apparel";
		} if (category.value == 2) {
			stuff.innerHTML = "Furniture";
		} if (category.value == 3){
			stuff.innerHTML = "Household";
		}
}
}

function writeToSelector(choices){
	document.getElementById("select").innerHTML=choices;
}

function putProductsInSelector(){
	var data = JSON.parse(this.responseText);
	buildSelectString(data.categories)
}

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", putProductsInSelector);
myRequest2.addEventListener("error", doThisIfErrors);
myRequest2.open("GET", "categories.json")
myRequest2.send();

// var newPrice;
// var selectedSeason = document.getElementsByClassName("options");

// function changePrice(){
// 	if(selectedSeason = "Spring"){
// 		newPrice = parseInt(document.getElementsByClassName("price")) * 0.85;
// 	}
// 	console.log(newPrice);
// }

// document.getElementById("select").addEventListener("onChange", changePrice);