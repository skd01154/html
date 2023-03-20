const numArray = [];
let count = 1;

for (let i = 0; i < 7; i++) {
  const row = [];

  for (let j = 0; j < 7; j++) {
    row.push(count);
    count++;
  }

  numArray.push(row);
}

const sss = Array(1).fill('sss');
const ss = Array(2).fill('ss');
const s = Array(6).fill('s');
const a = Array(10).fill('a');
const b = Array(18).fill('b');
const c = Array(12).fill('c');

const arr = sss.concat(ss, s, a, b, c);

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
  // 배열을 직접 수정하도록 수정
  return arr;
}

shuffleArray(arr);

// 1차원 배열을 7x7 이차원 배열로 변환
const matrix = [];
for (let i = 0; i < arr.length; i += 7) {
  matrix.push(arr.slice(i, i + 7));
}

const table = document.createElement('table');

for (let i = 0; i < 7; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 7; j++) {
    const cell = document.createElement('td');
    const number = document.createTextNode(numArray[i][j]);
    const div = document.createElement('div');
    div.appendChild(number);
    div.classList.add('number-cell');
    div.dataset.row = i;
    div.dataset.col = j;
    div.addEventListener('click', replaceCell);
    div.addEventListener('mouseover', function() {
      this.innerText = '선택';
    });
    div.addEventListener('mouseout', function() {
      this.innerText = numArray[i][j];
    });
    cell.appendChild(div);
    row.appendChild(cell);
  }
  table.appendChild(row);
}

document.body.appendChild(table);



function replaceCell() {
  const row = parseInt(this.dataset.row);
  const col = parseInt(this.dataset.col);
  const value = numArray[row][col];
  const shuffledValue = matrix[row][col];

  if (value === shuffledValue) {
    return;
  }

  numArray[row][col] = shuffledValue;
  this.innerText = shuffledValue;
}