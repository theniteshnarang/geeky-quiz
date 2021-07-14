import { QuizCard } from './QuizCard';
import {useState} from 'react'
import { useParams } from 'react-router';
import { quizOne, quizTwo, quizThree} from '../../data/getQuiz';
export const Quiz = () => {
    const [score, setScore] = useState(0)
    const {quizId} = useParams()
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    console.log({quizId, quizOne})
    let content
    switch(quizId){
        case 'quiz01': content = JSON.parse(JSON.stringify(quizOne)); break;
        case 'quiz02': content = JSON.parse(JSON.stringify(quizTwo)); break;
        case 'quiz03': content = JSON.parse(JSON.stringify(quizThree)); break;
        default: console.log("No quiz found", quizId)
    }

    return (
        <div className="h-screen mt-4 flex flex-col justify-around">
            <h1 className="text-2xl font-bold">{content?.name}</h1>
            <p className="text-right font-bold sm:text-lg lg:text-xl">Current Score: {score}</p>
            <div className="h-5/6 w-full flex justify-center items-center">
                {content && currentIndex === content.questions?.length ? 
                <div className="text-center text-4xl font-bold">
                    <h2>Finished</h2>
                    <p className="text-pink-500 mt-4">Total Score: {score}</p>
                </div> : 
                <QuizCard score={score} setScore={setScore} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} {...content.questions[currentIndex]}/>
                }
            </div>
        </div>
    )
}
