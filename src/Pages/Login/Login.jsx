import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Sharedpages/Header/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = ({children}) => {
  const {logInUser} = useContext(AuthContext);
  
  const navigate = useNavigate();
    const handleLoginForm = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        logInUser(email, password)
        .then(result => 
          console.log(result),
          navigate('/')
        )
        .catch((error) =>
        console.log(error)
        )
      
    
    }
    return (
        <div>
         <div>
         <Navbar></Navbar>

          <div className="card flex-shrink-0 mt-4 max-w-sm md:max-w-xl lg:h-[560px] lg:max-w-xl mx-auto shadow-2xl bg-base-100 rounded-t-lg">
          <h2 className="py-3 text-xllg:py-5 lg:text-3xl text-center text-gray-900 font-bold rounded-t-xl">Login Here</h2>
            <form onSubmit={handleLoginForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-sm lg:text-xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email.."
                  className="input input-bordered text-black text-sm"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-bold text-sm lg:text-xl">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password.."
                  className="input input-bordered text-black text-sm"
                  required
                />
                <label className="label mt-2">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-500 text-gray-900 ">Login</button>
              </div>
            </form>
            <button className='mb-1'>Login with <span className='text-gray-900'>Google</span></button>
            <p className="text-center pb-6">Do not have an account? <Link
            className="text-gray-900" to={'/register'}>Register here</Link></p>
          </div>
        </div>
        </div>
    );
};

export default Login;