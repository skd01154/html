let numArrayCopy = [];
for (let i = 0; i < 7; i++) {
  let row = [];
  for (let j = 0; j < 7; j++) {
    row.push((6 - j) * 7 + i + 1);
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
    const row = arr.slice(i * 7, i * 7 + 7).reverse();
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


function printArray(array, containerId) {
  const container = document.getElementById(containerId);
  for (let row of array) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("numArray-row");
    for (let item of row) {
      const numDiv = document.createElement("div");
      numDiv.classList.add("numArray-item");
      numDiv.innerText = item;
      rowDiv.appendChild(numDiv);
      container.appendChild(rowDiv);
    }
  }
}

let selectedNum = null;

function selectNum(numDiv) {
  const row = numDiv.getAttribute("data-row");
  const col = numDiv.getAttribute("data-col");
  selectedNum = numArray[row][col];
  printArray([[selectedNum]], "selectedNum-container");
}

const numDivs = document.querySelectorAll(".numArrayCopy-item");
for (let i = 0; i < numDivs.length; i++) {
  numDivs[i].addEventListener("mouseenter", function() {
    this.innerText = "선택";
  });
  numDivs[i].addEventListener("mouseleave", function() {
    this.innerText = numArrayCopy[Math.floor(i / 7)][i % 7];
  });
  numDivs[i].addEventListener("click", function() {
    selectNum(this);
  });
}
