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

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    const box = document.createElement("span");
    box.className = "box";
    box.dataset.row = i;
    box.dataset.col = j;
    box.addEventListener('click', function() {
      const value = xx[i * col + j];
      console.log(value);
      box.innerHTML = value;
      if(value=="sss"){
        console.log("축하합니다.");
      } else if (value=="ss"){
        xxx[1]--;
      } else if (value=="s"){
        xxx[2]--;
      } else if (value=="a"){
        xxx[3]--;
      } else if (value=="b"){
        xxx[4]--;
      } else if (value=="c"){
        xxx[5]--;
      }
      resultDiv.innerHTML = `sss=${xxx[0]} ss=${xxx[1]} s=${xxx[2]} a=${xxx[3]} b=${xxx[4]} c=${xxx[5]}`;
    });
    boxContainer.appendChild(box);
  }
  boxContainer.appendChild(document.createElement("br"));
}
