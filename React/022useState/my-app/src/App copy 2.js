import {useState} from 'react'
// 감시해서 변경되면 렌더링하겠다. like는 초깃값. useState(100)의 100. like변경시킬 수 있는 것은 setLike

function Resume({이름, 취미, 자기소개}){
  const [like, setLike] = useState(0)
  // const [like, setLike] = useState(100)
  // const [like, setLike] = useState('hello world')

  // 보통 함수명 앞에 handle을 붙인다.
  function handleClickLike(){
    // like += 1
    setLike(like + 1); // like = like + 1
    // setLike(like + 2); // like = like + 2
    // setLike(like + 'hello' + 'world'); // like = like + 'hello' + 'world'
    console.log(like)
  }

  return (
    <section>
      <h2>{이름}</h2>
      <h2>{취미}</h2>
      <h2>{자기소개}</h2>
      <button onClick={handleClickLike}>{like}</button>
    </section>
  )
}

function App() {
  return (
    <main>
      <Resume 이름="이호준" 취미="코딩" 자기소개="안녕하세요. 제주코딩베이스캠프 이호준입니다."/>
    </main>
  );
}

export default App;
