// 참조카운트
let me ={ age: 30 };
let you = me; // me you가 객체 참고하고있기 때문에 참조 카운트 : 2

me = null; // 참조카운트 : 1
you = null; // 참조카운트 : 0

let x = {
  y : {
    z : 1
  }
}

// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2라고 한다.
let a = x; // object 1의 참조카운트 2 (x, a)
x = 1; // object 1의 참조카운트 1 (a)

let b = a.y; // object 2의 참조카운트 2 (a.y, b)
a = 2; // object 1의 참조카운트 0 (a의 참조대상을 바꿨기 때문에 가비지컬랙션의 대상. 하지만 안에 참조하는 것이 있어서 가비지되지 않는다.)
// 이렇게 불필요하게 남아있는 object 1 객체가 존재하는 경우 메모리 누수(memory leak)가 발생했다고 표현한다.

// 클로저
// 함수안에 함수가 있다. 변수를 밖으로 빼는 함수가 참조한다. outer가 사라져도 getPrivate는 참조되어 지울수가 없다.(가비지컬랙션 대상이 아니다.)
function outer(){
  let privateVal = ['test'];

  function getPrivate(){
    return privateVal
  }

  return getPrivate
}
// getPrivate가 getPrivateData안에 저장된다. 실행시키면 ['test']전달된다.
const getPrivateData = outer();
const secretVal = getPrivateData();
console.log(secretVal);

// 가비지 컬랙션은 null, undefined를 구분하지 않는다. 변수를 비공개처리를 해줘야한다.
// secretVal = null;
// secretVal = undefined;

// 원본 배열하는 습관 기르기
let aespa = ["카리나", "윈터", "지젤", "닝닝"];
aespa.forEach((item, index) => {
  aespa[index] = item + "💖"
})
console.log(aespa);
// 결과 : ['카리나💖', '윈터💖', '지젤💖', '닝닝💖']

// 원본배열을 불변하는 객체처럼 다루자
const aespa2 = aespa.map((item) => {
  return item + "💖";
})
console.log(aespa2);
console.log(aespa);