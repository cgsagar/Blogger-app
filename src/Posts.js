import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


const Posts = (props) => {
    const [postList, setPostList] = useState([])
    const [count, setCount] = useState(10)

    useEffect(() => {
        axios.get(`//jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                setPostList(res.data)
            })
            .catch((res) => {
                console.log(res.data)
            })
    }, [])

    const handleLoadMore = () => {
        setCount(count + 10)
    }

    return (
        <div>
            <h1>Total Posts - {postList.length}</h1>
            <ul>
                {
                    postList.slice(0, count).map((post) => {
                        return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })
                }
            </ul>
            {
                count < postList.length && <button onClick={handleLoadMore}>Load more</button>
            }

        </div>
    )
}

export default Posts