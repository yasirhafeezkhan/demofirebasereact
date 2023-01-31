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
import { AuthProvider } from "./Pages/AuthLogin";
import AuthRequire from "./Pages/AuthRequire";

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
      <AuthProvider>
        <Router>
          <nav>
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/create">
              Create
            </Link>
            <Link className="links" to="/view">
              Blogs
            </Link>
            {!isAuth ? (
              <Link className="links" to="/login">
                Login
              </Link>
            ) : (
              <button onClick={logout}>Logout</button>
            )}
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <AuthRequire>
                  <Home setAuth={setAuth} />
                </AuthRequire>
              }
            />
            <Route
              path="/create"
              element={
                <AuthRequire>
                  <CreateBlog setAuth={setAuth} />
                </AuthRequire>
              }
            />
            <Route
              path="/view"
              element={
                <AuthRequire>
                  <BlogList setAuth={setAuth} />
                </AuthRequire>
              }
            />
            <Route
              path="/update/:id"
              element={
                <AuthRequire>
                  <UpdateBlog setAuth={setAuth} />
                </AuthRequire>
              }
            />
            <Route path="/login" element={<Login setAuth={setAuth} />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
