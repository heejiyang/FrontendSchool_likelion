function Resume({이름, 취미, 자기소개}){
  let like = 0

  function clickLike(){
    like += 1
    console.log(like)
  }
  return (
    <section>
      <h2>{이름}</h2>
      <h2>{취미}</h2>
      <h2>{자기소개}</h2>
      {/* 왜 여기가 증가되지 않을까? -> 변수가 변경이 된다고 하더라도 렌더링이 다시 일어나지 않기 때문이다. */}
      <button onClick={clickLike}>{like}</button>
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
