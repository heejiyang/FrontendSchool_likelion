import { createContext } from 'react'

const Value = createContext({price:1000})

// 상황에 맞게 props나 context(props drilling일 경우) 사용
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
      <Three/>
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