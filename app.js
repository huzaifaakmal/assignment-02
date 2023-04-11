/*1. Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it.*/


function print(num1) {
    return function(num2) {
      let result = num2+ num1;
      console.log(`The result is: ${result}`);
    }
  }
  let  num2 = print(10);
num2(25); // Output: "The result is: 15"

/*2. Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.*/

function searchesArr(arr, val) {
    
    if (arr.length === 0) {
      return false;
    }
    if (arr[0] === val) {
      return true;
    }
    return searchesArr(arr.slice(1), val);
  }
  let arr = [0,1, 2, 3, 4, 5];
  let  val = 3;
  
let ans = searchesArr(arr, val);
console.log(ans); 

/*3. Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.*/

function addParagraph(text) {
    // Create a new paragraph element
    var newParagraph = document.createElement("p");
  
    // Set the text content of the new paragraph element to the input string
    newParagraph.textContent = text;
  
    // Get the last element in the body of the HTML document
    var lastElement = document.body.lastElementChild;
  
    // Add the new paragraph element after the last element
    document.body.insertBefore(newParagraph, lastElement.nextSibling);
  }
  addParagraph("Hello, world!");
  
/*4. Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item.*/

function addListItem(text) {
    // Create a new list item
    var li = document.createElement("li");

    // Set the text content of the list item
    var itemText = document.createTextNode(text);
    li.appendChild(itemText);

    // Add the new list item to an existing list with the id "myList"
    var ul = document.getElementById("myList");
    ul.appendChild(li);
}
addListItem("Item 3");

//write this in html file

<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

/*
5. Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color.
*/
function backColor(target, color) {

    target.style.backgroundColor = color;
}
let backGround = document.querySelector("#para");
backColor(backGround, "red");


/*
6. Write a function that saves an object to localStorage. The function should
take two arguments: the first argument is a string representing the key to
use for storing the object, and the second argument is the object to store.
*/
function saveObjectToLocalStorage(key, obj) {

    if (typeof (Storage) !== "undefined") {

        localStorage.setItem(key, JSON.stringify(obj));
    } else {
        console.log("Local storage is not supported by this browser.");
    }
}
let myObj = {
    name: "Huzaifa Akmal",
    age: 19,
};
saveObjectToLocalStorage("myKey", myObj);

let retrievedObj = JSON.parse(localStorage.getItem("myKey"));
console.log(retrievedObj); // { name: "Huzaifa", age: 19 }


/*
7. Write a function that retrieves an object from localStorage. The function
should take one argument, which is a string representing the key used to
store the object. The function should return the object.
*/
function getObjectFromLocalStorage(key) {
    let storedObject = localStorage.getItem(key);
    if (storedObject) {
        return JSON.parse(storedObject);
    }
    return null;
}
const myObject = getObjectFromLocalStorage("myKey");
console.log(myObject);



/*
8. Write a function that takes an object and saves each property to
localStorage using the property name as the key and the property value as
the value. The function should also retrieve the object from localStorage
and return it as a new object.
*/
function saveAndRetrieveFromLocalStorage(obj) {

    for (const property in obj) {
        localStorage.setItem(property, obj[property]);
    }

    let newObj = {};
    for (const property in obj) {
        newObj[property] = localStorage.getItem(property);
    }
    return newObj;
}
myObj = {
    name: "Huzaifa",
    age: 19,
    city: "Karachi"
};
let newObj = saveAndRetrieveFromLocalStorage(myObj);
console.log(newObj);