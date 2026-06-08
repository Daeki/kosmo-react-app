import { Link } from "react-router-dom";
import { useAuth } from "../components/context/MemberContext.jsx";

function Header() {
    const { member, setMember } = useAuth();


    const handleLogout = () => {
        localStorage.removeItem("member");
        setMember(null);
    };

    return (
        // jsx
        <>
            <h1>Header Page</h1>
            {/* url  */}
            <nav>


                <Link to={"/"}>Home</Link>
                <Link to={"/notice/list/"}>공지사항</Link>
                <Link to={"/member/login/"}>로그인</Link>
                <Link to={"/member/join/"}>회원가입</Link>

            </nav>
        </>
    )
}
export default Header;