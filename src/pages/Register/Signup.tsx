import { Register } from './Register'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
export const Signup = () => {
    const emailRef = useRef < HTMLInputElement > (null)
    const passwordRef = useRef < HTMLInputElement > (null)

    return (
        <Register>
            <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                Create a new account
            </div>
            <span className="justify-center text-center text-gray-500 flex-items-center dark:text-gray-400">
                Already have an account?
                <Link to="/login" className=" text-blue-500 underline hover:text-blue-700">
                    Log in
                </Link>
            </span>
            <div className="p-6 mt-4">
                <form action="#">
                    <div className="flex flex-col gap-y-4">
                        <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" name="Full name" placeholder="Full name" />

                        <input ref={emailRef} type="email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Email" />

                        <input ref={passwordRef} type="password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" name="Password" placeholder="Password" />

                        <input type="password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" name="Confirm Password" placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="py-2 px-4 mt-6  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Login
                    </button>
                </form>
            </div>
        </Register >
    )
}
