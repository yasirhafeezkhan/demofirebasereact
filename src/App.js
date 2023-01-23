import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBlog from "./Pages/CreateBlog";
import Login from "./Pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import BlogList from "./Pages/BlogList";
import UpdateBlog from "./Pages/UpdateBlog";
function App() {
  const [isAuth, setAuth] = useState(false);

  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setAuth(false);
    });
  };

  return (
    <div className="App">
      <Router>
        <nav>
          {isAuth && (
            <Link className="links" to="/">
              Home
            </Link>
          )}
          {isAuth && (
            <Link className="links" to="/create">
              Create
            </Link>
          )}
          {isAuth && (
            <Link className="links" to="/view">
              Blogs
            </Link>
          )}
          {!isAuth ? (
            <Link className="links" to="/login">
              Login
            </Link>
          ) : (
            <button onClick={logout}>Logout</button>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home setAuth={setAuth} />} />
          <Route path="/create" element={<CreateBlog setAuth={setAuth} />} />
          <Route path="/view" element={<BlogList setAuth={setAuth} />} />
          <Route
            path="/update/:id"
            element={<UpdateBlog setAuth={setAuth} />}
          />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
