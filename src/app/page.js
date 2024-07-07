import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <p className="text-center text-black-400 mt-10 hidden lg:block">
        Boost your team's productivity with Texon Intelligence (AI) features 🤖
        now accessible to all Premium and Enterprise users!{" "}
        <span className="underline cursor-pointer text-blue-400">
          Learn more
        </span>
        .
      </p>
      {/* get info  */}
      <div className="flex flex-col justify-center mt-10 items-center">
        <div className="space-y-5 text-center">
          <h1 className="lg:text-5xl font-bold md:text-3xl text-2xl ">
            Finally, get your work <br /> and life organized.
          </h1>
          <p className="text-xl text-[#25221ea8]">
            Make life easier for you and your team with the world's top task{" "}
            <br />
            manager and to-do list app.
          </p>
          <div>
            <Link
              href={"/register"}
              className="bg-blue-500 hover:bg-blue-400  text-white p-2 rounded"
            >
              Join for free
            </Link>
            <button className="ms-5 p-2 rounded">
              <Link
                target="_blank"
                href={"https://www.youtube.com/"}
                className="flex items-center border p-2 rounded hover:bg-blue-500 hover:text-white"
              >
                <span>Watch video </span>
                <FaRegCirclePlay className="ms-2" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
