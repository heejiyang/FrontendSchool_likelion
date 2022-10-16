// Set은 모든 타입의 값을 저장하는 객체자료형의 한 종류입니다. 이때 객체 안의 값은 중복을 허용하지 않습니다.
// 집합, 합집합, 교집합, 차집합
let s1 = new Set("abcdeeeeeee");

console.log(s1);
console.log(s1.size);

// 문제
회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근'];

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요?
let set = new Set(회사게시판);
set.size;

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of set) {
  console.log(i, 회사게시판.filter(e => e === i));
}
// 이호준 (3) ['이호준', '이호준', '이호준']
// 김은하 (2) ['김은하', '김은하']
// 이준근 ['이준근']

for (const i of set) {
  console.log(i, 회사게시판.filter(e => e === i).length);
}
// 이호준 3
// 김은하 2
// 이준근 1

let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1); //순회돌면서 해당 key값을 업데이트 해주는 식으로
}

map.set("이호준", (map.get("이호준") || 0) + 1); // map.set("이호준", 1) map.get("이호준")이 0이므로 뒤의 0을 본다.
map.set("이호준", (map.get("이호준") || 0) + 1); // map.set("이호준", 2)
map.set("이호준", (map.get("이호준") || 0) + 1); // map.set("이호준", 3)
map.set("김은하", (map.get("김은하") || 0) + 1); // map.set("김은하", 1)

let s = new Set("abcdeeeeeeeee");
s.size;
s.add("f");
s.has("a");

// Set순환하기
for(let variable of s){
  console.log(variable);
}

// 값이 배열인 경우
let ss = new Set("abcdeeeeeeeee".split(""));
console.log(ss);

// Set의 값을 제거하기
ss.delete('b');

// Set의 값을 확인하기
console.log(ss.has('a'));

// Set의 모든 값을 제거하기
ss.clear
console.log(ss);

let a = new Set("abc");
let b = new Set("cde");
// 교집합
//a를 먼저 전개하고 b를 가지고 있는가. value에 들어가는 값은 a, b, c 이므로 false, false, true
let cro = [...a].filter(value => b.has(value))

// 합집합
//a를 먼저 전개하고 b를 가지고 있는가. concat은 이어붙인다.
let union = new Set([...a].concat(...b))

// 차집합
//a를 먼저 전개하고 b에서 가지지 못한것을 찾아내자.
let dif = new Set([...a].filter(x => !b.has(x)));