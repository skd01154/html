let numArrayCopy = [];
for (let i = 0; i < 7; i++) {
  let row = [];
  for (let j = 0; j < 7; j++) {
    row.push(i * 7 + j + 1);
  }
  numArrayCopy.push(row);
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
}

shuffleArray(arr);

function createArray(arr) {
  const result = [];
  for (let i = 0; i < 7; i++) {
    const row = arr.slice(i * 7, i * 7 + 7);
    result.push(row);
  }
  return result;
}

const numArray = createArray(arr);

const numArrayCopyContainer = document.getElementById("numArrayCopy-container");
numArrayCopyContainer.innerHTML = "";
for (let i = 0; i < numArrayCopy.length; i++) {
  for (let j = 0; j < numArrayCopy[i].length; j++) {
    const numDiv = document.createElement("div");
    numDiv.classList.add("numArrayCopy-item");
    numDiv.setAttribute("data-row", i);
    numDiv.setAttribute("data-col", j);
    numDiv.innerText = numArrayCopy[i][j];
    numArrayCopyContainer.appendChild(numDiv);
  }
}

const numDivs = document.querySelectorAll(".numArrayCopy-item");
for (let i = 0; i < numDivs.length; i++) {
  numDivs[i].addEventListener("mouseenter", function() {
    this.innerText = "선택";
  });
  numDivs[i].addEventListener("mouseleave", function() {
    this.innerText = numArrayCopy[Math.floor(i / 7)][i % 7];
  });
}

function printArray(array, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  for (let row of array) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("numArray-item");
    for (let item of row) {
      const numDiv = document.createElement("div");
      numDiv.innerText = item;
      rowDiv.appendChild(numDiv);
    }
    container.appendChild(rowDiv);
  }
}

// numArrayCopy-container의 클릭 이벤트 핸들러
function handleClick(e) {
  // 클릭한 요소가 숫자판 내부의 숫자 요소인 경우
  if (e.target.classList.contains('numArrayCopy-item')) {
    // 클릭한 요소의 인덱스를 가져옴
    const row = parseInt(e.target.getAttribute('data-row'));
    const col = parseInt(e.target.getAttribute('data-col'));
    // numArrayCopy의 해당 위치의 값을 numArray의 해당 위치로 복사
    numArray[row][col] = numArrayCopy[row][col];
    // numArray 출력
    printArray(numArray, 'numArray-container');
  }
}