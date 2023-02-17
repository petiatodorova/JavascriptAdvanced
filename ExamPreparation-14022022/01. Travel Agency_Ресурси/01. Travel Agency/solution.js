window.addEventListener('load', solution);

function solution() {
  // 1. Вземаме елементите.
  const submitButton = document.getElementById('submitBTN');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');
  const block = document.getElementById('block');
  const preview = document.getElementById('infoPreview');

  // 2. Дефинираме си активност на бутоните
  submitButton.disabled = false;
  editButton.disabled = true;
  continueButton.disabled = true;

  // 3. Вземаме си value на input полетата
  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
  // console.log(inputValues);
  // console.log(inputValues[0].value);


  // 4. Правим си масив с всички label имена
  const labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));
  // console.log(labelValues);
  // for (const iterator of labelValues) {
  //   console.log(iterator.innerText);
  // }
  // console.log(document.getElementById('fname').value);

  // 5. Добавяме eventListener
  submitButton.addEventListener('click', (ev) => {
    // console.log(ev.target);
    const fullName = inputValues[0];
    const email = inputValues[1];
    if (fullName.value && email.value !== '') {
      // console.log('test');

      for (let i = 0; i < labelValues.length; i++) {
        // В infoPreview трябва да ги сложим като li и затова го създаваме
        const liElement = document.createElement('li');
        liElement.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`;
        preview.appendChild(liElement);
      }
      for (let i = 0; i < labelValues.length; i++) {
        const element = inputValues[i];
        element.value = '';
      }
      //submitButton e ev.target
      ev.target.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;
    }
  });

  editButton.addEventListener('click', (ev) => {
    const listItems = Array.from(preview.childNodes);
    // console.log(listItems);
    for (let i = 0; i < inputValues.length - 1; i++) {
      inputValues[i].value = listItems[i].textContent.split(': ')[1];
      listItems[i].remove();
    }
    submitButton.disabled = false;
    ev.target.disabled = true;
    continueButton.disabled = true;
  });

  continueButton.addEventListener('click', (ev) => {
    // console.log(ev.target);
    block.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    block.appendChild(h3);
  });
}
