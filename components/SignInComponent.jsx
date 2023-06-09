import SocialComponents from "./SocialComponents";
import Form from "./Form";

function SignInComponent() {
  return (
    <div className="py-10 mt-11 w-2/4 text-center">
      <h2 className="text-3xl font-bold text-green-500 mb-2">
        Sign in to Account
      </h2>

      <SocialComponents />

      <p className="text-gray-300">or use your email account</p>

      <Form />
    </div>
  );
}

export default SignInComponent;
