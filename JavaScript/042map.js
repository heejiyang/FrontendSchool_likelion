let m = new Map(); //m이 object의 this를 받는 것과 같다.
m//.찍고 이거가는 것 메소드 체이닝
  .set("하나", 1)
  .set("둘", 2)
  .set("셋", 3)
  .set("넷", 4)
  .set(true, "트루")
  .set([1,2], "리얼리?") // 이렇게는 호출되지 않습니다.

console.log(m); //Map(6) {'하나' => 1, '둘' => 2, '셋' => 3, '넷' => 4, true => '트루', …}

//각 객체가 다른 주소값을 가진다.
console.log(m.get("하나")); //1
console.log(m.get(true)); //트루 object에서 가능하지 않다.
console.log(m.get([1, 2])); //undefined 이렇게는 호출되지 않습니다.

/* Python Vs JavaScript
1. Python
python에서 아래 값은 다르게 나옵니다.
  x == y python에서는 true
  x is y python에서는 false

  x = [1, 2]
  id(x)

  y = [1, 2]
  id(y)

2. JavaScript
  [1, 2] === [1, 2] // false
  [1, 2] == [1, 2]  // false

  let x = [1, 2]
  let y = [1, 2]

  x == y           // false
  x === y          // false
*/

let m1 = new Map();
let test1 = [1, 2];

m1.set("하나", 1)
  .set(true, "트루")
  .set(test1, "리얼리?") //이렇게는 호출된다.

console.log(m1.get(test1)); //리얼리?

// Map에 해당 key값이 있는지 확인하기
m1.has("하나"); //true

// Map에 값을 제거하기
m1.delete("하나"); //true
m1.has("하나"); //false

// 크기 구하기
m1.size
let data = {"one": 1, "two": 2}
let data = new Map([["one", 1], ["two", 2]])
let data = new Map(Object.entries({"one": 1, "two": 2}))
// let data = new Map({"one": 1, "two": 2}) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X

// 직접 순회가 가능한 Map
let data = {"one": 1, "two": 2}
for (const i of data) {
  console.log(i); // X 작동되지 않습니다.
}

let data = {"one": 1, "two": 2}
for (const i of Object.entries(data)) {
  console.log(i);
}

let m = new Map();

m.set("하나", 1)
  .set("둘", 2)
  .set("셋", 3)
  .set("넷", 4)

for(const i of m){
  console.log(i);
}

for(const[i, j] of m){
  console.log(i, j);
}

m.keys()
m.values()
m.entries()

// Map - Object 간의 형변환
let 맵 = new Map(Object.entries({'one':1, 'two':2}));
let 오브젝트 = Object.fromEntries(맵);

// 맵과 object 100만개 순회 test
let map = new Map(); //키 값의 중복이 안된다.
map.set("이호준", 1);
map.set("이호준", 2);
map.set("이호준", 3);