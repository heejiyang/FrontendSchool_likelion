import { useState, useEffect } from 'react'

export default function App() {
  // 두개 감시할 변수가 있다. useState를 특정구문에서 반복쓰면 무한반복이 일어날 수 있다.
  const [수업여부, set수업여부] = useState('수업중')
  const [잔고, set잔고] = useState(100000)

  const handleZoomOut = (e) => {
    set수업여부('수업종료')
  }
  // 각각 컨트롤하기 위해 useEffect를 쓴다.
  useEffect(() => {
    if(수업여부 === '수업종료' && 잔고 >= 20000){
      alert('카페로 출발!')
      set잔고(90000)
    }
  }, [수업여부])


  return (
    <div>
      <button onClick={handleZoomOut}>ZoomOut</button>
      <p>{수업여부}</p>
      <p>{잔고}</p>
    </div>
  )
}
