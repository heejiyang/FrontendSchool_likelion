// from을 통해 가져오고 as로 선택한 것만 import로 가져온다.
// as는 별칭이다. 잘 안씁니다.
// 모든것을 object로 가져온다.
import * as 개인프로필 from './003.js';

console.log(개인프로필.이름);
console.log(개인프로필.나이);

// object 형태는 이렇게 되어 있는 것과 같다.
// 개인프로필 = {
//     이름 : '호준',
//     나이 : 10
// }