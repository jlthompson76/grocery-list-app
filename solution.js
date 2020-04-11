////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */

document.querySelector("link").href = "./styles.css";

/* 1.2) Set the class of the image to "list-img" */

document.querySelector(".header img").className = "list-img";

/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */

let buttons = document.querySelectorAll("input");
console.log(buttons);
for (i = 0; i < buttons.length; i++) {
        buttons[i].className = "btn";
}

////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */

let list = document.querySelectorAll("#grocery-list ul");
console.log(list);

/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */

function addItem() {
        let item = prompt(`Please enter the item that you'd like to add to the list:`);
        console.log(item);
        let element = document.createElement("li");
        console.log(element);
        let textNode = document.createTextNode(item);
        console.log(textNode);
        element.appendChild(textNode);
        list.appendChild(element);
// Console error message for line 39:
// Uncaught TypeError: list.appendChild is not a function at addItem
        console.log(list);
}

/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by setting the total-area class to just "total-area"
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */

function getTotal() {
        let totalArea = document.querySelector("div .total-area");
        console.log(totalArea);
        totalArea.className = "total-area";
        let groceries = document.querySelectorAll("#grocery-list li");
        let numberGroceries = groceries.length;
        document.getElementById("item-count").textContent = numberGroceries;
}

////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */

function removeItem() {
        let itemToBeRemoved = prompt(`Please enter the item that you'd like to remove from thte list:`);
        let list = document.querySelectorAll("#grocery-list ul");
        let groceries = document.querySelectorAll("#grocery-list li");
        for (i = 0; i < groceries.length; i++) {
             if (groceries[i].textContent === itemToBeRemoved) {
                list.removeChild(groceries[i]);
// Console error message for line 67:
// Uncaught TypeError: list.removeChild is not a function at removeItem
             } else {
                break;
             }
        }
}
