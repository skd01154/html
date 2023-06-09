
a = ["SSS", "SS", "S", "A", "B"]
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
  if (xx[randomIndex] !== "C" && xx[randomIndex - 1] !== "C" && xx[randomIndex + 1] !== "C") {
    xx.splice(randomIndex, 0, "C");
    i++;
  }
}

xx.pop();
xx.shift();

const resultContainer = document.getElementById("result-container");
const boxContainer = document.getElementById("box-container");


var xxx=[1,2,6,10,18,12];
const resultDiv = document.createElement("div");
          resultDiv.className = "resultDiv";
          resultDiv.innerHTML = `SSS: ${xxx[0]}${" ".repeat(6)}SS: ${xxx[1]}${" ".repeat(6)}S: ${xxx[2]}${" ".repeat(6)}A: ${xxx[3]}${" ".repeat(6)}B: ${xxx[4]}${" ".repeat(6)}C: ${xxx[5]}`;
          resultContainer.innerHTML = "";
          resultContainer.appendChild(resultDiv);

const numbers = [];
let count = 1;
const row = 7;
const col = 7;


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
      if (box.dataset.row == i && box.dataset.col == j && box.innerHTML == numbers[i][j]) {
        const value = xx[i * col + j];
        box.innerHTML = value;
        switch(value) {
          case "SSS":
            box.style.backgroundColor = "red";
            xxx[0]--;
            break;
          case "SS":
            box.style.backgroundColor = "pink";
            xxx[1]--;
            break;
          case "S":
            box.style.backgroundColor = "yellow";
            xxx[2]--;
            break;
          case "A":
            box.style.backgroundColor = "skyblue";
            xxx[3]--;
            break;
          case "B":
            box.style.backgroundColor = "orange";
            xxx[4]--;
            break;
          case "C":
            box.style.backgroundColor = "gray";
            xxx[5]--;
            break;
          }
          const resultDiv = document.createElement("div");
          resultDiv.className = "resultDiv";
          resultDiv.innerHTML = `SSS: ${xxx[0]}${" ".repeat(6)}SS: ${xxx[1]}${" ".repeat(6)}S: ${xxx[2]}${" ".repeat(6)}A: ${xxx[3]}${" ".repeat(6)}B: ${xxx[4]}${" ".repeat(6)}C: ${xxx[5]}`;
          resultContainer.innerHTML = "";
          resultContainer.appendChild(resultDiv);
          
      }
    });
    boxContainer.appendChild(box);
  }
  boxContainer.appendChild(document.createElement("br"));

}

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", function() {
  // 현재 게임 보드 삭제
  boxContainer.innerHTML = "";

  // 새 게임 보드 생성
  const numbers = [];
  let count = 1;
  const row = 7;
  const col = 7;

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
        if (box.dataset.row == i && box.dataset.col == j && box.innerHTML == numbers[i][j]) {
          const value = xx[i * col + j];
          box.innerHTML = value;
          switch(value) {
            case "SSS":
              box.style.backgroundColor = "red";
              xxx[0]--;
              break;
            case "SS":
              box.style.backgroundColor = "pink";
              xxx[1]--;
              break;
            case "S":
              box.style.backgroundColor = "yellow";
              xxx[2]--;
              break;
            case "A":
              box.style.backgroundColor = "skyblue";
              xxx[3]--;
              break;
            case "B":
              box.style.backgroundColor = "orange";
              xxx[4]--;
              break;
            case "C":
              box.style.backgroundColor = "gray";
              xxx[5]--;
              break;
            }
            const resultDiv = document.createElement("div");
            resultDiv.className = "resultDiv";
            resultDiv.innerHTML = `SSS: ${xxx[0]}${" ".repeat(6)}SS: ${xxx[1]}${" ".repeat(6)}S: ${xxx[2]}${" ".repeat(6)}A: ${xxx[3]}${" ".repeat(6)}B: ${xxx[4]}${" ".repeat(6)}C: ${xxx[5]}`;
            resultContainer.innerHTML = "";
            resultContainer.appendChild(resultDiv);
            
        }
        // 클릭 이벤트 코드
        
      });
      boxContainer.appendChild(box);
    }
    boxContainer.appendChild(document.createElement("br"));
  }

  // 결과 업데이트
  xxx=[1,2,6,10,18,12];
  const resultDiv = document.createElement("div");
  resultDiv.className = "resultDiv";
  resultDiv.innerHTML = `SSS: ${xxx[0]}${" ".repeat(6)}SS: ${xxx[1]}${" ".repeat(6)}S: ${xxx[2]}${" ".repeat(6)}A: ${xxx[3]}${" ".repeat(6)}B: ${xxx[4]}${" ".repeat(6)}C: ${xxx[5]}`;
  resultContainer.innerHTML = "";
  resultContainer.appendChild(resultDiv);
});