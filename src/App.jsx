import { Route, Routes } from "react-router-dom"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import MemberLogin from "./components/members/MemberLogin"
import Index from "./components/Index"

function App() {


  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/member/login" element={<MemberLogin />}></Route>

      </Routes>

      <Footer></Footer>
    </>
  )
}

export default App
