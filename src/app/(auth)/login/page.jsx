"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";


const LoginPage = () => {
  const [showPass, setShowPass] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = async (formData) => {
    console.log(formData);
    const { email, password, rememberMe } = formData;
    // Handle login logic here
    const { data, error } = await authClient.signIn.email({
    email: email,
    password: password,
    rememberMe:true,
    callbackURL:"/"
});
if (error) {
  alert(error.message);
}
if (data) {
  alert("Login successful!");
}
  

  };
  return (
    <div className="container mx-auto min-h-[80vh] bg-slate-100 flex justify-center items-center">
      <div className="p-8 rounded-lg bg-white w-full max-w-md shadow-lg">
        <h2 className="font-bold text-2xl text-center mb-4">
          Please login your account
        </h2>
        <div className="card w-full">
          <div className="card-body p-0">
            <form onSubmit={handleSubmit(handleLogin)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                  })}
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
                <label className="label mt-2">Password</label>
             <div className="relative w-full">
                  <input
                    {...register("password", {
                      required: { value: true, message: "Password is required" },
                    })}
                    type={showPass ? "text" : "password"}
                    className="input w-full pr-10"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl focus:outline-none"
                  >
                    {showPass ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}

                <div className="flex justify-between items-center mt-2">

                  <div className="mt-1">
                  <a className="link link-hover text-sm">Forgot password?</a>
                </div>
                <div>
                  <label className="label">
                    <input
                      {...register("rememberMe")}
                      type="checkbox"
                      className="checkbox"
                    />
                    <span className="label-text ml-2">Remember me</span>
                  </label>
                </div>

                </div>

                <button className="btn btn-neutral mt-4 w-full">Login</button>

                <p className="text-center mt-3 text-sm">
                  Do not have an account?{" "}
                  <Link href="/signin">
                    <span className="text-blue-500 link link-hover">
                      Register
                    </span>
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
