"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    // Handle login logic here
  

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
                <input
                  {...register("password", {
                    required: { value: true, message: "Password is required" },
                  })}
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}

                <div className="mt-1">
                  <a className="link link-hover text-sm">Forgot password?</a>
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
