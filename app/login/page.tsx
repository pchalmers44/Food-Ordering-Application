import React from 'react'
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="p-4 py-8 min-h-[calc(100dvh-3rem)] md:min-h-[calc(100dvh-6rem)] flex items-center justify-center">
      {/* BOX */}
      <div className="w-full max-w-5xl shadow-2xl rounded-md flex flex-col md:flex-row overflow-hidden">
        {/* IMAGE CONTAINER */}
        <div className="relative h-56 w-full md:h-auto md:w-1/2 min-h-60">
          <Image src="/loginBg.png" alt="" fill className="object-cover"/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-6 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
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
          <p className="text-sm">
            Have a problem?<Link className="underline" href="/"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
