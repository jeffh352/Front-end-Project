// File : 02_app_demo.js
//
//


// The questions array represents the model of the applications. 
// In the demo code the model is hard-coded; However, in 
// a real application the model will be loaded from a RESTFUL API.

fetch("https://my-json-server.typicode.com/jeffh352/Front-end-Project/db")

const questions = {
  "accounts":[
    {
      "name":"",
      "score":""
    }
  ],
  "questions":[
{
    "questionType" : "true_false",
    "questionText" : "The earth is round",
    "correctAnswer" : "true",
    "options" : ["true", "false"],
    "response" : "The world is scientifically proven round"
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

      appState.name=document.getElementById("name").value
      questions.accounts.push(appState.name)
      console.log(questions.accounts)
        // Update State (current model + state variables)
        appState.current_question = 0
        appState.current_model = questions.questions[appState.current_question];
        // process the appState, based on question type update appState.current_view
        setQuestionView(appState);
       
        // Now that the state is updated, update the view.

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
      if(e.target.dataset.action="ok"){
        appState.current_question =   appState.current_question + 1;
        appState.current_model = questions.questions[appState.current_question];
        setQuestionView(appState)
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
      }

 } // end of hadnle_widget_event
 
function check_user_response(user_answer, model) {
  console.log(user_answer)
  console.log(model)
  if (user_answer == model) {
    appState.correctAnswers+=1;
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
  if (appState.current_question == 10) {
    console.log(appState.name+" you got: "+appState.correctAnswers)
    questions.accounts.score.push(appState.correctAnswers)
    console.log(questions.accounts)
    appState.current_view  = "#end_view";
    return
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