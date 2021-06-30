import {useState, useEffect, useRef } from 'react'
import { Question } from '../../data/quiz.types'
export type QuizCardProps = Question & {
    score : number,
    currentIndex:number,
    setScore: any,
    setCurrentIndex : any
}
export const QuizCard = ({options, points, question, reason, id, setCurrentIndex, currentIndex, score, setScore}: QuizCardProps) => {
    const [solution, setSolution] = useState(false)
    const [isOptionSelected, setIsOptionSelected] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const optionEl = useRef<any>(null)
    function checkSolution(e:any,isRight:boolean){
        setIsOptionSelected(true)
        if(isRight){
            setIsCorrect(true)
            e.target.classList.add('bg-green-400')
            setScore(score + points)
        }else {
            e.target.classList.add('bg-red-400')
            setIsCorrect(false)
        }
        optionEl.current = e.target   
    }

    const toggleSolution = () => {
        return setSolution(solution => !solution)
    }

    useEffect(()=>{
        setIsOptionSelected(false)
        setSolution(false)
        setIsCorrect(false)
        
        return optionEl.current.classList.remove(`${isCorrect?"bg-green-400":"bg-red-400"}`) //eslint-disable-next-line react-hooks/exhaustive-deps
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
                            ref={optionEl}
                            onClick={(e)=>checkSolution(e,option.isRight)}
                            className={`w-96 cursor-pointer hover:bg-green-300 p-4`}>
                            <strong onClick={(e)=>e.stopPropagation()}>0{index+1}.</strong> {option.text}
                        </li>)
                        }
                    </ul>
                )
            }
            <div className="flex justify-center gap-4 flex-wrap">
                <button
                    className="btn btn-green self-center w-10/12 max-w-xs"
                    onClick={()=>{
                        setCurrentIndex(currentIndex+1)
                    }}
                >
                    Next
                </button>
                { isOptionSelected && <button onClick={toggleSolution} className="btn border border-gray-600 self-center w-10/12 max-w-xs hover:bg-pink-500 hover:text-white">
                    {solution ? "Hide Solution" : "Show Solution"}
                </button>}    
            </div>       
        </div>
    )
}
