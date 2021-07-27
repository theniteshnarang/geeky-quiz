import { Register } from './Register'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
export const Login = () => {
    const emailRef = useRef < HTMLInputElement > (null)
    const passwordRef = useRef < HTMLInputElement > (null)

    return (
        <Register>
            <div className="self-center mb-2 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                Login To Your Account
            </div>
            <div className="mt-8">
                <form action="#" autoComplete="off">
                    <div className="flex flex-col gap-y-4">
                        <input ref={emailRef} type="email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your email" />
                        <input ref={passwordRef} type="password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your password" />
                        <button type="submit" className="py-2 px-4 text-white bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Link to="/sign-up" className="inline-flex items-center font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                    <span className="ml-2">
                        You don&#x27;t have an account?
                    </span>
                </Link>
            </div>
        </Register>
    )
}
