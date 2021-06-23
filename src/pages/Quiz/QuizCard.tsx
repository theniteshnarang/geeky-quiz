import { Question } from "../../data/quiz.types"
export const QuizCard = ({options, points, question, reason, id} : Question) => {
    return (
        <div className="w-full h-3/4 lg:h-3/5 xl:h-3/6 mb-16 rounded shadow-lg bg-green-200 flex flex-col justify-evenly text-lg">
            <h1 className="lg:text-xl font-bold pl-4">Question {id.match(/[0-9]/g)}: {question}</h1>
            <ul className="flex flex-wrap gap-4">
            {options.map((option,index)=> <li key={index} className="w-96 cursor-pointer hover:bg-green-300 p-4"><strong>Option {index+1}:</strong> {option.text}</li>)}
            </ul>
        </div>
    )
}
