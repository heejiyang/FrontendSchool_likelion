// 리엑트의 정체는 경량화된 오브젝트!!

// 리액트는 변경된 컴포넌트만 리렌더링을 해주는 것 뿐만 아니라 대량의 연산에서 요소들을 돔보다 경량화된 오브젝트를 내려준다. 때로는 DOM보다 빠르다. -> 리엑트는 요소들을 경량화된 오브젝트로 렌더링한다.
// -> 요소의 상태가 바뀌었을 때 전체를 렌더링 하지 않고 // 변경이 일어난 요소들만 렌더링 할 수 있다는 특징이 있다
// -> 이런 특징을 이용해서 프로젝트 규모, 특징을 고려해서 리액트를 적용하는게 장점이 된다면 적용하는 게 좋다
// 버츄얼 돔 - 경량화된 오브젝트
// 돔 실제로 - 렌더링 된 것
// 돔렌더링 - 하나하나 컨트롤할 수 있는 것

function One(props){
  console.log('// one 시작')
  console.log(props)
  console.log('// one 끝')
  return (
    <div>
      {/* 중괄호 안에 배열을 넣으면 요소만 남는다. */}
      {props.children}
    </div>
  )
}

function Two(props){
  console.log('// two 시작')
  console.log(props)
  console.log('// two 끝')
  return (
    <div>
      {/* 배열 형태가 아니라 객체형태 two밑에 태그가 하나이기 때문에 */}
      {props.children}
    </div>
  )
}

function Three(props){
  console.log('// three 시작')
  console.log(props)
  console.log('// three 끝')
  return (
    // props가 비어있다.
    <div>hello</div>
  )
}

function Four(props){
  console.log('// four 시작')
  console.log(props)
  console.log('// four 끝')
  return (
    // props가 비어있다.
    <div>hello</div>
  )
}

function Five(){
  return (
    <div>
      <p>hello</p>
      <Six/>
    </div>
  )
}

function Six(){
  return <div>hello</div>
}

function App() {
  return (
    <div>
      <h1>app - h1</h1>
      <p>app - p</p>
      <One>
        <h2>app &gt; One - h2</h2>
        <p>app &gt; One - p</p>
        {/* 안에서 컨트롤 하고싶을때, props를 요소로 children을 받는다 */}
        <Two>
          <p>app &gt; One &gt; Two - p</p>
        </Two>
        <Three/>
        <Four></Four>
        {/* props를 요소로 children을 받지 않는다. */}
        <Five/>
      </One>
    </div>
  );
}
export default App;