// 상수 선언
const size = 7; // 숫자판 크기
const board = document.querySelector('#board'); // 숫자판 영역
const elements = ['sss', 'ss', 's', 'a', 'b', 'c']; // 원소들
const notContinuous = [1, 3, 5, 7, 9, 12, 14, 18, 22, 25, 27, 31, 33, 37, 39, 43, 45, 47]; // c 원소가 연속되지 않는 숫자판 인덱스
let selectedElements = []; // 선택된 원소들의 인덱스

// 함수 선언
function createBoard() {
  // 숫자판 생성
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    board.appendChild(row);

    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      const index = i * size + j + 1;
      if (notContinuous.includes(index)) {
        cell.classList.add('not-continuous');
      }
      const elementIndex = Math.floor(Math.random() * elements.length);
      const element = elements[elementIndex];
      cell.setAttribute('data-element', element);
      cell.setAttribute('data-index', index);
      cell.addEventListener('mouseover', handleCellMouseOver);
      cell.addEventListener('mouseout', handleCellMouseOut);
      cell.addEventListener('click', handleCellClick);
      row.appendChild(cell);
    }
  }
}

function handleCellMouseOver(event) {
  event.target.textContent = '선택';
}

function handleCellMouseOut(event) {
  event.target.textContent = '';
}

function handleCellClick(event) {
  const clickedIndex = parseInt(event.target.dataset.index);
  if (selectedElements.includes(clickedIndex)) {
    return;
  }
  selectedElements.push(clickedIndex);
  const clickedElement = event.target.dataset.element;
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    if (cell.dataset.element === clickedElement) {
      cell.classList.add('selected');
    }
  });
  event.target.style.visibility = 'hidden';
  if (clickedElement === 'sss') {
    setTimeout(() => {
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  selectedElements = [];
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.visibility = 'visible';
    cell.classList.remove('selected');
  });
}

// 실행
createBoard();