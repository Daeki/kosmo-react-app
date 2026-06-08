
function MemberJoin() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        const form = new FormData(e.target);

        fetch("http://localhost:8080/member/join", {
            method: "POST",
            body: form
        })
            .then(r => r.json())
            .then(r => console.log(r))
            .catch(r => console.log(r))


    }

    return (
        <>
            <h1>Join Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="id입력" />
                <input type="password" name="password" placeholder="pw입력" />
                <input type="email" name="email" placeholder="email입력" />
                <input type="text" name="name" placeholder="name입력" />
                <input type="file" name="profile" placeholder="file입력" />
                <button>Join</button>
            </form>
        </>
    )
}

export default MemberJoin;