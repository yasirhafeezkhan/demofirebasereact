import { createContext, useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  let errorMsg = "";
  const [user, setUser] = useState("");
  const auth = getAuth();
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("===signbed in===");
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        errorMsg = error.message;
      });
    if (!user) return errorMsg;
    else return true;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
