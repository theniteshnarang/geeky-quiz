import {Quiz} from './quiz.types'

export const quizOne : Quiz= {
    name : "Javascript",
    questions : [
        {
            id: 'Q01',
            question : "What is the output of the following: Number(\"12 3\"), parseInt(\"12 3\")?",
            options : [
            {
                text: "123, 123",
                isRight: false
            },
            {
                text: "12, 12",
                isRight: false
            },
            {
                text: "NaN, 12",
                isRight: true
            },
            {
                text: "12, NaN",
                isRight: false
            },
            ],
            points: 5,
            reason : ["Number() do the type conversion, whereas parseInt parses the value of input up to the first non-digit character"]
        },
        {
            id: 'Q02',
            question : "What is the output of the following: Boolean(\" \"), Boolean(\"0\")?",
            options : [
            {
                text: "false, false",
                isRight: false
            },
            {
                text: "true, true",
                isRight: true
            },
            {
                text: "false, true",
                isRight: false
            },
            {
                text: "true, false",
                isRight: false
            },
            ],
            points: 5,
            reason : ["Only values that are intuitively “empty”, like 0, \"\", null, undefined, and NaN, become false."]
        },
        {
            id: 'Q03',
            question : "What is the output of the following: typeof null, typeof Number('null')?",
            options : [
            {
                text: "null, object",
                isRight: false
            },
            {
                text: "object, object",
                isRight: false
            },
            {
                text: "undefined, number",
                isRight: false
            },
            {
                text: "object, number",
                isRight: true
            },
            ],
            points: 5,
            reason : ["object","That’s an officially recognized error in typeof behavior, coming from the early days of JavaScript and kept for compatibility.","Definitely, null is not an object. It is a special value with a separate type of its own."]
        },
        {
            id: 'Q04',
            question : "What is the output of the following: 3 ** 4, +'3 ** 4'?",
            options : [
            {
                text: "12, 12",
                isRight: false
            },
            {
                text: "81, NaN",
                isRight: true
            },
            {
                text: "12, NaN",
                isRight: false
            },
            {
                text: "81, 81",
                isRight: false
            },
            ],
            points: 5,
            reason : ["** is 'exponentiation operator' and + is 'unary plus operator'","3^4 = 81, +'string' // NaN"]
        },
        {
            id: 'Q05',
            question : "What is the output of the following: 2 + 2 + '1' , '1' + 2 + 2?",
            options : [
            {
                text: "'41', '122'",
                isRight: true
            },
            {
                text: "'5', '5'",
                isRight: false
            },
            {
                text: "5, 5",
                isRight: false
            },
            {
                text: "'5', 14",
                isRight: false
            },
            ],
            points: 5,
            reason : ["4 + '1' => '41' , '12' + 2 => '122'"]
        },
        {
            id: 'Q06',
            question : "What is the output of the following: +true , +\"\", +\"2\" + +\"3\"?",
            options : [
            {
                text: "1, 0, NaN",
                isRight: false
            },
            {
                text: "NaN, NaN , 5",
                isRight: false
            },
            {
                text: "1, 0, 5",
                isRight: true
            },
            {
                text: "1, NaN, 5",
                isRight: false
            },
            ],
            points: 5,
            reason : ["1, 0, 5", "The plus + exists in two forms: the binary and the unary form."]
        },
        {
            id: 'Q07',
            question : "What is the output of the following: a = (1 + 2, 3 + 4)?",
            options : [
            {
                text: "3",
                isRight: false
            },
            {
                text: "7",
                isRight: true
            },
            {
                text: "3,7",
                isRight: false
            },
            {
                text: "a=3",
                isRight: false
            },
            ],
            points: 5,
            reason : ["The comma operator allows us to evaluate several expressions by separating them. Each of them is evaluated but only the result of the last one is returned."]
        },
    ]
}