questions = [
    {
        "question": "What is the capital of France?",
        "options": ["Berlin", "Madrid", "Paris", "Rome"],
        "answer": "Paris"
    },
    {
        "question": "Who is the creator of Javascript?",
        "options": ["Brendan Eich", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"],
        "answer": "Brendan Eich"
    },
    {
        "question": "What is 2 + 2?",
        "options": ["3", "4", "5", "6"],
        "answer": "4"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Earth", "Mars", "Jupiter", "Saturn"],
        "answer": "Mars"
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": "Pacific Ocean"
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "options": ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        "answer": "William Shakespeare"
    },
    {
        "question": "What is the chemical symbol for water?",
        "options": ["O2", "H2O", "CO2", "NaCl"],
        "answer": "H2O"
    },
    {
        "question": "In which year did the Titanic sink?",
        "options": ["1912", "1905", "1898", "1920"],
        "answer": "1912"
    },
    {
        "question": "What is the hardest natural substance on Earth?",
        "options": ["Gold", "Iron", "Diamond", "Silver"],
        "answer": "Diamond"
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        "answer": "Leonardo da Vinci"
    },
    {
        "question": "What is the smallest prime number?",
        "options": ["0", "1", "2", "3"],
        "answer": "2"
    },
    {
        "question": "Which gas do plants absorb from the atmosphere?",
        "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        "answer": "Carbon Dioxide"
    },
    {   
        "question": "What is the currency of Japan?",
        "options": ["Yen", "Dollar", "Euro", "Won"],
        "answer": "Yen"
    }
]

report = []

function printOptions(option){
    const X = ['Option A', 'Option B', 'Option C', 'Option D']
    let len = option.length
    let text = ""
    for(i=0; i<len; i++){
        text += X[i] + ":"+ option[i] + "\n";
    }
    return text
}

function dJSON(obj){
    const blob1 = new Blob([JSON.stringify(obj)], {type: 'application/json'});
    const url1 = URL.createObjectURL(blob1);
    const a = document.createElement('a')
    a.href = url1
    a.download = 'report.json'
    a.click()
    URL.revokeObjectURL(url1)
}

usedIndexes = new Set()
let j=0

while(j < questions.length){
    rjson = {question: '', answer: '', user_answer:''}
    randomNo = Math.floor(Math.random()*13)

    if (usedIndexes.has(randomNo)) continue;
    usedIndexes.add(randomNo);


    questionBranch = questions[randomNo]
    question = questionBranch['question']
    optionss = printOptions(questionBranch['options'])
    answer = questionBranch['answer']

    let person = prompt(question+'\n'+optionss, "Type the answer here");

    rjson['user_answer'] = person
    rjson['question'] = question
    rjson['answer'] = answer
    report.push(rjson)

    j++;
}

dJSON(report)