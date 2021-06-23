import {quizOne} from '../../data/getQuiz'
import { QuizCard } from './QuizCard'
export const Quiz = () => {
    console.log({quizOne})
    return (
        <div className="h-screen mt-4 flex flex-col">
            <h1 className="text-2xl font-bold">{quizOne?.name}</h1>
            <div className="h-full w-full flex justify-center items-center">
                {quizOne?.questions.slice(0,1).map(question => <QuizCard key={question.id} {...question}/>)}
            </div>
        </div>
    )
}
