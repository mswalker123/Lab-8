//Shopping Cart Items
var list = [];//empty array

var poultry={
  name:'chicken',
  price: 3.00
}

var veggies ={
  name:'String Beans',
  price: 2.50
}

var fish ={
  name:'Salmon',
  price: 15.03
}

var snackFood ={
  name:'Lays Potato Chips',
  price: 3.75
}

var fruit ={
  name:'mango',
  price: 5.25
}

list.push(poultry);
list.push(veggies);
list.push(fish);
list.push(snackFood);
list.push(fruit);





//only want one container so DO NOT put it in the LOOP BELOW
var receipt = document.createElement('div');//creates a div container
receipt.id = ('receiptContainer');//creates a class w/name for div
document.body.appendChild(receipt);
receiptContainer.style = 'background-color: pink;' //background-color is pink

document.getElementById('receiptContainer').style.width = '300px';

var receiptContents = document.getElementById('div'); //adds receiptContents to div

var shoppingList= document.createElement('ul');
receiptContainer.appendChild(shoppingList);//add shopping list into container
shoppingList.style = 'background-color: yellow;'

var sum =0
list.forEach(function(groceryItems){
  sum += groceryItems.price;
  console.log('Item: ' + groceryItems.name + ' ' + '$' + (groceryItems.price).toFixed(2));


var listItems = document.createElement('li');
listItems.textContent = itemName + itemPrice;


  //created the variable to represent our item name,
  //know as groceryItems, created a blank element called "textContent".
  //used the apprendChild metho to add content to our empty element.
      var itemName = document.createElement('table');  //<=== declared a variable
      itemName.textContent= groceryItems.name ;  //<=== creates a blank element


    //created the variable to represent our item price,
    //know as groceryItems, created a blank element called "textContent".
    //used the apprendChild metho to add content to our empty element.
      var itemPrice = document.createElement('table');  //<=== declared a variable
      itemPrice.textContent= groceryItems.name + ' '+ '$' + groceryItems.price;  //<=== creates a blank element //contanate the $
      receiptContainer.appendChild(itemPrice);  //<=== display on page //changed document.body to receiptContainer to contain within the div
      itemPrice.className = ('priceSpan');//<=== gave name of item a name

});



// created a variable to represent our Total
      var displayTotal = document.createElement('div');  //<=== declared a variable
      displayTotal.textContent = 'Your Grand Total is $' + sum;  //<=== creates a blank element//added sting
      displayTotal.id = ('theTotal');
      receiptContainer.appendChild(displayTotal);  //<=== display on page //changed document.body to receiptContainer to contain within the div



//console.log('Grand Total: ' + '$'+ sum.toFixed(2)); // round and adds decimal

//function addToCart(){
  //var cart = {
  //  name = itemName;
    //price = itemPrice;
  //}




// function addItem() {
//     var x = document.createElement("INPUT");
//     addItem.textContent = newItem + newPrice;
//     document.body.appendChild(x);
// }
//
// function addToCart() {
//     var x = document.getElementsByTagName("BUTTON")[0].textContent;
//     document.getElementById("demo").innerHTML = x;
// }
