// Get the counter element
const counter = document.getElementById('counter');

// Get the current count from local storage or set it to 0 if it doesn't exist
let count = parseInt(localStorage.getItem('count')) || 0;

// Increment the count and update the counter element
count++;
counter.innerText = count;

// Save the new count to local storage
localStorage.setItem('count', count);
