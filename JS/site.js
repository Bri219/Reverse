
// Get the String from the page
// Controller Function
function getValue(){
  
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;
  let revString = reverseString(userString);
  displayString(revString);
}


// Reverse the String
// Login Function
function reverseString(userString){

  let revString = [];
  // Reverse a string using a for loop
  for (let index = userString.length - 1; index >= 0; index--) {
       revString += userString[index];
  }
  return revString;
}


// Display the reversed String to the user
// View Function
function displayString(revstring){

  //write to page
  document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;
  //show the alert box
  document.getElementById("alert").classList.remove("invisible");
}