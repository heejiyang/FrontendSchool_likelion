////////////////////////////////////// 함수의 구조
//파선아실 (파라미터 - 선언, 아규먼트 - 실행)
function 안녕(파라미터){
  console.log(파라미터);
  console.log('hello world');
  return 100;
}

let 아규먼트 = 1000;
안녕(아규먼트);
console.log(안녕(아규먼트) + 안녕(아규먼트)); //200

/*
console.log('hello world')
hello world
undefined

console.log(console.log('hello world'))
hello world
undefined
undefined
*/

// 파선아실
function 안녕(){
  console.log('hello');
}

안녕();
console.log(String(안녕()) + String(안녕())); //undefinedundefined

// 파선아실 - return은 반환
function 안녕(){
  console.log('hello');
  return 10;
}

안녕();
console.log(String(안녕()) + String(안녕())); //1010

// 파선아실
function 안녕(){
  console.log('hello');
  // return undefined
  return;
}

안녕();
console.log(String(안녕()) + String(안녕())); //undefinedundefined

function 안녕(){
  console.log('hello');
  return;
  console.log('hello');
  console.log('hello');
  console.log('hello');
  console.log('hello');
}

안녕(); //hello

// 질의응답
function 안녕(){
  console.log('hello');
  console.log('hello');
  console.log('hello');
  if (특정조건){
      return 100;
  }
  else {
      console.log('hello');
      console.log('hello');
      console.log('hello');
      return 1000;
  }
  // 아래 코드는 실행하지 않습니다.
  .
  .
  .
  .
  .
}

console.log(안녕());

console.log(String(console.log('hello')) + String(console.log('hello'))); //undefinedundefined

// 이렇게 작성하시면 안됩니다.
function sum(a, b){
  return a * b;
}
console.log(sum(10, 20)); //200

/*-------------------- 함수를 사용하는 이유 --------------------
1. 재사용성 -> 재사용하지 않는 코드는 함수로 정의하는가? -> 가능하면 함수로 만드는 것을 권한다.
2. 유지보수 -> 3번 + 변수의 스코프 제한
3. 구조파악이 용이하다
4. (참고)추상화로 개발하는 것이 객체지향 프로그래밍(OOP, Object Oriented Programming)언어의 언어 철학에 맞다.

땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄
*/

/*-------------------- 함수의 기본값 설정 -------------------- */
// 1. 함수의 아규먼트에 따른 반환값
function 함수1 (a, b, c){
  return a + b + c;
}
//콘솔창의 기능. 마지막 라인에 한해 console.log() 찍지 않아도 return값을 console창에 출력해준다.
함수1(10, 20, 30);
함수1(10, 20, 50);

console.log(함수1(10, 20, 30)); //60
console.log(함수1(10, 20, 50)); //80

// 1-1. 필요 이상의 아규먼트 넣었을 때
함수1(10, 20, 30, 40); //60. error를 뿜지 않습니다.

// 1-2. 필요 이하의 아규먼트를 넣었을 때
함수1(10, 20) //NaN

/*
function 함수1(a, b, c){
  return a + b + String(c)
}
함수1(10. 20) // '30 undefined'
*/

// 2. 구조분해할당을 이용한 아규먼트 처리
function 함수2(a, b, ...c){
  console.log(c);
  return Math.max(...c);
}
함수2('hello', 'world', 10, 20, 30, 40);
// 40 // (4) [10, 20, 30, 40]

function 함수2([a, b], ...c){
  console.log(a);
  console.log(b);
  console.log(c);
}
함수2([1,2], 10, 20, 30, 40);
// 1
// 2
// (4) [10, 20, 30, 40]

// 3. 기본값 할당
function 함수3(a=10, b=20, c=30){
  return a + b + c;
}
console.log(함수3()); //60
console.log(함수3(100)); //150
console.log(함수3(100, 200)); //330
console.log(함수3(100, 200, 300)); //600

// 순서대로 값이 들어갔다.
console.log(함수3(c=1000)); //1050
console.log(함수3(c=1000, a=2000)); //3030

// 4. 함수에서 객체를 아규먼트로 전달받는 방법
//https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/
// 개선할 여지가 있는 예제
function 함수4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부){ // 회원 등급 권한
  console.log('함수기능');
  return;
}
함수4('Gold', true, true, true, '대화방 전체 백업 가능', true); // 가독성이 떨어진다.

function 함수4({
          회원등급,
          글쓰기,
          글읽기,
          채널관리,
          백업,
          소셜로그인여부
        }){
  console.log('함수기능');
  // 함수기능
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
  // Gold true true false 부분 가능 true
  return;
}

함수4({
      회원등급 : 'Gold',
      글쓰기 : true,
      글읽기 : true,
      채널관리 : false,
      백업 : '부분 가능',
      소셜로그인여부 : true
    })

///////입력되지 않은 값은 undefined///////
function 함수4({
          회원등급,
          글쓰기,
          글읽기,
          채널관리,
          백업,
          소셜로그인여부
        }){
  console.log('함수기능');
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
  return;
}

함수4({
  회원등급: "Gold",
  채널관리: false,
  백업: "부분가능",
  소셜로그인여부: true
})

///////초깃값 설정1///////
function 함수4({
          회원등급 = 'Gold',
          글쓰기 = true,
          글읽기 = true,
          채널관리 = true,
          백업 = '부분가능',
          소셜로그인여부 = true
        }){
  console.log('함수기능');
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
  return;
}

함수4({
  회원등급 : 'Silver',
  소셜로그인여부: true
})

