import React from "react";
import { Link, Route } from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import UserShow from "./UserShow"
import PostsShow from "./PostsShow";

const App = (props) => {
    return (
        <div>
            <span><Link to="/">Home</Link></span> |
            <span><Link to="/users">Users</Link></span> |
            <span><Link to="/posts">Posts</Link></span>


            <Route path="/users" component={Users} exact={true} />
            <Route path="/posts" component={Posts} exact={true} />
            <Route path="/posts/:id" component={PostsShow} />
            <Route path="/users/:id" component={UserShow} />

        </div>
    )
}

export default App