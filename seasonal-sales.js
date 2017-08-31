console.log("in seasonal sales");

function putProductsInDom(){
	var productsData = JSON.parse(this.responseText);
	console.log("products data", productsData.products);
	getCategory(productsData.products);
}

function doThisIfErrors(){
	console.log("It's broken");
}


var myProducts = new XMLHttpRequest();
myProducts.addEventListener("load", putProductsInDom);
myProducts.addEventListener("error", doThisIfErrors);
myProducts.open("GET", "products.json")
myProducts.send();



function getCategory(stuff){
	var myCategories = new XMLHttpRequest();
	myCategories.addEventListener("load", putProductsInSelector);
	myCategories.addEventListener("error", doThisIfErrors);
	myCategories.open("GET", "categories.json")
	myCategories.send();

	function putProductsInSelector(){
		var categoriesData = JSON.parse(this.responseText).categories;
		console.log("categories", categoriesData);
		console.log("stuff", stuff);
		combineArray(stuff, categoriesData);

	}
}

function combineArray(productsArray, categoriesArray){
	productsArray.forEach(function(product){
		var currentProductId = product.category_id;
		console.log("products with category_id", currentProductId);
		
		// categoriesArray.forEach(function(categories){
		// 	if(currentProductId === categories.id){
		// 		product["categoryName"] = categories.name;
		// 	}
		// 	console.log("new array with category name", product);
		 });
	};




function buildSelectString(selector){
	var selectString = "";
	for(var i = 0; i < selector.length; i++){
	selectString +=	`<option class="options" value=${selector[i].id}>${selector[i].season_discount}</option>`;
	}	
	writeToSelector(selectString);	
}



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