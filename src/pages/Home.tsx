import { Link } from "react-router-dom"
const Card = () => {
    return (
    <div className="w-60 sm:w-56 md:w-52 h-full rounded shadow-lg bg-green-200 flex flex-col justify-around text-center">
        <div className="font-bold text-lg my-2">Javascript</div>
        <img src="https://via.placeholder.com/150" className="w-full" alt="quiz"/>
        <Link to="/quiz" className="btn btn-green py-1 m-3">Play Now</Link>
    </div>
    )
}

export const Home = () => {
    return (
        <div className="Home md2:h-screen flex flex-col gap-y-8 md2:gap-y-16">
            <h1 className="text-3xl font-bold text-green-700 mt-4">Quizzes</h1>
            <div className="flex flex-wrap justify-around items-center h-2/4 gap-y-4">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
