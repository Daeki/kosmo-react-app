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
                <Link to={"/member/login/"}>로그인</Link>


            </nav>
        </>
    )
}
export default Header;