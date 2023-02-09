function search() {
   let listElements = document.querySelectorAll('ul#towns li');
   let resultElement = document.getElementById('result');
   let searchText = document.getElementById('searchText').value;
   let matches = 0;
   for (let cleanElement of listElements) {
      cleanElement.style.fontWeight = 'normal';
      cleanElement.style.textDecoration = '';
   }
   for (let element of listElements) {
      let text = element.textContent;
      if (text.match(searchText)) {
         matches++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
   }
   resultElement.textContent = `${matches} matches found`;
}
