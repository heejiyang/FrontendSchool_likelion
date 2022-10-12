// 메모리를 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행 함수로 관리한다.
// 익명 즉시 실행 함수
(function (){
  let a = 1;
  let b = 2;
  return a + b;
}());

// 기명 즉시 실행 함수
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리
(function foo(){
  let a = 3;
  let b = 5;
  return a * b;
}());
foo(); // ReferenceError: foo is not defined. 어차피 실행하지 못해서 의미가 없음.

// 모든 요소들이 로드된 이후에 실행, 함수는 1개만 실행 가능
// window.onload = function(){}
// $(document).ready() 위와 같은 기능을 하는 jquery 문법
function 함수(){
  let x1 = 100;
  let x2 = 100;
  let x3 = 100;
  let x4 = 100;
  let x5 = 100;
  let x6 = 100;
  let x7 = 100;
  // ...
}

함수()

// 연습문제
let data = [{
  반 : 1,
  번 : 1,
  이름 : "호준",
  중간고사점수 : 55
}, {
  반 : 1,
  번 : 2,
  이름 : "길동",
  중간고사점수 : 60
}, {
  반 : 1,
  번 : 3,
  이름 : "영희",
  중간고사점수 : 30
}, {
  반 : 1,
  번 : 4,
  이름 : "철수",
  중간고사점수 : 20
}, {
  반 : 1,
  번 : 5,
  이름 : "규리",
  중간고사점수 : 100
}]

// 중간고사 점수의 평균을 구하는 코드를 함수로 작성해주세요.
function 평균값구하기(data){
  let sum = 0;
  for(student of data){
      sum += student["중간고사점수"]
  }
  return sum / data.length;
}

function 평균값구하기(data) {
  let 중간고사점수 = data.map((x) => x.중간고사점수);
  let 중간고사점수합 = 중간고사점수.reduce((a, b) => a + b);
  return 중간고사점수합 / data.length;
}

function 평균값구하기(data) {
  return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
}

console.log(function () {
  return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
}());

let a = (data) => data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
console.log(a(data));

let b = (data) => { return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length};
console.log(b(data));

// call by value, reference, sharing
/*
array와 같은 convension 자료형을 넘길때는 함수 안에서 값의 수정이 됩니다.
call by value(값의 전달)
call by reference(참조-주소값의 전달)
면접질문 : js의 call by value, call by reference에 대해 설명하세요.
답변 : js에서는 call by value만 존재한다.
참조타입을 넘기면 주소가 넘어가는 것이 아니라 주소값을 복사한 복사본이 넘어간다.
call by value
아규먼트에 값이 넘어올 때 복사한 값이 넘어온다!
call by reference
아규먼트에 값이 넘어올 때 주소값이 넘어온다! (주소값이 넘어왔으니 접근을 하면 원본이다!)
- javascript는 참조값을 넘길 때 참조한 주소값을 '복사'하여 넘깁니다. 그래서 call by reference가 아니라 call by value입니다. '복사한 값'인거죠. 주소값도 값이니까요.
*/
let test = [10, 20, 30];

function 함수(a){
  a[0] = 1000;
}
함수(test);

//

let test = 100
function 함수(a){
  a = 1000;
}
함수(test);

// 반례 - 변경 수정가능하지만 아예 다른 자료형으로 바꿀 수 없다.
var a1 = {};
function test(b1){
  b1 = 1000;
}
test(a1);
a1;