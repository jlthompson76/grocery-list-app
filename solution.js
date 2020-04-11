////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */

document.querySelector("link").href = "./styles.css";

/* 1.2) Set the class of the image to "list-img" */

document.querySelector(".header img").className = "list-img";

/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */

let buttons = document.querySelectorAll(".btn-controls input");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = "btn";
}

////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */

let list = document.querySelector("#grocery-list");
console.log(list);

/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */

function addItem() {
        console.log(`addItem function`);
        let itemToAdd = prompt(`Please enter the item that you'd like to add to the list:`);
        console.log(itemToAdd);
        let element = document.createElement("li");
        console.log(element);
        // element.innerText = itemToAdd;
        // line above is Ahmad's code from class demo
        let textNode = document.createTextNode(itemToAdd);
        console.log(textNode);
        element.appendChild(textNode);
        list.appendChild(element);
        console.log(list);
}

/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by setting the total-area class to just "total-area"
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */

function getTotal() {
        console.log(`getTotal function`);
        // document.querySelector(".total-area").getElementsByClassName.display = "block";
        // line above is Ahmad's code from class demo
        let totalArea = document.querySelector("div .total-area");
        console.log(totalArea);
        totalArea.className = "total-area";
        let groceries = document.querySelectorAll("#grocery-list li");
        console.log(groceries);
        let numberGroceries = groceries.length;
        document.getElementById("item-count").textContent = numberGroceries;
}

////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */

function removeItem() {
        console.log(`removeItem function`);
        let itemToRemove = prompt(`Please enter the item that you'd like to remove from the list:`);
        console.log(itemToRemove);
        let list = document.querySelector("#grocery-list");
        console.log(list);
        let groceries = document.querySelectorAll("#grocery-list li");
        console.log(groceries);
        for (let i = 0; i < groceries.length; i++) {
             if (groceries[i].textContent === itemToRemove) {
                // groceries[i].remove();
                // line above is Ahmad's code from class demo
                list.removeChild(groceries[i]);
             }
        }
}
