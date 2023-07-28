import React, { useState } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  const navigate = useNavigate();

  /**
   * タイトル、投稿のsetHogeのラップ関数
   * @param {*} e
   */
  const wrapSetTitle = (e) => {
    setTitle((title) => e.target.value);
  };
  const wrapSetPostText = (e) => {
    setPostText((postText) => e.target.value);
  };

  /**
   * firestoreで記事を投稿
   */
  const postContent = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });

    navigate("/");
  };

  return (
    <div className="create-post-page">
      <div className="post-container">
        <h1>記事を投稿する</h1>
        <div className="input-post">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={wrapSetTitle}
          />
        </div>
        <div className="input-post">
          <div>投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            onChange={wrapSetPostText}
          ></textarea>
        </div>
        <button className="post-button" onClick={postContent}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
