function all(){
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
resultDiv.innerHTML = `sss: ${xxx[0]}`+`     `+`ss: ${xxx[1]}`+`     `+`s: ${xxx[2]}`+`     `+`a: ${xxx[3]}`+`     `+`b: ${xxx[4]}`+`     `+`c: ${xxx[5]}`;
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
      if (box.innerHTML !== value) {
        box.innerHTML = value;
        switch(value) {
          case 'sss':
            xxx[0]--;
            console.log(xxx[0]);
            break;
          case 'ss':
            xxx[1]--;
            console.log(xxx[1]);
            break;
          case 's':
            xxx[2]--;
            console.log(xxx[2]);
            break;
          case 'a':
            xxx[3]--;
            console.log(xxx[3]);
            break;
          case 'b':
            xxx[4]--;
            console.log(xxx[4]);
            break;
          case 'c':
            xxx[5]--;
            console.log(xxx[5]);
            break;
        }
      }
    });
    boxContainer.appendChild(box);
  }
  boxContainer.appendChild(document.createElement("br"));
}
}

const resetButton = document.getElementById("reset-button");