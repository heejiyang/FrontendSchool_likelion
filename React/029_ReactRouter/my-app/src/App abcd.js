// 문제
// /
// /a
// /b
// /c
// /c/1
// /c/2
// /c/d

import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index(){
  return <div>index</div>
}

function A(){
  return <p>cart</p>
}

function B(){
  return <p>cart</p>
}

function Num(){

  const location = useLocation()
  const { num } = useParams()
  console.log(location)

  return <p>{num}번</p>
}
function Txt(){

  const location = useLocation()
  const { txt } = useParams()
  console.log(location)

  return <p>{txt}</p>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/a" element={<A />}></Route>
        <Route path="/b" element={<B />}></Route>
        <Route path="/c/:id/*" element={<Outlet />}></Route>
          <Route path="num" element={<Num />}>
          <Route path="txt" element={<Txt />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;