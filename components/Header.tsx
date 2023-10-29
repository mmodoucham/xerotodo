import React from "react";
import Image from "next/image";
const Header = () => {
    const logOut = () => {};
    return (
        <div className="flex flex-row justify-between pt-20">
            <div className="font-bold text-2xl">
                XERO<span className="text-primary">TO-DO</span>
            </div>
            <button className="flex flex-row items-center" onClick={logOut}>
                <Image src="/icons/logout.svg" alt="profile" width={30} height={30} />
                Guest
            </button>
        </div>
        );
};

export default Header;
