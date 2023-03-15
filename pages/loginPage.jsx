import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import SocialComponents from "@/components/SocialComponents";
import Form from "@/components/Form";
import Logo from "@/components/Logo";
import SignInComponent from "@/components/SignInComponent";
import SignUpComponent from "@/components/SignUpComponent";

export const loginPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20  text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <Logo />
          </div>

          <SignInComponent />
          <SignUpComponent />
        </div>
      </div>
    </>
  );
};

export default loginPage;
