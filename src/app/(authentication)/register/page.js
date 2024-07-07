import RegistrationForm from "@/app/ui/RegistrationForm";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-3xl my-2">Create an account</h1>
      <RegistrationForm />

      <p className="mt-7">
        Already have an account?{" "}
        <Link className=" text-blue-500" href={"/login"}>
          Login Here
        </Link>
      </p>
    </div>
  );
}
