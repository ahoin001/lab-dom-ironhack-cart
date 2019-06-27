/*****************************
        
  Global DOM Elements 

*****************************/

// get a reference to the calculate button
let calculateButton = document.getElementById("calculate-button");

// points to list of products on page 
let products = document.getElementsByClassName("product");

/*****************************
        
  Calculate Price  

*****************************/

//create event to occur when that button is clicked
calculateButton.onclick = function () 
{

  // products will equal collection of all "product" class divs pn document
  let products = document.querySelectorAll(".product");

  // will hold sum of total from each row
  let total = 0; 

  for (let i = 0; i < products.length; i++)
  {

      // search the current product , 1st child (Price), and its inner text and save it as Number
      let price = Number(products[i].children[1].innerText);
      console.log("Price is: "+ price);

      // search the current product , 
      //2nd child ([0] is <label> QTY </label> / [1] is <input>) ,
      // the [1] (second) child within the child to get input text box value
      let quantity = Number(products[i].children[2].children[1].value);
      console.log("Quantity is: "+quantity);

      let totalPrice = parseFloat(price).toFixed(2) * parseFloat(quantity).toFixed(2);
      console.log("Total Price calculation: "+ totalPrice);

      total += totalPrice;

      // make it round to 2 decimal places
      let editedFinalPrice = totalPrice.toFixed(2);

      // have something to point to total cost column user can see
      // the value will be <span id=total>  </span>
      let totalCostShownToUser = products[i].children[3].children[0];
      console.log(totalCostShownToUser);

      // display the calculated price inside the total price column the user swees
      totalCostShownToUser.innerHTML = editedFinalPrice;

    

  }
      // point to html where we want to display the total
      document.querySelector("#final-total span").innerHTML = total;

}

var deleteButtons = document.getElementsByClassName('btn-delete');

// loop throguh delete buttons to attatch deleteItem function to them dynamically
for(var i =0; i < deleteButtons.length;i++)
{
  deleteButtons[i].onclick = deleteItem;
}

function deleteItem (e)
{
  e.currentTarget.p
}
