// while(조건문) {
//   실행문;
// }
let i = 0;
while (i < 10) {
  console.log('무한반복!!');
  i++;
}

while (true){
  console.log('무한반복!!');
}

//구구단 암기!!
let i1 = 2;
let j1 = 1;
while (i1 < 10) {
  while (j1 < 10) {
    console.log(`${i1} X ${j1} = ${i1 * j1}`);
    j1++;
  }
  j1 = 1; //j를 초기화해야 전부 출력된다.
  i1++;
}

let value = [10, 20, 30, 40];
let x = 0;
while(x < value.length) {
  console.log(value[x]);
  x++;
} //10, 20, 30, 40


// break는 탈출한다.
let i2 = 2;
let j2 = 1;
while (i2 < 10) {
  while(j2 < 10) {
    console.log(`${i2} X ${j2} = ${i2 * j2}`);
    j2++;
  }
  j2 = 1
  if (i2 >= 4) {
    break;
  }
  i2++;
}

///
let sum = 0;
let i3 = 0;

do {
  i3++;
  sum += i3;
} while (i3 < 10);

console.log(sum);

let i4 = 2;
let j4 = 1;
while (i4 < 10) {
  while(j4 < 10) {
    console.log(`${i4} X ${j4} = ${i4 * j4}`);
    j4++;
  }
  j4 = 1
  if (i4 == 4) {
    break;
  }
  i4++;
}

// 무한 반복
let i5 = 2;
let j5 = 1;
while (i5 < 10) {
  while(j5 < 10) {
    console.log(`${i5} X ${j5} = ${i5 * j5}`);
    j5++;
  }
  j5 = 1
  if (i5 == 4) {
    continue;
  }
  i5++;
}

// continue는 실행시키지 않고 다음 루프로 간다.
let i6 = 2;
let j6 = 1;
while (i6 < 9) {
  i6++;
  if (i6 == 4) {
    continue;
  }
  while(j6 < 10) {
    console.log(`${i6} X ${j6} = ${i6 * j6}`);
    j6++;
  }
  j6 = 1;
}

for (let i7 = 0; i7 < 10; i7++) {
  if (i7 === 4 || i7 === 5) {
    continue;
  }
  console.log(i7);
}

for (let i8 = 0; i8 < 10; i8++) {
  if (i8 === 4 || i8 === 5) {
    break;
  }
  console.log(i8);
}

////
timestable:
for (let x = 2; x < 10; x++) {
  for (let y = 1; y < 10; y++) {
    if (x === 4) break timestable;
    console.log(`${x} X ${y} = ${x * y}`);
  }
}

for (let x = 2; x < 10; x++) {
  for (let y = 1; y < 10; y++) {
    if (x === 4) break;
    console.log(`${x} X ${y} = ${x * y}`);
  }
}

// - 레이블은 반드시 `break`문 또는 `continue`문 위에 있어야 한다.
// - `break`문은 모든 레이블에서 사용할 수 있다.
// - `continue`문은 반복문에서만 사용 가능하다.