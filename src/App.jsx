import { Route, Routes } from "react-router-dom"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import MemberLogin from "./components/members/MemberLogin"
import Index from "./components/Index"
import MemberJoin from "./components/members/MemberJoin"
import NoticeList from "./components/notice/NoticeList"
import NoticeAdd from "./components/notice/NoticeAdd"

function App() {


  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/notice/list" element={<NoticeList />} />
        <Route path="/notice/add" element={<NoticeAdd />} />
        <Route path="/member/login" element={<MemberLogin />}></Route>
        <Route path="/member/join" element={<MemberJoin />}></Route>
      </Routes>

      <Footer></Footer>
    </>
  )
}

export default App
