import {useState, useEffect } from 'react'
import { Question } from '../../data/quiz.types'
export type QuizCardProps = Question & {
    score : number,
    currentIndex:number,
    setScore: any,
    setCurrentIndex : any
}
export const QuizCard = ({options, points, question, reason, id, setCurrentIndex, currentIndex, score, setScore}: QuizCardProps) => {
    const [solution, setSolution] = useState(false)
    const [currentOption, setCurrentOption] = useState<number>(-1)
    
    function checkSolution(isRight:boolean, index:number){
        setCurrentOption(index)
        if(isRight){
            setScore(score + points)
        }
    }

    const toggleSolution = () => {
        return setSolution(solution => !solution)
    }

    useEffect(()=>{
        setSolution(false)
        setCurrentOption(-1)
    },[currentIndex])

    return (
        <div className="w-full h-full sm:h-5/6 lg:h-2/3 mb-4 rounded shadow-lg bg-green-200 flex flex-col justify-evenly text-lg">
            <h1 className="lg:text-xl font-bold pl-4">Question {id.match(/[0-9]/g)}. {question}</h1>
            <p className="text-right mr-4 font-bold">Points: {points}</p>
            {
                solution ? (
                    <ul className="pl-4 text-sm mr-1 sm:text-base md:text-lg">
                        <li key={0} className="font-bold mb-1">
                            <span className="text-pink-500">Solution:</span>
                            {reason[0]}
                        </li>
                        {reason.slice(1).map((item, index) => <li key={index} className="mb-1">{item}</li>)}
                    </ul> 
                ): (
                    <ul className="flex flex-wrap justify-center lg:justify-evenly">
                        {options.map((option,index)=>
                        <li key={index}
                            onClick={(e)=> currentOption>=0 || checkSolution(option.isRight,index)}
                            className={`hover:bg-green-300 w-96 cursor-pointer p-4
                            ${currentOption >= 0 && option.isRight && "bg-green-400"}
                            ${currentOption===index && !option.isRight && "bg-red-400"}
                            `}>
                            <strong onClick={(e)=>e.stopPropagation()}>0{index+1}.</strong> {option.text}
                        </li>)
                        }
                    </ul>
                )
            }
            <div className="flex justify-center gap-4 flex-wrap">
                {solution || <button
                    className="btn btn-green self-center w-10/12 max-w-xs"
                    onClick={()=>{
                        setCurrentIndex(currentIndex+1)
                    }}
                >
                    Next
                </button>}
                { currentOption>=0 && <button onClick={toggleSolution} className="btn border border-gray-600 self-center w-10/12 max-w-xs hover:bg-pink-500 hover:text-white">
                    {solution ? "Hide Solution" : "Show Solution"}
                </button>}    
            </div>       
        </div>
    )
}
