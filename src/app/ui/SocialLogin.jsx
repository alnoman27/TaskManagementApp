import Image from "next/image";
import googleLogo from "../../../assets/gogle.svg";
import { handleSocialLogin } from "../actions";
export default function SocialLogin() {
  return (
    <div>
      <h1 className="text-center text-[#25221ea8]">or continue with:</h1>
      <form action={handleSocialLogin}>
        <button
          type="submit"
          name="action"
          value="google"
          className="flex items-center border p-2 mt-7 rounded hover:bg-gray-100 cursor-pointer"
        >
          <Image src={googleLogo} alt="google logo" width={20}></Image>
          <p className="ml-2"> Continue with Google</p>
        </button>
      </form>
    </div>
  );
}
