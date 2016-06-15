// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  changeDivColor('one', 'blue');
  changeDivColor('two', 'green');
  changeDivColor('three', 'orange')
    
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE

// CREATE FUNCTION three HERE

// CREATE FUNCTION makeVisible HERE


// Function changing the color of a div, taking the div id and color in parameter

function changeDivColor (id, color) {
  var elem = document.getElementById(id);
  elem.classList.add(color);
}