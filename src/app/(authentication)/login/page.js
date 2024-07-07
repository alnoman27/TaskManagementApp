import LoginForm from "@/app/ui/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-3xl my-2">Log in to continue</h1>
      <LoginForm />
      <p className="mt-7">
        Don’t have an account? <Link className=" text-blue-500" href={"/register"}>Register Here</Link>
      </p>
    </div>
  );
}
