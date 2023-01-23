import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";

export default function UpdateBlog() {
  // const [blogData, setBlogData] = useState("");

  const txtTitle = useRef();
  const txtBlog = useRef();
  const txtAuthor = useRef();

  const { id } = useParams();

  // useEffect(() => {
  //   console.log("===hittig updae");
  //   const fxnshow = async () => {
  //     await getDoc(doc(db, "firebasedemo", id)).then((doc) => {
  //       setBlogData(doc.data());
  //     });
  //   };
  //   fxnshow();
  // }, [id]);

  const updateBlogData = async () => {
    const title = txtTitle.current.value;
    const blog = txtBlog.current.value;
    const author = txtAuthor.current.value;

    await updateDoc(doc(db, "firebasedemo", id), { title, blog, author })
      .then(() => {
        console.log("====Updated successfully===");
      })
      .catch((error) => {
        console.log("===error===", error);
      });
  };

  return (
    <div className="form-container">
      <div>
        <div className="formGroup">
          <div>
            <label>Title</label>
          </div>
          <div>
            <input
              type="text"
              className="inputs"
              ref={txtTitle}
              // value={blogData.title}
              // onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="formGroup">
          <div>
            <label>Blog</label>
          </div>
          <div>
            <textarea
              // value={blogData.blog}
              //onChange={(e) => setBlog(e.target.value)}
              ref={txtBlog}
              cols="20"
              rows="5"
              className="inputs"
            ></textarea>
          </div>
        </div>
        <div className="formGroup">
          <div>
            <label>Author</label>
          </div>
          <div>
            <select
              ref={txtAuthor}
              // value={blogData.author}
              className="inputs"
              // onChange={(e) => setAuthor(e.target.value)}
            >
              <option>Select</option>
              <option>Yasir khan</option>
              <option>Habil Naqati</option>
              <option>Ehsaan Qazi</option>
            </select>
          </div>
        </div>
        <div className="formGroup">
          <button onClick={updateBlogData} className="btnAdd">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
