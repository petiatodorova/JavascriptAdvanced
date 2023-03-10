/* Event Listeners */

//Syntax: element.addEventListener(event, function, useCapture);

let myP = document.getElementById("myP");
let myDiv = document.getElementById("myDiv");
let myP2 = document.getElementById("myP2");
let myDiv2 = document.getElementById("myDiv2");

myP.addEventListener("click", function(){ myDiv.style.background = "yellow" });

// myP.onclick = function(){ myDiv.style.background = "lightblue" };

myP.addEventListener("click", changeText, false);

myDiv.addEventListener("click", changeText2, false);

myDiv.addEventListener("mouseover", function(){ myDiv2.style.background = "darkkhaki" });

function changeText() {
    myP2.textContent = myP2.textContent += "According to a Cornell publication, the answer is ~700 pounds."
};

function changeText2() {
    myP2.textContent = myP2.textContent += "THE REAL ANSWER."
};

myP.removeEventListener("click", changeText, false);