import { QuizCard } from './QuizCard';
import {useState} from 'react'
import {quizOne} from '../../data/getQuiz'
export const Quiz = () => {
    const [score, setScore] = useState(0)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    
    return (
        <div className="h-screen mt-4 flex flex-col justify-around">
            <h1 className="text-2xl font-bold">{quizOne?.name}</h1>
            <p className="text-right font-bold sm:text-lg lg:text-xl">Current Score: {score}</p>
            <div className="h-5/6 w-full flex justify-center items-center">
                {currentIndex === quizOne.questions.length ? 
                <div className="text-center text-4xl font-bold">
                    <h2>Finished</h2>
                    <p className="text-pink-500 mt-4">Total Score: {score}</p>
                </div> : 
                <QuizCard score={score} setScore={setScore} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} {...quizOne.questions[currentIndex]}/>
                }
            </div>
        </div>
    )
}
