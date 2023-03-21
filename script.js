
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

//shuffle(xx)에 원소 사이의 공간 12개를 랜덤 으로 선택하는 방법은? 
xx.unshift(0);
xx.push(0);

const sliced = [];
const sliceSize = 7;

for (let i = 0; i < xx.length; i += sliceSize) {
  sliced.push(xx.slice(i, i + sliceSize));
}

// 'c'를 무작위로 삽입
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


// 클릭한 상자(span)의 인덱스를 저장하는 변수
let selectedBoxIndex = -1;

// 2차원 배열 생성
const row = 7;
const col = 7;
const boxes = new Array(row).fill().map(() => new Array(col).fill());

// 상자(span) 생성하고 2차원 배열에 추가
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    const box = document.createElement("span");
    box.className = "box";
    box.dataset.row = i;
    box.dataset.col = j;
    box.addEventListener('click', function() {
      selectedBoxIndex = [i, j]; // 선택된 상자(span)의 인덱스 저장
      const value = xx[i, j]; // 해당 인덱스에 있는 값 가져오기
      console.log(value); // 해당 인덱스에 대응되는 xx의 값 출력
      box.innerHTML = value; // innerHTML 변경
});
    
    boxes[i][j] = i * col + j + 1; // 숫자 할당
    container.appendChild(box);
  }
  container.appendChild(document.createElement("br"));
}

