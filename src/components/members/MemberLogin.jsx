import { useRef } from "react"
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useAuth } from "../context/MemberContext.jsx"


export default function MemberLogin() {
    const { setMember } = useAuth();
    const navigate = useNavigate();
    const username = useRef();
    const password = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = { username: username.current.value, password: password.current.value }

        fetch("http://localhost:8080/member/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(r => r.json())
            .then(r => {
                localStorage.setItem("accesstoken", r.accessToken);
                localStorage.setItem("refreshToken", r.refreshToken);
                localStorage.setItem("member", JSON.stringify({ username: r.username }));
                setMember({ username: r.username })
                navigate("/")
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            <h1>Member Login Page</h1>
            <form action="test" onSubmit={handleSubmit}>
                <input type="text" ref={username}></input>
                <input type="password" ref={password}></input>
                <button>로그인</button>
            </form>
        </>
    )
}
