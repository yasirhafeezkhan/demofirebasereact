import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";

export default function Login({ setAuth }) {
  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("authorization", true);
      setAuth(true);
    });
  };
  return (
    <div>
      <button onClick={signIn}>Sign in With Google</button>
    </div>
  );
}
