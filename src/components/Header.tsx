import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <header className="bg-green-200">
            <div className="h-14 sm:w-9/12 mx-auto px-3 sm:px-0 flex justify-between items-center">
                <div className="header-brand">
                    <Link to="/" className="font-bold hover:text-pink-500 text-lg">Geeky<span className="text-pink-500 text-2xl hover:text-gray-600">Quiz</span></Link>
                </div>
                <nav>
                    <ul className="flex gap-x-5">
                        <li><Link to="/login" className="font-bold hover:text-pink-500">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}