/*****************************
        
  Global DOM Elements 

*****************************/

// get a reference to the calculate button
let button = document.getElementById("calculate-button");


/*****************************
        
  Calculate Price  

*****************************/

//create event to occur when that button is clicked
button.onclick = function () {

  console.log("button clicked")

  // points to the element containing price in DOM
  let price = document.getElementById("price");

  // points to the input to get the amount the user typed in later on
  let quantity = document.querySelector("input");

  // show myself the value inside both the above elements to make sure its what i expect
  console.log(quantity.value);
  console.log(Number(price.innerText));

  //calculate total price and hold it in variable
  let totalPrice = parseFloat(price.innerText).toFixed(2) * parseFloat(quantity.value).toFixed(2);
  console.log(totalPrice);

  // points to the element that shows the total shown to user 
  let totalCostShownToUser = document.querySelector("#total");

  console.log(totalCostShownToUser);

  // display total cost to the user
  totalCostShownToUser.innerHTML = String(totalPrice);

}


function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   // // calculatePriceButton.onclick = getTotalPrice;
//   // createItemButton.onclick = createNewItem;

//   // for(var i = 0; i<deleteButtons.length ; i++){
//   //   deleteButtons[i].onclick = deleteItem;
//   // }
// };
