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
	selectString += `<select id="select">`;
	selectString +=	`<option value=${selector[i].id}>${selector[i].season_discount}</option>`;
	selectString += `</select>`;
	}	
	writeToSelector(selectString);	
}

function writeToSelector(choices){
	document.getElementById("season").innerHTML=choices;
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