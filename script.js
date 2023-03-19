let numArray = [];
let num = 1;
for (let i = 0; i < 7; i++) {
  let row = [];
  for (let j = 0; j < 7; j++) {
    row.push(num);
    num++;
  }
  numArray.push(row);
}

const arr = Array(1).fill('sss')
  .concat(Array(2).fill('ss'))
  .concat(Array(6).fill('s'))
  .concat(Array(10).fill('a'))
  .concat(Array(18).fill('b'))
  .concat(Array(12).fill('c'));

function shuffleArray(arr) {
  let prev = '';
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === 'c' && prev === 'c') {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    } else {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
      prev = arr[i];
    }
  }
}
shuffleArray(arr);

const obj = {
  'sss': [],
  'ss': [],
  's': [],
  'a': [],
  'b': [],
  'c': []
};
let index = 0;
for (const prop in obj) {
  const len = arr.filter(elem => elem === prop).length;
  obj[prop] = numArray.slice(index, index + len).flat();
  index += len;
}

const boardDiv = document.getElementById('board');
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');
    const numSpan = document.createElement('span');
    numSpan.innerText = numArray[i][j];
    cellDiv.appendChild(numSpan);
    const hiddenSpan = document.createElement('span');
    hiddenSpan.innerText = obj[arr[numArray[i][j] - 1]];
    hiddenSpan.classList.add('hidden');
    cellDiv.appendChild(hiddenSpan);
    cellDiv.addEventListener('mouseover', function() {
      hiddenSpan.innerText = '선택';
    });
    cellDiv.addEventListener('mouseout', function() {
      hiddenSpan.innerText = '';
    });
    cellDiv.addEventListener('click', function() {
      numSpan.classList.add('hidden');
      hiddenSpan.classList.remove('hidden');
    });
    boardDiv.appendChild(cellDiv);
  }
}