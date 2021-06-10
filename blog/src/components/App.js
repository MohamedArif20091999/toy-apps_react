import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, fetchPostsAndUsers, fetchUser } from "../actions";
import "./postList.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAndUsers());
    dispatch(fetchUser());
  }, []);

  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  console.log(users);

  const renderPosts = posts.map((post) => {
    return (
      <div className="ui cards one wide column">
        <div key="post.title" className="card">
          <div className="content">
            <div className="header">
              {users.find((user) => post.userId == user.id).name}
            </div>
            <div className="description">{post.body}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="main ui grid">
      <h1 className="post_heading">
        An overkill application with redux,thunk etc...
      </h1>
      <div>{renderPosts}</div>
    </div>
  );
};

export default App;
