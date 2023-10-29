import { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { User as FirebaseUser } from "firebase/auth";
const useAuth = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user && user.uid ? true : false);
      setUser(user);
    });
  });
  return { user, isLoggedIn };
};

export default useAuth;
