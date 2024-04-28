import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen bg-yellow-100 text-slate-950">
      <div className="pt-20">
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
      <div className="mt-10 w-6/12 mx-auto">
        <form action="">
          <input
            type="text"
            name="username"
            className="flex items-center w-full rounded-lg bg-slate-100 py-3 px-5 text-2xl placeholder:text-lg"
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            className="flex items-center mt-10 w-full rounded-lg bg-slate-100 py-3 px-5 text-2xl placeholder:text-lg"
            placeholder="password"
          />
          <div className="mt-10">
            <input className=" " type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
