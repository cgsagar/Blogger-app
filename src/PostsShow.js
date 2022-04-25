import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


const PostsShow = (props) => {
    const { id } = props.match.params
    const [postData, setPostData] = useState({})
    const [userData, setUserData] = useState({})
    const [comments, setComments] = useState([])
    useEffect(() => {
        axios.get(`//jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                const result = res.data
                console.log(result)
                setPostData(result)
                axios.get(`//jsonplaceholder.typicode.com/users/${result.userId}`)
                    .then((res) => {
                        setUserData(res.data)
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])

    useEffect(() => {
        axios.get(`//jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((res) => {
                console.log(res.data)
                setComments(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])


    return (
        <div>
            <h2>USERNAME: {userData.name}</h2>
            <h2><b>TITLE : {postData.title}</b></h2>
            <p><b>BODY : {postData.body}</b></p>
            <hr />
            <p><b>COMMENTS</b></p>
            <ul>
                {
                    comments.map((comment) => {
                        return <li key={comment.id}>{comment.body}</li>
                    })
                }
            </ul>
            <hr />
            <p>
                <Link to={`/users/${userData.id}`}>More posts of author: {userData.name}</Link>
            </p>
        </div >
    )
}


export default PostsShow;