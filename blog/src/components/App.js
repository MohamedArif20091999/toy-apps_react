import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions";
import "./postList.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const posts = useSelector((state) => state.posts);

  const renderPosts = posts.map((post) => {
    return (
      <div className="ui cards one wide column">
        <div key="post.title" class="card">
          <div className="content">
            <div className="header">User Name</div>
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
