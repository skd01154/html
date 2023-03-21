
a=["sss", "ss", "s", "a", "b"]
ac=[1, 2, 6, 10, 18]

let x = 0;
let xx = [];
while(x<5){
  xx = [...xx, ...Array(ac[x]).fill(a[x])];
  x=x+1;
}

function shuffle(xx) {
  for (let index = xx.length - 1; index > 0; index--) {
    // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
    const randomPosition = Math.floor(Math.random() * (index + 1));

    // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
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

// 맨 앞, 맨 뒤의 0 제거
xx.pop();
xx.shift();


let selectedBoxIndex = -1;

const row = 7;
const col = 7;
const boxes = new Array(row).fill().map(() => new Array(col).fill());

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    const box = document.createElement("span");
    box.className = "box";
    box.dataset.row = i;
    box.dataset.col = j;
    box.addEventListener('click', function() {
      selectedBoxIndex = [i, j];
      const value = xx[i*col+j];
      console.log(value);
      box.innerHTML = value;
    });
    
    boxes[i][j] = i * col + j;
    container.appendChild(box);
  }
  container.appendChild(document.createElement("br"));
}
