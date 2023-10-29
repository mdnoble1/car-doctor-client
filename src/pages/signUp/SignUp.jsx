import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'


const SignUp = () => {


    const handleSignUp= e => {
        e.preventDefault();
        const form = e.target;
    
        const email = form.email.value;
        const password = form.password.value;
    
        console.log(email , password)
      }



  return (
    <div className="hero min-h-screen container mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="lg:w-1/2 shadow-2xl bg-base-100 py-20 px-6 rounded-lg">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-4xl font-bold text-[#444] text-center mb-12">
              Sign Up
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-lg text-[#444] mb-2">
                  Name
                </span>
              </label>
              <input
                type="email"
                name="name"
                placeholder="Your Name"
                className="input input-bordered mb-4"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-lg text-[#444] mb-2">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered mb-4"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-lg text-[#444] mb-2">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-7">
              <input
                className="btn bg-[#FF3811] font-semibold text-xl text-white hover:bg-orange-400"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-[#444] text-center mt-4">
            Already A Member ?{" "}
            <Link className="font-medium text-[#FF3811]" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
