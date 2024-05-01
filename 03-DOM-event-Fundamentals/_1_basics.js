'use strict'; // strict mode

/*

DOM ( Document Object Model )
- Structured representation of HTML documnets.
- Allows JS to access HTML elements and styles to manipulate them.
-DOM is automatically created by the browser as soon as the HTML page loads and it's stored in a tree structure.
-In this tree, each HTML element is one object 

*/

//Method that avaliable on Document object

console.log(document.querySelector('.message').textContent);

console.log(
  (document.querySelector('.message').textContent = 'Correct number')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
