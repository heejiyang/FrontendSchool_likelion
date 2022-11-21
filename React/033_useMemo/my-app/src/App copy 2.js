import {useState, useMemo} from 'react'

function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

// 부하가 줄어든 모습을 볼 수 있다. -> 컴포넌트 성능 최적화
function App() {
  const [count, setCount] = useState(0)
  const result = useMemo(() => {
    return 부하()
  }, [])

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!!</button>
    </div>
  );
}
export default App;
