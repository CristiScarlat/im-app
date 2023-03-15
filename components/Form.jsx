import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

function Form() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 ">
        {" "}
        <FaRegEnvelope className="text-gray-400 m-2" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-gray-100 outline-none text-sm flex-1"
        />
      </div>
      <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 ">
        {" "}
        <MdLockOutline className="text-gray-400 m-2" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-gray-100 outline-none text-sm flex-1"
        />
      </div>

      <div className="flex justify-between w-64 mb-5 ">
        <label className="flex items-center text-xs">
          <input type="checkbox" name="remember" className="mr-1" /> Remember me
        </label>
        <a className="text-xs" href="#">
          Forgot Password?
        </a>
      </div>

      <button className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">
        Sign In
      </button>
    </div>
  );
}

export default Form;
