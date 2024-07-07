import SocialLogin from "./SocialLogin";

export default function RegistrationForm() {
  return (
    <>
      <form className="card-body w-2/4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered rounded"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered rounded"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered rounded"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-500 text-white hover:bg-blue-400 rounded">
            Register
          </button>
        </div>
      </form>
      <SocialLogin />
    </>
  );
}
