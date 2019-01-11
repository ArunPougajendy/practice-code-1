var questions = {
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        }
    }
};

function answerIndex(questions,b,c) {
    for (var key in questions) {
        var category = questions[key];
       // console.log(category);
        for (var key1 in category) {
            var question = category[key1];
           // console.log(question);
            for( var key2 in question) {
                if (question[key2].question ==b) {
                    var option = question[key2].options;
                    var answer = question[key2].answer;
                    var output= (option.indexOf(answer));
                }
            }
        }
    }
    if (output)
       {return output;}
    else
    {return 'invalid question';}
}


console.log(answerIndex(questions,'Which one is correct team name in NBA?','b'));
console.log(answerIndex(questions,"5 + 7 = ?","12"));
console.log(answerIndex(questions,"12 - 8 = ?","4"));
console.log(answerIndex(questions,"12 + 8 = ?","4"));


// console.log(first++);
//console.log ( i , questions[i]);