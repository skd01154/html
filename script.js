const board = document.getElementById('board');
const numbers = [];

for (let i = 1; i <= 49; i++) {
  const number = document.createElement('div');
  number.classList.add('number');
  number.setAttribute('id', i);
  number.textContent = i;
  board.appendChild(number);
  numbers.push(number);
}

const sssButton = document.createElement('button');
sssButton.textContent = 'sss';
document.body.appendChild(sssButton);

let selectedNumber = null;

function handleNumberClick(event) {
  if (selectedNumber) {
    selectedNumber.classList.remove('selected');
  }
  selectedNumber = event.currentTarget;
  selectedNumber.classList.add('selected');
}

function handleSssButtonClick() {
  selectedNumber = null;
  for (let i = 0; i < numbers.length; i++) {
    const prevNumber = numbers[i - 1];
    const currentNumber = numbers[i];
    const nextNumber = numbers[i + 1];
    if (
      currentNumber.classList.contains('c') &&
      (!prevNumber || !prevNumber.classList.contains('c')) &&
      (!nextNumber || !nextNumber.classList.contains('c'))
    ) {
      currentNumber.classList.remove('c');
      const randomNumber = Math.floor(Math.random() * 6);
      switch (randomNumber) {
        case 0:
          currentNumber.classList.add('sss');
          break;
        case 1:
          currentNumber.classList.add('ss');
          break;
        case 2:
        case 3:
        case 4:
          currentNumber.classList.add('s');
          break;
        case 5:
          currentNumber.classList.add('a');
          break;
      }
    }
  }
  result.textContent = '';
}

const result = document.createElement('div');
result.setAttribute('id', 'result');
document.body.appendChild(result);

board.addEventListener('click', handleNumberClick);
sssButton.addEventListener('click', handleSssButtonClick);
