"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const SigninPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignin = async (formData) => {
    console.log(formData);
    const {name, email, password, photoUrl} = formData;
    // Handle signin logic here
    const {data, error} = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoUrl,
      callbackUrl: "/login"
    });
    if(error){
      alert(error.message);
    }
    if(data){
      alert("Sign up successful! Please check your email to verify your account.");
    }
    console.log("Sign up response:", data, error);
  };
  return (
    <div className=" pt-10 container mx-auto min-h-[80vh] bg-slate-100 flex justify-center items-center">
      <div className="p-8 rounded-lg bg-white w-full max-w-md shadow-lg">
        <h2 className="font-bold text-2xl text-center mb-4">
          Register your account
        </h2>
        <div className="divider"></div>
        <div className="card w-full">
          <div className="card-body p-0">
            <form onSubmit={handleSubmit(handleSignin)}>
              <fieldset className="fieldset">
                <label className="label">Your Name</label>
                <input
                  {...register("name", {
                    required: { value: true, message: "Name is required" },
                  })}
                  type="text"
                  className="input w-full"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}

                <label className="label">Photo URL</label>
                <input
                  {...register("photoUrl", {
                    required: { value: true, message: "Photo URL is required" },
                  })}
                  type="text"
                  className="input w-full"
                  placeholder="Photo URL"
                />
                {errors.photoUrl && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.photoUrl.message}
                  </p>
                )}

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
                 
                  <label className="label">
                    <input {...register("terms", {
                      required: { value: true, message: "You must accept the terms and conditions" },
                    })}
                      type="checkbox"
                      
                      className="checkbox"
                    />
                  Accept terms and conditions
                  </label>
                    {errors.terms && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.terms.message}
                  </p>
                )}
                </div>

                <button className="btn btn-neutral mt-4 w-full">Register</button>

                <p className="text-center mt-3 text-sm">
                  Do you have an account?{" "}
                  <Link href="/login">
                    <span className="text-blue-500 link link-hover">Login</span>
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

export default SigninPage;
