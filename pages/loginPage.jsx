import React from "react";

import Logo from "@/components/Logo";
import SignInComponent from "@/components/SignInComponent";
import SignUpComponent from "@/components/SignUpComponent";

export const loginPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20  text-center mt-12">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <Logo />
          <SignInComponent />
          <SignUpComponent />
        </div>
      </div>
    </>
  );
};

export default loginPage;
