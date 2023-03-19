//const API_URL = 'https://rd0y8fbsyd.execute-api.us-east-1.amazonaws.com/dev ';
const API_URL = 'https://rd0y8fbsyd.execute-api.us-east-1.amazonaws.com/dev/{proxy+} ';

// Get the current visitor count from the backend API
fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    console.log(data); // Debugging line
    // Update the DOM to display the current visitor count
    const counter = document.getElementById('counter');
    counter2.textContent = data.count;
})
  .catch(error => {
    console.error(error);
  });
