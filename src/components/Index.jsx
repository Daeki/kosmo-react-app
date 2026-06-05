import { useAuth } from "./context/MemberContext"

function Index() {

    const { member, setMember } = useAuth();

    const logout = () => {
        localStorage.clear();
        setMember(null)
    }

    return (
        <>
            {member ? <h3> {member.username} <button onClick={logout}>logout</button> </h3> : <h3>로그인 하세요</h3>}
            <h1>Index Page</h1>
        </>)
}
export default Index

// export default Index=()=>{
//     return(
//         <>
//             <h1>Index Page</h1>
//         </>
//     )
// }