import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function NoticeList() {
    const [data, setData] = useState([])

    useEffect(() => {
        list()
    }, [])

    const list = () => {
        fetch("http://localhost:8080/notice/list")
            .then(r => r.json())
            .then(r => {
                console.log(r)
                setData(r);
            })
            .catch(r => console.log(r))
    }

    return (
        <>
            <h1>Notice List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Title</th>
                        <th>Writer</th>
                        <th>Hit</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((i, idx) => (
                            <tr key={i.id}>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.username}</td>
                                <td>{i.views}</td>
                                <td>{i.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
            <div>
                <Link to="/notice/add">글쓰기</Link>
            </div>
        </>
    )
}

export default NoticeList