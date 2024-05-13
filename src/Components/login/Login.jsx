import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProviders";


const Login = () => {
    const navigate = useNavigate();
    const {singInUser} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singInUser(email, password)
        .then(result=>{
          console.log(result.user);
          navigate("/");
        })
        .catch(error =>{
          console.log(error);
        })

    }


  return (
    <div className="w-full h-screen bg-yellow-100 text-slate-950">
      <div className="pt-14">
        <h1 className="font-extrabold text-3xl text-center uppercase">
          Welcome to <span className="text-blue-600">Super Shop</span>
        </h1>
      </div>
      <div className="text-center">
        <h1 className="text-6xl font-bold font-poppins uppercase">
          <span className="text-green-500">Login</span> To Your{" "}
          <span className="text-yellow-500">Panel</span>
        </h1>
      </div>
      <div className="mt-16 w-4/12 mx-auto">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            className="flex items-center w-full rounded-2xl bg-slate-100 py-3 px-5 text-2xl placeholder:text-lg"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            className="flex items-center mt-10 w-full rounded-2xl bg-slate-100 py-3 px-5 text-2xl placeholder:text-lg"
            placeholder="password"
          />
          <div className="mt-10 flex justify-center items-center w-full">
            <input
              className="text-2xl font-extrabold bg-green-600 text-slate-100 py-2 rounded-xl duration-700 hover:bg-purple-600 hover:duration-700 hover:cursor-pointer w-full tracking-widest"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div className="w-10/12 mx-auto">
          <div className="mt-20 flex justify-between items-center">
            <h1 className="text-md text-slate-500 font-bold tracking-widest">
              New to Super Shop?
            </h1>
            <h1 className="text-xl text-slate-950 font-bold duration-700 hover:duration-700 hover:text-blue-700 hover:cursor-pointer">
              Create Account
            </h1>
          </div>
          <div className="mt-1 flex justify-center items-center">
            <button className="w-full py-2 bg-yellow-400 text-md text-slate-100 rounded-xl font-bold duration-700 hover:duration-700 hover:bg-yellow-700 hover:text-slate-900">
              Sign Up With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
