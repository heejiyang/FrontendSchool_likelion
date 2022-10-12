function a(){
  console.log(this);
} //함수를 호출해준 애가 this
a();

function b(){
  console.log('hello world');
}
b();
window.b();

let test = {
  one: 1,
  two: 2,
  three: function(){
    console.log(this);
  }
}
test.three();
//test호출하는애는 window three호출은 test.

let test2 = test.three;
//test2호출하면 window나온다. this도 window 나온다.

// 추가 예제 //
// let, const로 선언하면 window 등록이 안된다. var만 window등록이 된다.
// ()는 호출이다. 함수 객체를 생성해준 것.
// sayName: sayName은 sayName이라는 키에 sayName 함수를 할당 해준거고
// sayName: sayName() 은 함수를 실행 시키는거쥬
// peter.say(): peter객체 안에 있는 sayName함수
// 자바스크립트 자체가 렉시컬 스코프(선언한 곳을 기억하는 스코프)를 따라서 객체 내에서 함수를 선언했기에 객체의 스코프를 기억해서 name이 변경되는것도 맞습니다
// 함수 선언문에서의 this는 중첩이든 말든 window 객체를 가리킵니다
function sayName(){
  console.log(this.name);
}

var name = "Hero"; //sayName(); -> window.name "Hero"

let peter = {
  name: "Peter Parker",
  sayName : sayName
}

let bruce = {
  name : 'Bruce Wayne',
  sayName : sayName
}

sayName(); //Hero
peter.say(); //Peter Parker this가 peter이다.
bruce.say(); //Bruce Wayne

function a(){
  console.log(this.name);
  function b(){
    console.log(this.name);
  }
  b();
}
a();
// b -> a -> window

function a(){
  console.log(this);
  function b(){
    console.log(this);
  }
  b();
}
a();
// Window {window: Window, self: Window, document: document, name: 'Hero', location: Location, …}
// Window {window: Window, self: Window, document: document, name: 'Hero', location: Location, …}

function a(){
  console.log(this);
  function b(){
    console.log(this);
    function c(){
      console.log(this);
    }
    c();
  }
  b();
}
a();

function sayName(){
  console.log(this);
}

var c = {
  'hello':'world',
  'say': sayName
}

var b = {
  'c': c
}

var a = {
  'b':b
}

a.b.c.say();