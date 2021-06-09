import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const posts = useSelector((state) => state.posts);

  const renderPosts = posts.map((post) => {
    return (
      <div className="ui cards">
        <div key="post.title" class="card">
          <div class="content">
            <div class="header">User Name</div>
            <div class="description">{post.body}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className="post_heading">Posts</h1>
      <div>{renderPosts}</div>
    </div>
  );
};

export default App;
