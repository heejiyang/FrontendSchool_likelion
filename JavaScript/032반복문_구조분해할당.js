let value = [10, 1, 100, 200, 300, 10];
let value2 = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
}

Object.keys(value) //(6) ['0', '1', '2', '3', '4', '5']
Object.keys(value2) //(4) ['one', 'two', 'three', 'four']

// for of로 순회를 돌 수 없음.
// of로 순회를 돌아야 key와 value를 한꺼번에 출력하고 싶은 것이다 -> error
for (i in value2){
  console.log(i)
}
//one, two, three, four

Object.entries(value) //(6)[Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
Object.entries(value2) //(4) [Array(2), Array(2), Array(2), Array(2)]

for (i of Object.entries(value2)){
  console.log(i)
}
//(2) ['one', 1]
//(2) ['two', 2]
//(2) ['three', 3]
//(2) ['four', 4]

for (i of Object.entries(value2)){
  console.log(`key는 ${i[0]}고 value는 ${j[1]}입니다.`)
}
//key는 one고 value는 undefined입니다.
//key는 two고 value는 undefined입니다.
//key는 three고 value는 undefined입니다.
//key는 four고 value는 undefined입니다.

for ([i, j] of Object.entries(value2)){
  console.log(`key는 ${i}고 value는 ${j}입니다.`)
}
//key는 one고 value는 1입니다.
//key는 two고 value는 2입니다.
//key는 three고 value는 3입니다.
//key는 four고 value는 4입니다.
for ([i, j] of [[10, 20], [30, 40]]){
  console.log(i, j)
}
//10 20
//30 40

for ([i, j] of [[10, 20, 300], [30, 40, 500]]){
  console.log(i, j)
}
//10 20
//30 40
//300과 500을 받지 못했습니다.

//1. 전개구문 사용 (몇 개 들어올지 모르는 경우)
for ([i, j, ...k] of [[10, 20, 30, 1, 2], [30, 40, 50, 1]]){
  console.log(i, j, k)
}
//10 20 (3) [30, 1, 2]
//30 40 (2) [50, 1]

for ([[i, j], k] of [[[10, 20],300] [[30, 40], 500]]){
  console.log(i, j, k)
}

for ([i, j] of [[[10, 20],300] [[30, 40], 500]]){
  console.log(i, j)
}

//2. 일반 변수 선언의 구조분해할당
let a1, b1, c1;
[a1, b1] = [10, 20];
//(2) [10, 20]

let one, two, three;
[one, two, three] = '010-5044-2903'.split('-');
//(3) ['010', '5044', '2903']

let one1, two1, three1, four1;
[one1, two1, three1, four1] = '010-5044-2903-0000'.split('-');
//(4) ['010', '5044', '2903', '0000']
[one1, two1, three1, ...four1] = '010-5044-2903-01-02-03'.split('-');
//(6) ['010', '5044', '2903', '01', '02', '03']

//3. 구조분해할당 문제
data = [10, 20, 30, 40, 50]; //(5) [10, 20, 30, 40, 50]
// 문제 1
// a, b, c로 각각을 분해할 것이다. a에는 10, b에는 20, 30, 40, c에는 50을 할당해보자.
// [a2, ...b2, c2] = [10, 20, 30, 40, 50]; //(x)
[a2, b2, c2] = [data[0], [data[1], data[2], data[3]], data[4]]; //(o)

// 문제 2
// a, b, c로 각각을 분해할 것이다. a에는 10, 20, 30. b에는 40. c에는 50을 할당해보자.
// [...a3, b3, c3] = [10, 20, 30, 40, 50]; //(x)
[a3, b3, c3] = [[data[0], data[1], data[2]], data[3], data[4]]; //(o)

// 문제 3 (정상 작동 - 스프레드가 마지막에 있어야한다.)
// a, b, c로 각각을 분해할 것이다. a에는 10. b에는 20. c에는 30, 40, 50을 할당해보자.
[a4, b4, ...c4] = [10, 20, 30, 40, 50];

//Object 구조분해할당
let data1 = {
  name1 : 'hojun',
  age1 : 10,
  money1 : 100,
};
// let {name1, age1} = data1;
let {name1, age1} = {name1: 'hojun', age1: 10};

let data2 = {
  name2 : 'hojun',
  age2 : 10,
  money2 : 100,
  company2 : 'weniv',
};
let {name2, age2, ...rest2} = data2;

// 순서를 바꿔보자
let data3 = {
  name3 : 'hojun',
  money3 : 100,
  company3 : 'weniv',
  age3 : 10,
};
let {name3, age3, ...rest3} = data3;

// RORO기법 등의 디자인 패턴에서도 구조분해할당을 많이 사용한다.
let a5 = [10, 20, 30];
a5.push(100); //[10, 20, 30, 100]
a5.unshift(1000); //[1000, 10, 20, 30, 100]

let a6 = [10, 20, 30];
a6 = [1000, ...a, 100];

let a = [10, 20, 30];
let b = [10, 20, 30];
let c = [...a, ...b];
//이렇게 합쳐진 값을 다시 구조분해할당. (6)[10, 20, 30, 10, 20, 30]

let str1 = 'hello world';
console.log([str1]); //['hello world']

let str2 = 'hello world';
console.log([...str2]); //(11) ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

'!'.repeat(10); //'!!!!!!!!!!'
[...'!'.repeat(10)]; //(10) ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!']