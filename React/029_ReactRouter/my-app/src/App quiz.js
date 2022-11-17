import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index(){
  return <div>index</div>
}

function ProductNotice(){

  const location = useLocation()
  const { num } = useParams()
  console.log(location)

  return <p>{num}번 상품의 공지입니다. 여러분이 fetch를 통해 백엔드에서 정보를 받아와야 합니다.</p>
}

function Cart(){
  return <p>cart</p>
}

function Coupon(){
  return <p>coupon</p>
}

function Question(){
  return <p>question</p>
}

function Notice(){
  return <p>notice</p>
}

function User(){
  return <p>user</p>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/products/:id/*" element={<Outlet/>}>
          <Route path="notice" element={<ProductNotice />}/>
        </Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/coupon" element={<Coupon/>}></Route>
        <Route path="/question" element={<Question/>}></Route>
        <Route path="/notice" element={<Notice/>}></Route>
        <Route path="/user" element={<User/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;