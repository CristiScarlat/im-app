import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,

} from "react-icons/fa";


function SocialComponents() {
  return (
    <>
      <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
      <div className="flex justify-center my-2 ">
        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
          <FaFacebookF className="text-sm" />
        </a>
        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
          <FaLinkedinIn className="text-sm" />
        </a>
        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
          <FaGoogle className="text-sm" />
        </a>
      </div>
    </>
  );
}

export default SocialComponents;
