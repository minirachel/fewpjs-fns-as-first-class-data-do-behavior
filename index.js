/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeSplit = time.split(':');
  const timeNum = parseInt(timeSplit);

  if (timeNum < 12){
    return `Good Morning`
  }

  else if (timeNum > 17){
    return `Good Evening`
  }

  else {
    return `Good Afternoon`
  }
}

function displayMessage(string) {
  document.getElementById("greeting").textContent = string;
}


/* Write your implementation of displayMessage() */
