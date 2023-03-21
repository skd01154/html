
function onMouseOver(elem) {
  elem.innerHTML = "선택";
  elem.classList.add("selected");
}

function onMouseOut(elem) {
  elem.innerHTML = elem.dataset.value;
  elem.classList.remove("selected");
}

var container = document.getElementById("container");
var i = 1;
while (i < 50) {
  var box = document.createElement("span");
  box.className = "box";
  box.dataset.value = i;
  box.addEventListener("mouseover", function() { onMouseOver(this) });
  box.addEventListener("mouseout", function() { onMouseOut(this) });
  container.appendChild(box);
  i++;
  if (i % 7 === 0) {
    container.appendChild(document.createElement("br"));
  }
}

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

// 각 상자(span)에 클릭 이벤트 리스너 추가
const boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function() {
    selectedBoxIndex = i+1; // 선택된 상자(span)의 인덱스 저장
    const value = xx[selectedBoxIndex]; // 해당 인덱스에 있는 값 가져오기
    boxes[selectedBoxIndex].innerHTML = value; // innerHTML 변경
  });
}