///////초깃값 설정2///////
// 참고삼아서만 보세요.
let one1;
let two1;
let three1;
{one1, two1, three1}

let {one, two, three} = {one: 10, two: 100, three: 200};// 작동
let {one:30, two, three} = {one: 10, two: 100, three: 200};// Error
let {one = 30, two, three} = {one: 10, two: 100, three: 200};// 등호가 된다는 원리가 이 이유입니다.

function 함수4({
          회원등급: 'Gold', // 안되는 이유?
          글쓰기,
          글읽기,
          채널관리,
          백업,
          소셜로그인여부
        }){
  console.log('함수기능');
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
  return;
  }

함수4({
  회원등급 : 'Silver',
  소셜로그인여부: true
})

////// 동현님 글 //////
function 함수({
  a = 2,
  b = 1,
  c = 3
} = {}) {
  console.log(a, b, c); //20 30 10
  return a + b + c; //60
}
console.log(함수({a: 20, b: 30, c: 10})); //2 1 3
함수(); // 아규먼트 없이 호출 가능

// 설명
// O
function 함수(a=10, b=20, c=30){
  return a + b + c;
}
함수(); //60

// X
function 함수({a=10, b=20, c=30}){
  return a + b + c;
}
함수();

// O
function 함수({a=10, b=20, c=30}){
  return a + b + c;
}
함수({}); //60

// 이 코드를 축소한 코드가 위의 코드입니다. 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined

/*-------------------- 재귀함수 --------------------
  재귀함수(Top-down, 분할정복) <-> 반복문(Bottom-up)
  https://namu.wiki/w/%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98
    문자열뒤집기
    팩토리얼
    피보나치
    DFS
    하노이의 탑 (끝판왕)
    타익스트라 (끝판왕) */
function factorial(n){
  if (n <= 1){ //종료조건이 없으면 무한반복이 됩니다.
    return 1;
  }
  return n * factorial(n - 1);
}

factorial(5); //120

let result1 = 1;
for (let i = 2; i < 6; i++) {
    result1 *= i;
}
console.log(result1); //120

/*
5! = 5 * 4 * 3 * 2 * 1

                n       n <= 1      return
factorial(5)    5       false       5 * factorial(4) = 120
factorial(4)    4       false       4 * factorial(3) = 24
factorial(3)    3       false       3 * factorial(2) = 6
factorial(2)    2       false       2 * factorial(1) = 2
factorial(1)    1       true        1
*/

// 누적합은 아래 코드들이 좋은 코드는 아니다.
function 누적합(n){
  if (n <= 1){ //종료조건이 없으면 무한반복이 됩니다.
    return 1;
  }
  return n * 누적합(n - 1);
}

누적합(100);

let result2 = 0;
for (let i = 1; i <= 100; i++) {
  result2 *= i;
}
console.log(result2);

// 순회를 돌지 않고 해결할 수 있으면 돌지 않고 해결한다.
let n = 100;
console.log(n * (n + 1) / 2); //5050

// 재귀함수로 문자열을 뒤집는 코드를 작성하세요
function reverse(txt){
  if (txt.length === 1){
    return txt;
  }
  return reverse(txt.slice(1)) + txt[0];
}
reverse('hello world'); //'dlrow olleh'

/* 참고사항
'hello'.slice(1)
'ello'
                  txt.length <= 1      return
reverse('hello')   false               reverse(txt.slice(1))+'h' = 'olleh'
reverse('ello')    false               reverse(txt.slice(1))+'e' = 'olle'
reverse('llo')     false               reverse(txt.slice(1))+'l' = 'oll'
reverse('lo')      false               reverse(txt.slice(1))+'l' = 'ol'
reverse('o')       true                'o'
*/

txt = 'hello world';
result3 = '';
for (const i of txt){
  result3 = i + result3;
}
console.log(result3); //dlrow olleh

// 지역변수와 전역변수

// 스코프에 대한 좋은 글
// https://velog.io/@bico/JavaScript-%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope

// 블록레벨스코프
if(true){ // for문이어도 마찬가지입니다.
  let x = 10;
  const y = 10;
}
console.log(x, y)

// 밖에 선언된 x는 함수 내부에서도 접근 가능하다.
let x = 100
function xplus(){
  x = x + 10
}
xplus()
console.log(x); //110

// 함수가 종료된 다음에는 선언된 변수는 휘발됩니다.
function xplus(){
  let x = 100
  x = x + 10
}
xplus()
console.log(x); //error

// 함수 안에 함수
function a(){
  console.log('a 실행');
  function b(){
    console.log('b 실행');
  }
  b()
}
a()


//a 실행, b 실행 -> 밖에서 b 선언하면 error생긴다.
/*            n       n <= 1      return
reverse(5)    5       false       5 * reverse(4) = 120
reverse(4)    4       false       4 * reverse(3) = 24
reverse(3)    3       false       3 * reverse(2) = 6
reverse(2)    2       false       2 * reverse(1) = 2
reverse(1)    1       true        1
*/



// 화살표 함수
// https://ko.javascript.info/arrow-functions-basics
function 함수(x, y){
  return x + y
}

let 함수2 = (x, y) => x + y

함수1.name
'함수1'
함수2.name
'함수2'
console.dir(함수1)

함수1(10, 10) //20
함수1(10, 20) //30
함수1.name //'함수1'
함수2.name //'함수2'
console.dir(함수1)

function 함수(x, y){
  let z = x + y;
  return z;
}

let 함수2 = (x, y) => {
  let z = x + y;
  return z;
}

//호이스팅이 다르다(35번 파일)