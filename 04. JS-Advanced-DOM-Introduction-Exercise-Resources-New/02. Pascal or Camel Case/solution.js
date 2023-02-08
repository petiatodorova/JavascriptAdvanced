function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let result = '';
  // "this is an example" --> text, "Camel Case"
  // "secOND eXamPLE", "Pascal Case"
  // "Invalid Input", "Another Case"

  // let words = text.split(/\w+/gm);
  let words = text.match(/\w+/gm);

  console.log(words);

  if (namingConvention == "Camel Case") {
    words[0] = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].toLowerCase();
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
  } else if (namingConvention == "Pascal Case") {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase();
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
  } else {
    return document.getElementById('result').textContent = 'Error!';
  }
  
  result = words.join('');
  document.getElementById('result').textContent = result;
}