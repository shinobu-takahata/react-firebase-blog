import React, { useEffect, useState } from "react";
import "./Home.css";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";

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

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  const deleteButtonComponent = (post) => {
    return <button onClick={() => handleDelete(post.id)}>削除</button>;
  };

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
              <h3 className="user-name">@{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid ? (
                deleteButtonComponent(post)
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
