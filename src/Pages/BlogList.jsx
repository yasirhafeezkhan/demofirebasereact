import React, { useEffect, useState } from "react";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import { Link, useNavigate } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fxnshow = async () => {
      const getCollection = collection(db, "firebasedemo");
      const blogList = await getDocs(getCollection);
      setBlogs(blogList.docs.map((blog) => ({ ...blog.data(), id: blog.id })));
    };
    fxnshow();
  }, []);

  const deleteBlog = async (id) => {
    console.log("==id", id);
    await deleteDoc(doc(db, "firebasedemo", id))
      .then(() => {
        console.log("===deleted successfully");
      })
      .catch((error) => {
        console.log("===error===", error);
      });
  };
  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div className="blog-container" key={blog.id}>
            <div>
              <h3 className="blogTxtTitle">{blog.title}</h3>
              <p className="blogTxtBlog">{blog.blog}</p>
              <p className="blogTxtAuthor">{blog.author}</p>
              <div className="blog-buttons">
                <button className="btnBlogUpdate">
                  <Link className="updateLink" to={`/update/${blog.id}`}>
                    Update
                  </Link>
                </button>
                <button
                  className="btnBlogDelete"
                  onClick={() => deleteBlog(blog.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
