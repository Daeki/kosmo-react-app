function NoticeAdd() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        fetch("http://localhost:8080/notice/add", {
            method: "POST",
            body: data
        })
            .then(r => r.json())
            .then(r => console.log(r))
            .catch(r => console.log(r))
    }

    return (
        <>
            <h1>Notice Add</h1>
            <form onSubmit={handleSubmit}>

                <input type="text" name="title" id="" />
                <textarea name="content"></textarea>
                <input type="file" name="attach" />
                <button>글쓰기</button>
            </form>
        </>
    )
}

export default NoticeAdd