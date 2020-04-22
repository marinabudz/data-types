// CLASSWORK

// 1
let string1 = "hello";
let string2 = " HELLO";
let String1 = string1.toLowerCase();
let String2 = string2.toLowerCase();
if (String2 == String1) {
    alert("congrats they match");
} else {
    ("nope");
}

// 2
let veggies = "морква, картопля, буряк";
let veggiesList = veggies.split(",");
console.log(veggiesList);

// 3
let min = 1;
let max = 6;
let game = confirm("confirm to play");

if (game) {
    let randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(randomNumber1, randomNumber2);
    if (randomNumber1 == 6 && randomNumber2 == 6) {
        alert("це джекпот");
    }
} else {
    alert("maybe next time");
}

// 4
let firstNumber = +prompt("Insert random number");
let secondNumber = +prompt("Insert second number");
if (firstNumber > secondNumber) {
    let checkRandomNumber =
        Math.floor(Math.random() * (firstNumber - secondNumber + 1)) +
        secondNumber;
    alert(checkRandomNumber);
} else if (secondNumber > firstNumber) {
    let checkRandomNumber =
        Math.floor(Math.random() * (secondNumber - firstNumber + 1)) +
        firstNumber;
    alert(checkRandomNumber);
} else {
    alert("sorry");
}

// 5

// first choice
let users = [{
        age: 40,
        name: "Carlos",
        hobby: "baseball"
    },
    {
        age: 33,
        name: "Steve",
        hobby: "football"
    },
    {
        age: 54,
        name: "Nataly",
        hobby: "dancing"
    }
];
// second choice
let allUsers = [{
        ["age"]: [40],
        ["name"]: ["Carlos"],
        ["hobby"]: ["baseball"]
    },
    {
        ["age"]: [33],
        ["name"]: ["Steve"],
        ["hobby"]: ["football"]
    },
    {
        ["age"]: [54],
        ["name"]: ["Nataly"],
        ["hobby"]: ["dancing"]
    }
];



//   HOMEWORK
//  1
let userList = [{
        age: 23,
        name: "Steve",
        hobby: "football",
        sex: "male"
    },
    {
        age: 54,
        name: "Nataly",
        hobby: "dancing",
        sex: "female"
    },
    {
        age: 64,
        name: "Din",
        hobby: "hokey",
        sex: "male"
    },
    {
        age: 24,
        name: "Page",
        hobby: "singing",
        sex: "female"
    },
    {
        age: 3,
        name: "Monika",
        hobby: "dolls",
        sex: "female"
    },
    {
        age: 14,
        name: "Carlos",
        hobby: "baseball",
        sex: "male"
    }
];
for (let i = 0; i < userList.length; i++) {
    if (18 > userList[i].age) {
        if (userList[i].sex == "female") {
            console.log("Hello girl " + userList[i].name);
        } else if (userList[i].sex == "male") {
            console.log("Hello boy " + userList[i].name);
        } else {
            console.log("hello kid");
        }
    } else if (18 < userList[i].age && userList[i].age < 30) {
        if (userList[i].sex == "female") {
            console.log(" hello Miss " + userList[i].name);
        } else if (userList[i].sex == "male") {
            console.log("hello Sir " + userList[i].name);
        } else {
            console.log("hello young");
        }
    } else if (userList[i].age > 30) {
        if (userList[i].sex == "male") {
            console.log("hello Mister " + userList[i].name);
        } else if (userList[i].sex == "female") {
            console.log("hello Miss " + userList[i].name);
        }
    }
}


//   2
let userMoney = +prompt(
    "Please insert the amount that you would  like to check:"
);
const dollars = userMoney / 27;
const euros = userMoney / 29;
const brent = 57 / dollars;
const gold = 1684 / dollars;
let currencyCheck = prompt(
    "Choose the currency you  would like to convert(inser d for dolars, e for euros, b for brent and g for gold): "
);
if (userMoney) {
    if (currencyCheck == "d") {
        console.log(`You will get ${dollars} $`);
    } else if (currencyCheck == "e") {
        console.log(`You will get ${euros} `);
    } else if (currencyCheck == "b") {
        console.log(`You will get ${brent} `);
    } else if (currencyCheck == "g") {
        console.log(`You will get ${gold} `);
    } else {
        console.log(" we dont convert to those currencies ");
    }
}


