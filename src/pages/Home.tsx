const Card = () => {
    return (
    <div className="w-52 h-full rounded shadow-lg bg-green-200 flex flex-col justify-around">
        <div className="font-bold text-xl text-center my-2">The Coldest Sunset</div>
        <img src="https://via.placeholder.com/150" className="w-full" alt="quiz"/>
        <button className="btn btn-green py-1 m-3">Play Now</button>
    </div>
    )
}

export const Home = () => {
    return (
        <div className="Home w-9/12 content-area mx-auto flex flex-col gap-y-8 md:gap-y-16">
            <h1 className="text-3xl font-bold text-green-700 mt-4">Quizzes</h1>
            <div className="flex flex-wrap justify-around items-center h-2/4 gap-y-4">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
