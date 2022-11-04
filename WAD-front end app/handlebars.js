let current={};
let accept=true;
let score=0;
let counter=0;
let allQuestions=[];

let questions=[
    {
        question:"hello",
        choice1: "hi",
        choice2: "bye"
    }
]

function startg(){
    start=()=>{
        counter=0;
        score=0;
        console.log(questions)
        getNewQuestion();
    };
    
    getNewQuestion=()=>{
        counter++;
        const questionIndex=Math.floor(Math.random()*questions.length);
        current=questions[questionIndex];
        question.innerText=current.question
    }    
}
function quiz1(){
    var data={
        title: "Quiz 1",
        list: [
            {name:'Java is a programming language'},
            {name:'Java is object oriented'},
            {name:'Python is a programming language'},
            {name:'Python is object oriented'},
            {name:'Python is the same as Java'},
            {name:'Which are High level programming languages'},
            {name:'What is an array'},
            {name:'Do you need to code in computer science'},
            {name:'AI is built'},
        ],
        list2:[
            {name:'How many languages are there\n(A)1 (B)2 (C)3 (D)4'},
            {name:'How do you iterate in an array\(n(A) Nothing\n(B) For Loop\n(C) While loop\n(D) Both B and C'},
            {name:'Which are High level programming languages'},
        ],
        list3:[
            {name:'What is this for(i=0;i<0;i++)'}
        ],
        list4:[
            {name:'What is the java logo'}
        ]
    };
    var template=Handlebars.compile(document.querySelector("#template").innerHTML);
    var filled=template(data);
    document.querySelector('#output').innerHTML=filled;
}
function quiz2(){
    var data={
        title: "Quiz 2",
        list: [
            {name:'hello'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
            {name:'Is it object oriented'},
        ],
    };
    var template=Handlebars.compile(document.querySelector("#template").innerHTML);
    var filled=template(data);
    document.querySelector('#output').innerHTML=filled;
}
fetch("https://raw.githubusercontent.com/jeffh352/demo/master/db.json")
    .then(res=> {
        return res.json();
    })
    .then(data=> {
        console.log(data.list1);
    })
    .catch(error=>console.log('Error'))
