const boardSize = 7; // 보드의 크기
const boardContainer = document.querySelector('#board'); // 보드가 들어갈 div 요소
const board = []; // 보드 배열

const elements = ['sss', 'ss', 's', 'a', 'b', 'c']; // 보드에 들어갈 요소들

// 'c'가 연속되지 않는 배열 생성
let arr = new Array(elements.length).fill(0);
arr = arr.map((_, index) => index);
let lastIndex = -1;
while (true) {
  const shuffledArr = shuffleArray(arr);
  if (lastIndex === -1 || shuffledArr[0] !== lastIndex + 1) {
    board.push(...shuffledArr);
    lastIndex = shuffledArr[shuffledArr.length - 1];
  }
  if (board.length >= boardSize ** 2) break;
}

// 숫자판 생성
for (let i = 0; i < boardSize; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < boardSize; j++) {
    const index = i * boardSize + j;
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = board[index] + 1;
    cell.dataset.value = elements[board[index]];
    cell.addEventListener('mouseover', () => {
      cell.innerText = '선택';
    });
    cell.addEventListener('mouseout', () => {
      cell.innerText = board[index] + 1;
    });
    cell.addEventListener('click', () => {
      cell.classList.add('selected');
      cell.innerText = cell.dataset.value;
      const sssCells = document.querySelectorAll('.cell[data-value="sss"]');
      if (sssCells.length === 0) {
        setTimeout(() => {
          resetBoard();
        }, 1000);
      }
    });
    row.appendChild(cell);
  }
  boardContainer.appendChild(row);
}

// 보드 재설정
function resetBoard() {
  const selectedCells = document.querySelectorAll('.selected');
  selectedCells.forEach((cell) => {
    cell.classList.remove('selected');
    cell.innerText = board[cell.parentNode.dataset.row * boardSize + cell.dataset.col] + 1;
  });
}

// 배열 랜덤 셔플
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}