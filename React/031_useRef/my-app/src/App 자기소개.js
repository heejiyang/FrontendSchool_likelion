import {useState, useRef} from 'react'

// 문제 input창 3개를 만들어 자기소개를 하는 기능을 만들어주세요.
// input 1 - 이름
// input 2 - 성별
// input 3 - 나이
// button - 자기소개
// return - 제 이름은 이호준입니다. 저는 남자이고요. 나이는 10살입니다.
export default function App() {
  const Name = useRef(null);
  const Gender = useRef(null);
  const Age = useRef(null);
  const [introduce, setIntroduce] = useState('');

  const handleIntroduce = (e) => {
    setIntroduce(
      `제 이름은 ${Name.current.value}입니다. 
      저는 ${Gender.current.value}이고 
      나이는 ${Age.current.value}입니닷!`
    );
    return;
  };

  return (
    <div>
      <input type="text" ref={Name}/>
      <input type="text" ref={Gender}/>
      <input type="text" ref={Age}/>
      <button onClick={handleIntroduce}>자기소개</button>
      {introduce}
    </div>
  );
}
