import Image from "next/image";
import pic from "../public/Logo-Cristi.png";

function Logo() {
  return (
    <div className="w-3/5 p-5">
      <Image
        src={pic}
        alt="Picture of the author"
        // width="350"
        // height="300"
      />
    </div>
  );
}

export default Logo;
