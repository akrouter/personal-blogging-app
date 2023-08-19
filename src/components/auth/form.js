import Link from "next/link";
import { useRef } from "react";

export default function Form({ signin, onFormSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const onSubmitHandler = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    e.preventDefault();
    onFormSubmit(email, password);
  }
  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-10 py-5 lg:px-8 ">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-700 mx-7 ">
            {signin ? "Login" : "Signup"}
          </h2>
        <div className="my-20 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-100 p-10 rounded-2xl shadow-md">
          <form className="space-y-6" onSubmit={onSubmitHandler}>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#9747ff] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href={signin ? "/auth/signup" : "/auth/login"}
                  className="font-semibold text-[#9747ff] hover:text-[#ae72fc]"
                >
                  {signin
                    ? "Do not have an account? Signup"
                    : "Already have an account? Sign in"}
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="flex w-59 justify-center rounded-md bg-[#9747ff] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ae72fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {signin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
