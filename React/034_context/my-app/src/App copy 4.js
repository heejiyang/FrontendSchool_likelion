import { createContext } from 'react'

const Value = createContext({price:1000})

// 상황에 맞게 props나 context(props drilling일 경우) 사용

// props drilling을 하지 않고 직접 Three컴포넌트에 값을 내려줄 수 있음. 파일이 달라도 import해서 사용 가능하다.

// consumer은 자식으로 태그를 가질 수 없습니다.
function Three(){
  return (
    <Value.Consumer>
      {(value) => (<p>{value.price}</p>)}
    </Value.Consumer>
  )
}

function Two(){
  return (
    <div>
      Two
      <Value.Provider value={{price: 2000}}>
        <Three/>
      </Value.Provider>
    </div>
  )
}

function One(){
  return (
    <div>
      One
      <Two/>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <One/>
    </div>
  )
}