a = ["sss", "ss", "s", "a", "b"]
ac = [1, 2, 6, 10, 18]

let x = 0;
let xx = [];
while (x < 5) {
  xx = [...xx, ...Array(ac[x]).fill(a[x])];
  x = x + 1;
}

function shuffle(xx) {
  for (let index = xx.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1));
    const temporary = xx[index];
    xx[index] = xx[randomPosition];
    xx[randomPosition] = temporary;
  }
}

shuffle(xx);

xx.unshift(0);
xx.push(0);

let i = 0;
while (i < 12) {
  const randomIndex = Math.floor(Math.random() * (xx.length - 2)) + 1;
  if (xx[randomIndex] !== "c" && xx[randomIndex - 1] !== "c" && xx[randomIndex + 1] !== "c") {
    xx.splice(randomIndex, 0, "c");
    i++;
  }
}

xx.pop();
xx.shift();

const resultContainer = document.getElementById("result-container");
const boxContainer = document.getElementById("box-container");

const row = 7;
const col = 7;

let xxx=[1,2,6,10,18,12];
const resultDiv = document.createElement("div");
resultDiv.innerHTML = `sss=${xxx[0]} ss=${xxx[1]} s=${xxx[2]} a=${xxx[3]} b=${xxx[4]} c=${xxx[5]}`;
resultContainer.appendChild(resultDiv);

const numbers = [];
let count = 1;

for (let i = 0; i < 7; i++) {
  const row = [];
  for (let j = 0; j < 7; j++) {
    row.push(count++);
  }
  numbers.push(row);
}

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    const box = document.createElement("span");
    box.className = "box";
    box.dataset.row = i;
    box.dataset.col = j;
    box.innerHTML = numbers[i][j];
    box.addEventListener('click', function() {
      const value = xx[i * col + j];
      console.log(value);
      box.innerHTML = value;
      if(value=="sss"){
        if(xxx[1] > 0) xxx[1]--;
      } else if (value=="ss"){
        if(xxx[1] > 0) xxx[1]--;
      } else if (value=="s"){
        if(xxx[2] > 0) xxx[2]--;
      } else if (value=="a"){
        if(xxx[3] > 0) xxx[3]--;
      } else if (value=="b"){
        if(xxx[4] > 0) xxx[4]--;
      } else if (value=="c"){
        if(xxx[5] > 0) xxx[5]--;
      }
      resultDiv.innerHTML = `sss: ${xxx[0]}    ss: ${xxx[1]}    s: ${xxx[2]}    a: ${xxx[3]}    b: ${xxx[4]}    c: ${xxx[5]}`;
    });
    boxContainer.appendChild(box);
  }
  boxContainer.appendChild(document.createElement("br"));
}

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function() {
  // xxx[0]이 0일 때 또는 다시하기 버튼을 눌렀을 때 초기화
  if (xxx[0] === 0 || this.id === "reset-button") {
    xx = [];
    let x = 0;
    while (x < 5) {
      xx = [...xx, ...Array(ac[x]).fill(a[x])];
      x = x + 1;
    }
    shuffle(xx);
    xx.unshift(0);
    xx.push(0);
    let i = 0;
    while (i < 12) {
      const randomIndex = Math.floor(Math.random() * (xx.length - 2)) + 1;
      if (xx[randomIndex] !== "c" && xx[randomIndex - 1] !== "c" && xx[randomIndex + 1] !== "c") {
        xx.splice(randomIndex, 0, "c");
        i++;
      }
    }
    xx.pop();
    xx.shift();
  }
  // 게임 보드 초기화
  const boxes = document.querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = numbers[Math.floor(i / col)][i % col];
  }
  // 결과창 초기화
  xxx=[1,2,6,10,18,12];
  resultDiv.innerHTML = `sss=${xxx[0]} ss=${xxx[1]} s=${xxx[2]} a=${xxx[3]} b=${xxx[4]} c=${xxx[5]}`;
});
