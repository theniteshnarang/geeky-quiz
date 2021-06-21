import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <header className="bg-green-200">
            <div className="container px-3 sm:px-0 xl:w-9/12 h-14 mx-auto flex justify-between items-center">
                <div className="header-brand">
                    <Link to="/" className="font-bold hover:text-pink-500 text-lg">Geeky<span className="text-pink-500 text-2xl">Quiz</span></Link>
                </div>
                <nav>
                    <ul className="flex gap-x-5">
                        <li><Link to="/profile" className="font-bold hover:text-pink-500">Profile</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}