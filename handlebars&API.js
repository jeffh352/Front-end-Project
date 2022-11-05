// File : 02_app_demo.js
//
//


// The questions array represents the model of the applications. 
// In the demo code the model is hard-coded; However, in 
// a real application the model will be loaded from a RESTFUL API.

fetch("https://my-json-server.typicode.com/jeffh352/Front-end-Project/db")
.then(res=>{
  return res.json
})
.then(loadquestions=>{
  console.log(loadquestions.questions);
})

const questions = {
  "accounts":[
    {
      "name":"",
      "score":""
    }
  ],
  "questions":[
    {
      "questionType": "multiple_choice",
      "questionText": "Ashley needs to create a project for her resume to show to companies in about a month but doesn't know what to make, she was considering making a game or a quiz application or maybe even an AI, what do you think is best for her?",
      "correctAnswer": "How about creating your own personal website that has your resume in it. That would be one of the best ways to give the company a look at your coding skills and it shouldn't take too long",
      "options" : ["A game sounds like a great way to get companies interested in you!", "A quiz application sounds fun and it could show companies your ability", "AI sounds amazing for her resume, she should definitely go with that!", "How about creating your own personal website that has your resume in it. That would be one of the best ways to give the company a look at your coding skills and it shouldn't take too long"],
      "response" : "Most of the options seem like it will take a while or aren't the best options in general, a website seems like the most relevant and best long term investment for Ashley"
    },
{
    "questionType" : "text_input",
    "questionText" : "Is Java a popular programming language?",
    "correctAnswer" : "Yes",
    "answerFieldId" : "answer_to_question",
    "response" : "Java is one of the most popular languages in the world"
},
{
    "questionType" : "true_false",
    "questionText" : "French people speak Python",
    "correctAnswer" : "false",
    "options" : ["true", "false"],
    "response" : "Python is a programming language"
},
{
    "questionType" : "multiple_choice",
    "questionText" : "What is one of the oldest Programming Languages",
    "correctAnswer" : "Fortran",
    "options" : ["Java", "Python", "Fortran", "HTML"],
    "response" : "Fortran was released back in 1957"
},
{
    "questionType" : "true_false",
    "questionText" : "Java is not an object oriented language",
    "correctAnswer" : "false",
    "options" : ["true", "false"],
    "response" : "Java uses objects which can have multiple classes in them and be called back"
},
{
    "questionType" : "true_false",
    "questionText" : "For loops and Recursions are the same thing",
    "correctAnswer" : "false",
    "options" : ["true", "false"],
    "response" : "For loops keep repeating themselves until an integer is reached, recursions call themsevles back repeatedly"
},
{
    "questionType" : "true_false",
    "questionText" : "Python is one of the most popular languages",
    "correctAnswer" : "true",
    "options" : ["true", "false"],
    "response" : "48.07% of programmers use python"
},
{
    "questionType" : "true_false",
    "questionText" : "JavaScript is a front end development language",
    "correctAnswer" : "true",
    "options" : ["true", "false"],
    "response" : "How do you think these questions and responses keep coming up"
},
{
    "questionType" : "true_false",
    "questionText" : "Java is a front end development language",
    "correctAnswer" : "false",
    "options" : ["true", "false"],
    "response" : "It is used for back end development"
},
{
    "questionType" : "true_false",
    "questionText" : "HTML is also a front end development language",
    "correctAnswer" : "true",
    "options" : ["true", "false"],
    "response" : "It was also used along with JavaScript to setup this quiz :P"
},
{
  "questionType" : "true_false",
    "questionText" : "For loops are easily rewritten as while loops",
    "correctAnswer" : "true",
    "options" : ["true", "false"],
    "response" : "For loops are interchangeable with while loops"
},
{
  "questionType" : "true_false",
    "questionText" : "While loops are easily rewritten as For loops",
    "correctAnswer" : "false",
    "options" : ["true", "false"],
    "response" : "While loops are not as easily interchangeable with while loops in most languages"
},
{
  "questionType" : "multiple_choice",
    "questionText" : "int sum(int n){ if(n==0)return 0; else return n+sum(n-1);    What is the runtime complexity of this statement?",
    "correctAnswer" : "O(n)",
    "options" : ["O(n^2)", "O(logn)", "O(n)", "O(2^n)"],
    "response" : "There are no recursions or anything of the sort and the algorithim runs at a solid O(n)"
},
{
  "questionType" : "multiple_choice",
    "questionText" : "Which is the worst time complexity",
    "correctAnswer" : "O(n!)",
    "options" : ["O(n!)", "O(n)", "O(logn)", "O(nlogn)"],
    "response" : "O(n!) is the worst time complexity that a program can have"
},
{
  "questionType" : "text_input",
  "questionText" : "Write an int statement n that holds the value 9 in java(In the way of int n=[numbers]);",
  "correctAnswer" : "int n=9;",
  "answerFieldId" : "answer_to_question",
  "response" : "The right code is int n=9;"
},
{
  "questionType" : "multiple_choice",
    "questionText" : "Which is the best time complexity out of all the options",
    "correctAnswer" : "O(n)",
    "options" : ["O(n!)", "O(n)", "O(logn^2)", "O(nlogn)"],
    "response" : "O(n) is the second best time complexity that a program can have"
},
{
  "questionType" : "multiple_choice",
    "questionText" : "Which is the best time complexity out of all the options",
    "correctAnswer" : "Both O(1) and O(logn)",
    "options" : ["O(1)", "O(n)", "O(logn)", "Both O(1) and O(logn)"],
    "response" : "O(1) is the best time complexity that a program can have along with O(logn)"
},
{
  "questionType" : "true_false",
    "questionText" : "O(log n) is better and faster than O(n)",
    "correctAnswer" : "true",
    "options" : ["true", "false"],
    "response" : "O(log n) is one of the fastes runtimes"
},
{
  "questionType" : "true_false",
    "questionText" : "O(log n) and O(1) run almost the same in terms of speed",
    "correctAnswer" : "true",
    "options" : ["true", "false"],
    "response" : "O(log n) and O(1) are both excellent runtimes and almost run at the same speed"
},
{
  "questionType" : "true_false",
    "questionText" : "Big O notation is one of the best ways to determine how fast a program can run",
    "correctAnswer" : "true",
    "options" : ["true", "false"],
    "response" : "Big O notation is widely amongst all programmers to determine runtime complexities"
},
{
  "questionType" : "multiple_choice",
  "questionText" : "Bobby wants to learn how to code but he doesn't know what language he wants to start with, he asked Allie and she said to start with Fortran cause it gives a lot of money, Sarah said C++ as she thinks many people use it, and George said to try Ruby, what language should George start with?",
  "correctAnswer" : "Python is probably the easiest to use and learn along with most companies use it",
  "options" : ["Fortran it gives the most money$$!", "C++ should be a good start", "Ruby sounds cool it doesn't really matter what you should start with", "Python is probably the easiest to use and learn along with most companies use it"],
  "response" : "Most of these languages are incredibly difficult or not beginner friendly, Python is the easiest out of all of them as it is easy to use and read making it perfect for Bobby"
},
{
  "questionType" : "text_input",
  "questionText" : "Write an empty print statement for Python(No quotations)",
  "correctAnswer" : "print()",
  "answerFieldId" : "answer_to_question",
  "response" : "A print statement in python should look like print()"
},
{
  "questionType" : "true_false",
  "questionText" : "Programming is not important in todays world",
  "correctAnswer" : "false",
  "options" : ["true", "false"],
  "response" : "Programming has to be the most in demand skills in todays world especially with the improving technology"
},
{
  "questionType" : "multiple_choice",
  "questionText" : "Which language is most relevant",
  "correctAnswer" : "Python",
  "options" : ["Ruby", "Python", "Fortran", "C++"],
  "response" : "Python is one of the most used languages today"
},
{
  "questionType" : "true_false",
  "questionText" : "Python is an interpreted language ",
  "correctAnswer" : "true",
  "options" : ["true", "false"],
  "response" : "Pythons program is converted into bytecode which is fed into its virtual machine meaning it is interpreted"
},
{
  "questionType" : "true_false",
  "questionText" : "Python is a compiled language",
  "correctAnswer" : "false",
  "options" : ["true", "false"],
  "response" : "Pythons program is converted into bytecode which is fed into its virtual machine meaning it is interpreted"
},
{
  "questionType" : "true_false",
  "questionText" : "It is very difficult to read Python",
  "correctAnswer" : "false",
  "options" : ["true", "false"],
  "response" : "Python was made to be very legible and easy to code"
},
{
  "questionType" : "true_false",
  "questionText" : "Python is mostly used as a front end language",
  "correctAnswer" : "false",
  "options" : ["true", "false"],
  "response" : "Python is mostly used for back end however it can also be used for front end"
},
{
  "questionType" : "true_false",
  "questionText" : "Flask is a web framework for Java",
  "correctAnswer" : "false",
  "options" : ["true", "false"],
  "response" : "Flask is a web framework for Python"
},
{
  "questionType" : "true_false",
  "questionText" : "JavaScript is one of the best languages for front end",
  "correctAnswer" : "true",
  "options" : ["true", "false"],
  "response" : "It is the most widely used for front end"
},
{
"questionType" : "true_false",
  "questionText" : "Its easy to code",
  "correctAnswer" : "false",
  "options" : ["true", "false"],
  "response" : "Coding needs a lot of determination and mental tenacity"
},
{
"questionType" : "true_false",
  "questionText" : "This quiz was made with Python",
  "correctAnswer" : "false",
  "options" : ["true", "false"],
  "response" : "It was made with HTML and JavaScript along with JSON"
},
{
"questionType" : "multiple_choice",
  "questionText" : "Which are used to evaluate worst case time complexity",
  "correctAnswer" : "Big O Notation",
  "options" : ["Big O Notation", "Alpha omega Notation", "Pear Notation", "None"],
  "response" : "Big O Notation is the worst case time complexity"
},
{
"questionType" : "multiple_choice",
  "questionText" : "Which are Big O notations",
  "correctAnswer" : "All",
  "options" : ["O(n!)", "O(n)", "O(logn)", "All"],
  "response" : "All are Big O notation"
},
{
"questionType" : "text_input",
"questionText" : "Write a print statement in JavaScript for the console to print out appState.data",
"correctAnswer" : "console.log(appState.data)",
"answerFieldId" : "answer_to_question",
"response" : "The right code is console.log(appState.data)"
},
{
"questionType" : "multiple_choice",
  "questionText" : "Which are best front end languages",
  "correctAnswer" : "JavaScript",
  "options" : ["JavaScript", "Java", "Fortran", "Ruby"],
  "response" : "JavaScript is made specifically for front end development"
},
{
"questionType" : "multiple_choice",
  "questionText" : "Which are best back end languages",
  "correctAnswer" : "O(1)",
  "options" : ["JavaScript", "Java", "Fortran", "Ruby"],
  "response" : "Java is the most easy to use back end language out of all options"
},
{
"questionType" : "true_false",
  "questionText" : "Coding is not fun when you manage to finish a project",
  "correctAnswer" : "false",
  "options" : ["true", "false"],
  "response" : "When you finish it is one of the best feelings on this planet"
},
{
"questionType" : "true_false",
  "questionText" : "Programming is futureproof",
  "correctAnswer" : "true",
  "options" : ["true", "false"],
  "response" : "Programming will be timeless as the world will need people to program AI and webpages for them along with improving them"
},
{
"questionType" : "true_false",
  "questionText" : "Programming pays well for people",
  "correctAnswer" : "true",
  "options" : ["true", "false"],
  "response" : "Most companies pay a handsome salary for programmers"
}
]}
// appState, keep information about the State of the application.
const appState = {
    current_view : "#intro_view",
    current_quiz: "none",
    current_question : -1,
    current_model : {},
    correctAnswers:0,
    name:""
}

