import React from "react";

import Logo from "@/components/Logo";
import SignInComponent from "@/components/SignInComponent";
import SignUpComponent from "@/components/SignUpComponent";

export const loginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-2xl shadow-2xl flex">
          {/* <Logo /> */}
          <SignInComponent />
          <SignUpComponent />
        </div>
    </div>
  );
};

export default loginPage;
