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
		
		categoriesArray.forEach(function(category){
			if(currentProductId === category.id){
				product["categoryName"] = category.name;
				product["season"] = category.season_discount;
				product["priceDiscount"] = category.discount;
				product["finalPrice"] = product.price - (product.price * product.priceDiscount);
			}
			
		 });
	 });
	console.log("new array with category name", productsArray);
};

//if statement if selected season from dropdown === getProduct[i].season print final price
//else print price

function domString(getProduct){
	var productString = "";
	for(var i = 0; i < getProduct.length; i++){
		productString += `<div class="product">`;
		productString += `<h2>${getProduct[i].name}</h2>`;
	if("winter" === getProduct[i].season){
		productString += `<p class="price">${getProduct[i].finalPrice}</p>`;
	} else{
		productString += `<p class="price">${getProduct[i].price}</p>`;
	}
		productString += `<p class="category">${getProduct[i].category_id}</p>`;
		productString += `</div>`;
	}
	writeToDom(productString);
}

function writeToDom(items){
	document.getElementById("items").innerHTML=items;
}
