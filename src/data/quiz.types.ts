export type Option = {
    text : string,
    isRight : boolean
}

export type Question = {
    id: string,
    question : string,
    options: Option[],
    points: number,
    reason : string[]
}

export type Quiz = {
    name : string,
    questions : Question[],
    image: string,
    id:string
}
