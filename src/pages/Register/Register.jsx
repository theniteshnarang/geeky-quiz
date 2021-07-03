export const Register = ({ children }) => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col w-full max-w-md px-4 py-8 bg-green-200 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                {children}
            </div>
        </div>
    )
}