//   3
onePercentDiscount = 0.01;
fivePercentDiscount = 0.05;
tenPercentDiscount = 0.1;
let userOrder = +prompt("Insert the amount of your order: ");
if (userOrder < 500 && userOrder > 0) {
    let calcDiscount = userOrder - userOrder * onePercentDiscount;
    console.log(
        calcDiscount +
        " amount to pay after discount of " +
        onePercentDiscount * 100 +
        "%"
    );
} else if (userOrder > 500 && userOrder < 1000) {
    let calcDiscount = userOrder - userOrder * fivePercentDiscount;
    console.log(
        calcDiscount +
        " amount to pay after discount of " +
        fivePercentDiscount * 100 +
        "%"
    );
} else if (userOrder > 1000) {
    let calcDiscount = userOrder - userOrder * tenPercentDiscount;
    console.log(
        calcDiscount +
        " amount to pay after discount of " +
        tenPercentDiscount * 100 +
        "% and certicate for 200 hryvnias as a bonus!"
    );
} else {
    console.log(userOrder + " to pay sorry no discount for you ");
}


//   4
(function () {


    function buildQuiz() {
        // const what we gonna  have in html output
        const output = [];

        // the code we want to run for each question goes here
        questionsList.forEach((currentQuestion, questionNumber) => {
            // where to store answers
            const answers = [];
            // for each answer
            for (letter in currentQuestion.answers) {
                answers.push(
                    `
                <label >
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}
                    ${currentQuestion.answers[letter]}
                </label>
                `
                );
            }
            output.push(
                `<div class="question pb-2 font-weight-bold"> ${currentQuestion.question}</div> 
            <div class ="answers mb-5"> ${answers.join("")} </div>`
            )


        });
        quizContainer.innerHTML = output.join(' ');
    };

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // how many correct answers user picked
        let numCorrect = 0;

        // loop though question to check for correct answer
        questionsList.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name="question${questionNumber}"]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer == currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainer.style.color = "green";
                if (numCorrect === questionsList.length) {
                    numCorrect += 1;
                }

            } else {

                answerContainer.style.color = "red";
            }

        });
        resultsContainer.innerHTML = `${numCorrect} out of ${questionsList.length} `
    };


    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit")

    const questionsList = [{
            question: "Найбільша нерелігійна країна на землі?",
            answers: {
                a: "Китай",
                b: "Чехія",
                c: "США",
                d: "Японія"

            },
            correctAnswer: "a"
        },
        {
            question: "Яка хвороба спричинила найбільшу кількість смертей за все існування людства?",
            answers: {
                a: "Іспанка",
                b: "COVID19",
                c: "Малярія",
                d: "Чорна чума"
            },
            correctAnswer: "c"
        },
        {
            question: "Скільки в Канаді усього великих та малих озер",
            answers: {
                a: "2000",
                b: "20 0000",
                c: "200 000",
                d: "2 000 000"
            },
            correctAnswer: "d"
        },
        {
            question: "В якій країні відкрили перший банк в світі?",
            answers: {
                a: "Англія",
                b: "Італія",
                c: "Швейцарія",
                d: "Франція",

            },
            correctAnswer: "b"
        },
        {
            question: "Яка національна тварина Шотландії? ",
            answers: {
                a: "Олень",
                b: "Тигр",
                c: "Єдиноріг",
                d: "Bидра"
            },
            correctAnswer: "c"
        }
    ]

    buildQuiz();

    submitButton.addEventListener('click', showResults)
})();


// 5 
function samePair(arr) {
    let sortedArray = arr.slice().sort();
    let dupicatedPairs = [];
    let noDuplicatedPairs = [];
    for (let pair = 0; pair < sortedArray.length; pair++) {
        if (sortedArray[pair + 1] === sortedArray[pair]) {
            dupicatedPairs.push(sortedArray[pair])
        } else {
            noDuplicatedPairs.push(sortedArray[pair])
        }
    }
    return console.log(sortedArray, dupicatedPairs, noDuplicatedPairs)
}
let userNumber = prompt('insert number: ')
userNumber += ''
let userNumberList = userNumber.split("");
newArr = ['simple', 'nike', 'girl', 'boy', 'nike']
samePair(userNumberList)


// 6 
let userKeyPresses = prompt("Please insert any value from 1-9 including 0, =,`");
switch (userKeyPresses) {
    case "`":
        console.log("~");
        break;
    case "1":
        console.log("!");
        break;
    case "2":
        console.log("@");
        break;
    case "3":
        console.log("#");
        break;
    case "4":
        console.log("$");
        break;
    case "5":
        console.log("%");
        break;
    case "6":
        console.log("^");
        break;
    case "7":
        console.log("&");
        break;
    case "8":
        console.log("*");
        break;
    case "9":
        console.log("(");
        break;
    case "0":
        console.log(")");
        break;
    case "-":
        console.log("_");
        break;
    case "=":
        console.log("~");
        break;
    default:
        console.log("wrong key");
}