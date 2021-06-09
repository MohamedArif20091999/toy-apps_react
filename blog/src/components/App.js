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
      <React.Fragment key={post.title}>
        <div className="card">{post.title}</div>
        <div className="content">{post.content}</div>
      </React.Fragment>
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
