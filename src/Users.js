import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = (props) => {

    const [ulist, setUlist] = useState([])

    useEffect(() => {
        axios.get('//jsonplaceholder.typicode.com/users/')
            .then((res) => {
                const result = res.data;
                setUlist(result)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    return (
        <div>
            <h2>USERS LIST - {ulist.length}</h2>
            <ul>
                {
                    ulist.map((ele) => {
                        return <li key={ele.id}><Link to={`/users/${ele.id}`}>{ele.name}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Users