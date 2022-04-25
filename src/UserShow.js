import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const UserShow = (props) => {

    const [user, setUser] = useState({})
    const [postData, setPostData] = useState([])
    const { id } = props.match.params

    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //         .then((res) => {
    //             setUser(res.data)
    //         })
    //         .catch((err) => {
    //             alert(err.message)
    //         })
    // }, [id])

    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    //         .then((res) => {
    //             setPostData(res.data)
    //             //console.log(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err.message)
    //         })
    // }, [id])

    useEffect(() => {
        Promise.all([axios.get(`//jsonplaceholder.typicode.com/users/${id}`), axios.get(`//jsonplaceholder.typicode.com/posts?userId=${id}`)])
            .then((values) => {
                const [userResponse, postsResponse] = values
                setUser(userResponse.data)
                setPostData(postsResponse.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])



    return (
        <div>
            <h1>USER NAME: {user.name}</h1>
            <h2>Posts Written by</h2>
            <ul>
                {
                    postData.map((post) => {
                        return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default UserShow