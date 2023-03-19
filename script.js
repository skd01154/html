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

// Shuffle the array
shuffleArray(arr);

const container = document.querySelector('.container');

// Fill the cells with the corresponding element in the array
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.value = arr[i * 7 + j];
    cell.textContent = i * 7 + j + 1;
    container.appendChild(cell);
  }
}

// Add event listener to the cells
const cells = document.querySelectorAll('.cell');
let selected = null;
cells.forEach(cell => {
  cell.addEventListener('mouseenter', () => {
    if (!cell.classList.contains('selected')) {
      cell.style.backgroundColor = 'gray';
    }
  });
  cell.addEventListener('mouseleave', () => {
    if (!cell.classList.contains('selected')) {
      cell.style.backgroundColor = '';
    }
  });
  cell.addEventListener('click', () => {
    if (cell.dataset.value === 'sss') {
      shuffleArray(arr);
      cells.forEach(cell => {
        cell.dataset.value = arr[parseInt(cell.textContent) - 1];
        cell.classList.remove('selected');
        cell.style.backgroundColor = '';
      });
    } else {
      cell.classList.toggle('selected');
      if (cell.classList.contains('selected')) {
        cell.style.backgroundColor = 'yellow';
        selected = cell;
      } else {
        cell.style.backgroundColor = '';
        selected = null;
      }
    }
  });
});