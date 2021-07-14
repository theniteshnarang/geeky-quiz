import {Quiz} from './quiz.types'

export const quizOne : Quiz= {
    id:'quiz01',
    name : "Javascript",
    image:"https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5f2acf6c8e20645d704f580f_nodejs-logo.png",
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
            reason : ["Number() do the type conversion, whereas parseInt parses the value of input up to the first non-digit character."]
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
            reason : ["Object","That’s an officially recognized error in typeof behavior, coming from the early days of JavaScript and kept for compatibility.","Definitely, null is not an object. It is a special value with a separate type of its own."]
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
            reason : ["** is 'exponentiation operator' and + is 'unary plus operator'","3^4 = 81, +'string' // NaN."]
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
            reason : ["4 + '1' => '41' , '12' + 2 => '122'."]
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

export const quizTwo: Quiz = {
    id:'quiz02',
    name: "Javascript & CSS",
    image:"https://www.drupal.org/files/project-images/minify-css-javascript.png",
    questions: [
        {
            id: "Q01",
            question: "In JavaScript, which method returns a new array based on the results of running a specified action on each element in the original array?",
            options: [
                {
                    text: "map",
                    isRight: true
                },
                {
                    text: "reduce",
                    isRight: false
                },
                {
                    text: "forEach",
                    isRight: false
                },
                {
                    text: "transform",
                    isRight: false
                }
            ],
            points: 5,
            reason: ["The map() method creates a new array populated with the results of calling a provided function on every element in the calling array."]
        },

        {
            id: "Q02",
            question: "In CSS, what is the order of the box model from the inside out?",
            options: [

                {
                    text: "Content, Border, Padding, Margin",
                    isRight: false
                },
                {
                    text: "Content, Padding, Border, Margin",
                    isRight: true
                },
                {
                    text: "Padding, Content, Border, Margin",
                    isRight: false
                },
                {
                    text: "Content, Margin, Border, Padding",
                    isRight: false
                }
            ],
            points: 5,
            reason: ["Content, Padding, Border, Margin is the correct order"]
        },

        {
            id: "Q03",
            question: "Which of the following is not a type in JavaScript?",
            options: [

                {
                    text: "number",
                    isRight: false
                },
                {
                    text: "integer",
                    isRight: true
                },
                {
                    text: "string",
                    isRight: false
                },
                {
                    text: "boolean",
                    isRight: false
                }
            ],
            points: 5,
            reason: ["Javascript has dynamic typing, it doesn't need to have static typing like most of general purpose programming language."]
        },


        {
            id: "Q04",
            question: "Which unit in CSS is based on the size of the screen width.",
            options: [
                {
                    text: "vw",
                    isRight: true
                },
                {
                    text: "%",
                    isRight: false
                },
                {
                    text: "vx",
                    isRight: false
                },
                {
                    text: "sw",
                    isRight: false
                }
            ],
            points: 5,
            reason: ["vw stands for viewpost width. It means hundredths of the viewport width"]
        },


        {
            id: "Q05",
            question: "In Node.js, how do you import a module using CommonJS.",
            options: [

                {
                    text: "const t = include('f')",
                    isRight: false
                },
                {
                    text: "import t from 'f'",
                    isRight: false
                },
                {
                    text: "const t = require('f')",
                    isRight: true
                },
                {
                    text: "const t = import('f')",
                    isRight: false
                }
            ],
            points: 5,
            reason: ["It is the correct syntax for the CommonJS, while others are falsy values or es6 module"]
        },

        {
            id: "Q06",
            question: "In what order are margin and padding defined in CSS?",
            options: [

                {
                    text: "Top, Bottom, Left, Right",
                    isRight: false
                },
                {
                    text: "Right, Bottom, Left ,Top",
                    isRight: false
                },
                {
                    text: "Left, Right, Top, Bottom",
                    isRight: false
                },
                {
                    text: "Top, Right, Bottom, Left",
                    isRight: true
                },
            ],
            points: 5,
            reason: ["Top, Right, Bottom, Left is the correct order"]
        },

        {
            id: "Q07",
            question: "Which of the following is invalid JavaScript for importing from a module?",
            options: [

                {
                    text: "import n, { t } from './f.js'",
                    isRight: false
                },

                {
                    text: "import { default as n2, t } from './f.js'",
                    isRight: false
                },
                {
                    text: "import * as n2, { t } from './f.js'",
                    isRight: true
                },
                {
                    text: "import n, { t as t2 } from './f.js'",
                    isRight: false
                }
            ],
            points: 5,
            reason: [" 'import * as n2, { t } from './f.js'' is invalid syntax"]
        },

        {
            id: "Q08",
            question: "What is the result of 100 / 0 in JavaScript?",
            options: [

                {
                    text: "0",
                    isRight: false
                },
                {
                    text: "It throws Error",
                    isRight: false
                },
                {
                    text: "NaN",
                    isRight: false
                },
                {
                    text: "Infinity",
                    isRight: true
                },
            ],
            points: 5,
            reason: ["Well, that's how Javascript behaves."]
        },

        {
            id: "Q09",
            question: "What is the correct way to check for NaN in JavaScript?",
            options: [

                {
                    text: "10 == NaN",
                    isRight: false
                },
                {
                    text: "isNaN(10)",
                    isRight: true
                },
                {
                    text: "10 === NaN",
                    isRight: false
                },
                {
                    text: "isNumber(10)",
                    isRight: false
                }
            ],
            points: 5,
            reason: ["isNaN(10) is the correct way."]
        },

        {
            id: "Q10",
            question: "How do you name a grid line in CSS?",
            options: [
                {
                    text: "grid-template-columns: 1fr [name]",
                    isRight: true
                },
                {
                    text: "grid-template-columns: 1fr <name>",
                    isRight: false
                },
                {
                    text: "grid-template-columns: 1fr (name)",
                    isRight: false
                },
                {
                    text: "grid-template-columns: [1fr], [name]",
                    isRight: false
                }
            ],
            points: 5,
            reason: ["'grid-template-columns: 1fr [name]' is correct way to name a specific grid line"]
        }
    ]
}

export const quizThree: Quiz = {
    id:"quiz03",
    name: "CSS",
    image:"https://www.thatcompany.com/wp-content/uploads/2019/03/css-graphic-1.png",
    questions: [
      {
        id: "Q01",
        question:
          "If you want to fill an entire background with an image without distorting the aspect ratio which value of background-size do you use?",
        options: [
          {
            text: "fill",
            isRight: false,
          },
          {
            text: "cover",
            isRight: true,
          },
          {
            text: "100%",
            isRight: false,
          },
          {
            text: "contain",
            isRight: false,
          },
        ],
        points: 5,
        reason: ["object-fit:cover","the image will fill the height and width of its box, once again maintaining its aspect ratio but often cropping the image in the process."],
      },
      {
        id: "Q02",
        question: "How do you define a custom property in CSS?",
        options: [
          {
            text: "--custom-property = 10",
            isRight: false,
          },
          {
            text: "--custom-property: 10",
            isRight: true,
          },
          {
            text: "$custom-property: 10",
            isRight: false,
          },
          {
            text: "$custom-property = 10",
            isRight: false,
          },
        ],
        points: 5,
        reason: ["--custom-property: 10","It is correct way of defining custom properties"],
      },
      {
        id: "Q03",
        question: "How do you check grid support in CSS?",
        options: [
          {
            text: "@supports(display: grid)",
            isRight: true,
          },
          {
            text: "@supports(grid)",
            isRight: false,
          },
          {
            text: "@feature(display: grid)",
            isRight: false,
          },
          {
            text: "@feature(grid)",
            isRight: false,
          },
        ],
        points: 5,
        reason: ["@supports(display: grid)","Above is correct way to do that."],
      },
      {
        id: "Q04",
        question: "Which CSS unit is the largest?",
        options: [
          {
            text: "px",
            isRight: false,
          },
          {
            text: "pc",
            isRight: true,
          },
          {
            text: "Q",
            isRight: false,
          },
          {
            text: "mm",
            isRight: false,
          },
        ],
        points: 5,
        reason: ["pc stands for picas","It is absolute units and largest one."],
      },
      {
        id: "Q05",
        question: "Which of the following is an invalid color in CSS?",
        options: [
          {
            text: "hsl(200, 100, 50)",
            isRight: true,
          },
          {
            text: "rgb(0, 0, 0, .5)",
            isRight: false,
          },
          {
            text: "hsla(500, 100%, 50%, .6)",
            isRight: false,
          },
          {
            text: "#C1C1C133",
            isRight: false,
          },
        ],
        points: 5,
        reason: ["rgb(0,0,0,.5)","To use a alpha argument, you have to use rgba()"],
      },
      {
        id: "Q06",
        question: "How do you access the value of a data-attribute in CSS?",
        options: [
          {
            text: "color: attr(data-color);",
            isRight: false,
          },
          {
            text: "content: data(data-text);",
            isRight: false,
          },
          {
            text: "color: data(data-color);",
            isRight: false,
          },
          {
            text: "content: attr(data-text);",
            isRight: true,
          },
        ],
        points: 5,
        reason: ["content: attr(data-text);","Above is the correct way to access data-attribute in CSS"],
      },
      {
        id: "Q07",
        question: "Which of the following is not a valid CSS property?",
        options: [
          {
            text: "empty-cells",
            isRight: false,
          },
          {
            text: "will-change",
            isRight: false,
          },
          {
            text: "text-wrap",
            isRight: true,
          },
          {
            text: "border-image",
            isRight: false,
          },
        ],
        points: 5,
        reason: ["text-wrap is not valid","We have to use flex-wrap:wrapping extra content"],
      },
      {
        id: "Q08",
        question: "Which of the following is not a valid relative CSS unit?",
        options: [
          {
            text: "lh",
            isRight: false,
          },
          {
            text: "ch",
            isRight: false,
          },
          {
            text: "ex",
            isRight: false,
          },
          {
            text: "el",
            isRight: true,
          },
        ],
        points: 5,
        reason: ["lh- Line height of the element.","ch- The advance measure (width) of the glyph '0' of the element's font.","ex- x-height of the element's font"],
      },
      {
        id: "Q09",
        question:
          "Which proposed CSS selector can be used to select an anchor tag with a span direct child in it?",
        options: [
          {
            text: "a:has(> span)",
            isRight: true,
          },
          {
            text: "a:contains(span)",
            isRight: false,
          },
          {
            text: "span < a",
            isRight: false,
          },
          {
            text: "a:wraps(span)",
            isRight: false,
          },
        ],
        points: 5,
        reason: ["Others are falsy values"],
      },
      {
        id: "Q10",
        question: "Which of the following is not an SVG property?",
        options: [
          {
            text: "stroke-linejoin",
            isRight: false,
          },
          {
            text: "stroke-radius",
            isRight: true,
          },
          {
            text: "fill-opacity",
            isRight: false,
          },
          {
            text: "font-family",
            isRight: false,
          },
        ],
        points: 5,
        reason: ["There's no such property stroke-radius","The stroke-linecap property in CSS is for setting the starting and ending points of a border on SVG shapes."],
      },
      {
        id: "Q11",
        question: "Which of these creates a stacking context?",
        options: [
          {
            text: "position: sticky",
            isRight: true,
          },
          {
            text: "opacity: 1",
            isRight: false,
          },
          {
            text: "z-index: 10",
            isRight: false,
          },
          {
            text: "order: 4",
            isRight: false,
          },
        ],
        points: 5,
        reason: ["You have to use position property, to make stacking context work"],
      },
    ],
  };
  