//
// start_app: begin the applications.
//

document.addEventListener('DOMContentLoaded', () => {
  // Set the state
  appState.current_view =  "#intro_view";
  appState.current_model = {
    action : "Quiz 1"
  }
  update_view(appState);

  //
  // EventDelegation - handle all events of the widget
  //

  document.querySelector("#widget_view").onclick = (e) => {
      handle_widget_event(e)
  }
});



async function handle_widget_event(e) {

  if (appState.current_view == "#intro_view"){
    if (e.target.dataset.action == "Quiz 1") {

      appState.current_quiz="Quiz 1"
      console.log(appState.current_quiz)
      appState.name=document.getElementById("name").value
      questions.accounts.push(appState.name)
        // Update State (current model + state variables)
        appState.current_question = 0
        appState.current_model = questions.questions[appState.current_question];
        // process the appState, based on question type update appState.current_view
        setQuestionView(appState);
       
        // Now that the state is updated, update the view.

        update_view(appState);
    }
    else if(e.target.dataset.action=="Quiz 2"){
      appState.current_quiz="Quiz 2"
      console.log(appState.current_quiz)
      appState.name=document.getElementById("name").value
      questions.accounts.push(appState.name)
      
      appState.current_question = 20
      appState.current_model = questions.questions[appState.current_question];

      setQuestionView(appState);
      update_view(appState);
    }
  }

  // Handle the answer event.
  if (appState.current_view == "#question_view_true_false") {

    if (e.target.dataset.action == "answer") {

       // Controller - implement logic.
       //console.log(e.target.dataset.answer)
       isCorrect = check_user_response(e.target.dataset.answer, appState.current_model.correctAnswer);
       if(isCorrect==true){
        appState.current_view="#good_job_view";
        update_view(appState);
        await sleep(1);
        //console.log(appState.current_model.correctAnswer)
       //console.log(isCorrect)
     
       // Update the state.
       appState.current_question =   appState.current_question + 1;
       appState.current_model = questions.questions[appState.current_question];
       
       setQuestionView(appState);
     
       // Update the view.  
       update_view(appState);
       }
       else{
        appState.current_view="#feedback_view"
        update_view(appState);
       }

     }
   }

   // Handle answer event for  text questions.
   else if (appState.current_view == "#question_view_text_input") {

       if (e.target.dataset.action == "submit") {
        console.log(e.target.dataset.answer)
        user_response = document.querySelector(`#${appState.current_model.answerFieldId}`).value;
        isCorrect = check_user_response(user_response, appState.current_model.correctAnswer);
        if(isCorrect==true){
          appState.current_view="#good_job_view";
          update_view(appState);
          await sleep(1);

          appState.current_question =   appState.current_question + 1;
          appState.current_model = questions.questions[appState.current_question];
        //appState.current_question =   appState.current_question + 1;
        //appState.current_model = questions[appState.current_question];
          setQuestionView(appState);
          update_view(appState);
        }
        else{
          appState.current_view="#feedback_view"
          update_view(appState);
        }
       }
    }
  else if(appState.current_view=="#question_view_multiple_choice"){

      if(e.target.dataset.action=="answer"){

        console.log(e.target.dataset.answer)
        isCorrect=check_user_response(e.target.dataset.answer, appState.current_model.correctAnswer);
        if(isCorrect==true){
          appState.current_view="#good_job_view";
          update_view(appState);
          await sleep(1);

          appState.current_question =   appState.current_question + 1;
          appState.current_model = questions.questions[appState.current_question];
        //appState.current_question =   appState.current_question + 1;
        //appState.current_model = questions[appState.current_question];
          setQuestionView(appState);
          update_view(appState);
        }
        else{
          appState.current_view="#feedback_view"
          update_view(appState);
        }
      }
    }
    else if(appState.current_view=="#question_view_mutli_text_input"){
      if(e.target.dataset.action=="submit"){
        user_response = document.querySelector(`#${appState.current_model.answerFieldId}`).value;
        isCorrect=check_user_response(e.target.dataset.answer, appState.current_model.correctAnswer);

        setQuestionView(appState)
        updateQuestion(appState)
      }
    }
    else if(appState.current_view=="#feedback_view"){
      if(e.target.dataset.action="Got it"){
        appState.current_question =   appState.current_question + 1;
        appState.current_model = questions.questions[appState.current_question];
        setQuestionView(appState)
        update_view(appState);
      }
    }
    else if(appState.current_view=="#fail_end_view"){
      if (e.target.dataset.action == "start_again") {
        appState.current_view =  "#intro_view";
        appState.current_model = {
          action : "Quiz 1"
        }
        appState.correctAnswers=0;
        update_view(appState);

      }
      else if (e.target.dataset.action == "Quiz 1") {
        questions.accounts.push(appState.name)
        console.log(questions.accounts)
          // Update State (current model + state variables)
          appState.current_question = 0
          appState.current_model = questions.questions[appState.current_question];
          appState.correctAnswers=0;
          // process the appState, based on question type update appState.current_view
          setQuestionView(appState);
         
          // Now that the state is updated, update the view.
  
          update_view(appState);
      }
      else if (e.target.dataset.action == "Quiz 2") {
        questions.accounts.push(appState.name)
        console.log(questions.accounts)
          // Update State (current model + state variables)
          appState.current_question = 20
          appState.current_model = questions.questions[appState.current_question];
          appState.correctAnswers=0;
          // process the appState, based on question type update appState.current_view
          setQuestionView(appState);
         
          // Now that the state is updated, update the view.
  
          update_view(appState);
      }
      
    }

    // Handle answer event for  text questions.
    else if (appState.current_view == "#end_view") {
        if (e.target.dataset.action == "start_again") {
          appState.current_view =  "#intro_view";
          appState.current_model = {
            action : "Quiz 1"
          }
          appState.correctAnswers=0;
          update_view(appState);

        }
        else if (e.target.dataset.action == "Quiz 1") {
          questions.accounts.push(appState.name)
          console.log(questions.accounts)
            // Update State (current model + state variables)
            appState.current_question = 0
            appState.current_model = questions.questions[appState.current_question];
            appState.correctAnswers=0;
            // process the appState, based on question type update appState.current_view
            setQuestionView(appState);
           
            // Now that the state is updated, update the view.
    
            update_view(appState);
        }
        else if (e.target.dataset.action == "Quiz 2") {
          questions.accounts.push(appState.name)
          console.log(questions.accounts)
            // Update State (current model + state variables)
            appState.current_question = 20
            appState.current_model = questions.questions[appState.current_question];
            appState.correctAnswers=0;
            // process the appState, based on question type update appState.current_view
            setQuestionView(appState);
           
            // Now that the state is updated, update the view.
    
            update_view(appState);
        }
      }

 } // end of hadnle_widget_event
 
