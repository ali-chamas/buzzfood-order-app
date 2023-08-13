import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)] flex items-center justify-center my-5">
      {/* BOX */}
      <div className="  shadow-2xl rounded-md flex flex-col md:flex-row  md:h-[90%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-full hidden w-full md:h-full md:w-1/2 md:block ">
          <Image src="/loginBg.png" alt="" fill className="object-cover"/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2  ">
          <h1 className="font-bold text-xl xl:text-3xl text-yellow-600">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm ">
            Have a problem?<Link className="underline" href="/"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;