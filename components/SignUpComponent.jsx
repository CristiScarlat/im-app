import SignUpForm from "./signUpForm";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
import { useAuthState } from "./context/auth";
import SignUpFormEx from "./signUpFormEx";

function SignUpComponent() {
  const { isAuthenticated } = useAuthState();
  // const router = useRouter();
  console.log(isAuthenticated);

  // useEffect(() => {
  //   if (isAuthenticated) router.push("/");
  // }, [isAuthenticated]);

  return (
    <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
      <h2 className="3xl font-bold mb-2">Hello, Friend!</h2>
      <div className="border-2 w-10 border-white inline-block mb-2"></div>
      <p className="mb-10">
        Fill up personal information and start journey with us.
      </p>
      <button className="border-2 border-white rounded-full px-12 mb-9 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
        Sign Up
      </button>
      {/* <SignUpForm  /> */}
      <SignUpFormEx />
    </div>
  );
}

export default SignUpComponent;
