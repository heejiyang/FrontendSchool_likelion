var peter = {
  name : 'Peter Parker',
  sayName : function(){
		console.log(this.name);
	}
}

var bruce = {
  name : 'Bruce Wayne',
}

peter.sayName() //Peter Parke
peter.sayName.call(bruce); //Bruce Wayne

////////////////////////////////////////////////////////////
var peter = {
  name : 'Peter Parker',
  sayName : function(느낌표){
		console.log(this.name + 느낌표);
	}
}
peter.sayName('!');
peter.sayName.call(bruce, '!'); //Bruce Wayne!

//apply
var peter = {
  name : 'Peter Parker',
  sayName : function(is, is2){
		console.log(this.name + 'is' + is + 'or' + is2);
	}
}

var bruce = {
  name : 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']); //sayName호출하는 것 bruce

//bind : this가 고정된 새로운 함수 반환
function sayName(){
  console.log(this.name);
}

var bruce = {
  name: 'bruce',
  sayName : sayName
}

var peter = {
  name : 'peter',
  sayName : sayName.bind(bruce)
}
sayName(); //window 값이 없다.
peter.sayName(); //bruce
bruce.sayName(); //bruce