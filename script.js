// Create an array of characters
const arr = Array(1).fill('sss')
            .concat(Array(2).fill('ss'))
            .concat(Array(6).fill('s'))
            .concat(Array(10).fill('a'))
            .concat(Array(18).fill('b'))
            .concat(Array(12).fill('c'));

// Randomly shuffle the array without two consecutive 'c'
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

// Create the number board
const board = document.getElementById('board');
for (let i = 0; i < 7; i++) {
  let row = board.insertRow(i);
  for (let j = 0; j < 7; j++) {
    let cell = row.insertCell(j);
    cell.innerHTML = arr[i * 7 + j];
    cell.addEventListener('mouseover', function() {
      cell.classList.add('hover');
      cell.innerHTML = '선택';
    });
    cell.addEventListener('mouseout', function() {
      cell.classList.remove('hover');
      cell.innerHTML = arr[i * 7 + j];
    });
    cell.addEventListener('click', function() {
      cell.classList.toggle('selected');
      if (cell.classList.contains('selected')) {
        cell.innerHTML = arr[i * 7 + j];
      } else {
        cell.innerHTML = '';
      }
    });
  }
}