import React from "react";
import Image from "next/image";
import { auth } from "@/firebase";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const { isLoggedIn, user } = useAuth();
  const logOut = () => {
    auth.signOut();
    router.push("/");
  };
  return (
    <div className="flex flex-row justify-between pt-20">
      <div className="font-bold text-2xl">
        XERO<span className="text-primary">TO-DO</span>
      </div>
      <button className="flex flex-row items-center" onClick={logOut}>
        <Image src="/icons/logout.svg" alt="profile" width={30} height={30} />
        {user?.displayName}
      </button>
    </div>
  );
};

export default Header;
