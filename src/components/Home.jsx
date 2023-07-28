import React, { useEffect, useState } from "react";
import "./Home.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getDocs(collection(db, "posts"));
      console.log(posts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(posts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);
  return (
    <div className="home-page">
      {postList.map((post) => {
        return (
          <div className="post-contents" key={post.id}>
            <div className="post-header">
              <h1>{post.title}</h1>
            </div>
            <div className="post-text-container">{post.postsText}</div>
            <div className="name-and-delete-button">
              <h3>@{post.author.username}</h3>
              <button>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
