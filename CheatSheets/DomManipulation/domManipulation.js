// DOM Manipulation: Selecting & changing website elements

let div1 = document.getElementById('div1');

let uniycle = document.getElementsByClassName('unicycle');

let paragraphs = document.getElementsByTagName('p');

let queryUnicycle = document.querySelector('.unicycle');

let queryAll = document.querySelectorAll('.unicycle, #div2');

let text = "<h1>Hello World</h1>";

queryUnicycle.textContent = text;

for (i = 0; i < queryAll.length; ++i) {
  queryAll[i].innerHTML = text;
}