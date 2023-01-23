import { addDoc, collection } from "firebase/firestore";
import React, { useRef } from "react";
import { db } from "../firebase-config";

export default function CreateBlog() {
  const titleTxt = useRef();
  const blogTxt = useRef();
  const authorTxt = useRef();
  const postCollection = collection(db, "firebasedemo");

  const submitBlog = async (e) => {
    e.preventDefault();
    const title = titleTxt.current.value;
    const blog = blogTxt.current.value;
    const author = authorTxt.current.value;
    await addDoc(postCollection, { title, blog, author })
      .then(() => {
        console.log("====Added successfully===");
      })
      .catch((error) => {
        console.log("===error===", error);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={submitBlog}>
        <div className="formGroup">
          <div>
            <label>Title</label>
          </div>
          <div>
            <input type="text" className="inputs" ref={titleTxt} />
          </div>
        </div>
        <div className="formGroup">
          <div>
            <label>Blog</label>
          </div>
          <div>
            <textarea
              cols="20"
              rows="5"
              className="inputs"
              ref={blogTxt}
            ></textarea>
          </div>
        </div>
        <div className="formGroup">
          <div>
            <label>Author</label>
          </div>
          <div>
            <select className="inputs" ref={authorTxt}>
              <option>Select</option>
              <option>Yasir khan</option>
              <option>Habil Naqati</option>
              <option>Ehsaan Qazi</option>
            </select>
          </div>
        </div>
        <div className="formGroup">
          <input type="submit" className="btnAdd" value="add" />
        </div>
      </form>
    </div>
  );
}