function check_user_response(user_answer, model) {
  console.log(user_answer)
  console.log(model)
  if (user_answer == model) {
    appState.correctAnswers+=5;
    console.log(appState.correctAnswers)
    return true;
  }
  else{
    return false;
  }
}

function updateQuestion(appState) {
    if (appState.current_question < questions.length-1) {
      appState.current_question =   appState.current_question + 1;
      appState.current_model = questions[appState.current_question];
    }
    else {
      appState.current_question = -2;
      appState.current_model = {};
    }
}

async function setQuestionView(appState) {
  if(appState.current_quiz=="Quiz 1"){
    if (appState.current_question == 20) {
      console.log(appState.name+" you got: "+appState.correctAnswers)
      console.log(appState.correctAnswers)
      if(appState.correctAnswers>=80){
        appState.current_view  = "#end_view";
        return
      }
      else{
        appState.current_view= "#fail_end_view";
        return
      }
    }
  }
  else if(appState.current_quiz=="Quiz 2"){
    if (appState.current_question == 40) {
      console.log(appState.name+" you got: "+appState.correctAnswers)
      console.log(appState.correctAnswers)
      if(appState.correctAnswers>=80){
        appState.current_view  = "#end_view";
        return
      }
      else{
        appState.current_view= "#fail_end_view";
        return
      }
    }
  }

  if (appState.current_model.questionType == "true_false"){
    appState.current_view = "#question_view_true_false";
  }
  else if (appState.current_model.questionType == "multiple_choice"){
    appState.current_view = "#question_view_multiple_choice";
  }
  else if (appState.current_model.questionType == "text_input") {
    appState.current_view = "#question_view_text_input";
  }
  else if (appState.current_model.questionType == "multi-text-input") {
    appState.current_view = "#question_view_mutli_text_input";
  }
}

//NO NEED TO CHANGE
function update_view(appState) {

  const html_element = render_widget(appState.current_model, appState.current_view)
  document.querySelector("#widget_view").innerHTML = html_element;
}

//NO NEED TO CHANGE
const render_widget = (model,view) => {
  // Get the template HTML
  template_source = document.querySelector(view).innerHTML
  // Handlebars compiles the above source into a template
  var template = Handlebars.compile(template_source);

  // apply the model to the template.
  var html_widget_element = template({...model,...appState})

  return html_widget_element
}
async function sleep(seconds){
  return new Promise(resolve => setTimeout(resolve, seconds*1000));
}