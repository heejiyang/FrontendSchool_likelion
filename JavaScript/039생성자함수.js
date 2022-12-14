// 생성자함수. 함수 이름 첫 글자 대문자로 시작("new"연산자 붙여 실행)
let book = {
  책이름: "JavaScript",
  책가격: 1000,
  저자: "홍길동",
  출판일: "22.10.11"
}
let newBook = {};

newBook["책이름"] = "JavaScript"; //예를 들어 form에서 입력 받은 값
newBook["책가격"] = 1000000;
newBook["저자"] = "세원, 석규, 슬기";
newBook["출판일"] = "22.10.30";

// new키워드를 사용했을 경우
function Book(책이름, 책가격, 저자, 출판일){
  this.책이름 = 책이름; //this뒤는 다른 변수이다.
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
}

// let data = Book('CSS', 10, '유진', '22.12.30')
// console.log(data) // undefined
let book1 = new Book("HTML", 10, "유진", "22.12.30");
let book2 = new Book("CSS", 20, "유진", "22.12.30");
let book3 = new Book("JS", 30, "유진", "22.12.30");

console.log(book1);
// 객체처럼 출력된다. Book {책이름: 'HTML', 책가격: 10, 저자: '유진', 출판일: '22.12.30'}
console.log(book2);
// 객체처럼 출력된다. Book {책이름: 'CSS', 책가격: 20, 저자: '유진', 출판일: '22.12.30'}
console.log(book3);
// 객체처럼 출력된다. Book {책이름: 'JS', 책가격: 30, 저자: '유진', 출판일: '22.12.30'}

console.log(book1, book2, book3);


// new 키워드를 사용했을 경우
function Book(책이름, 책가격, 저자, 출판일){
    // this = {}
    this.책이름 = 책이름;
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
    // return this
}