
import { useState } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";
import ProgressBarred from "./ProgressBarred";
// import { Dispatch } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {Right, wrong,Timeout,Corectans,Ansrdque,TotalScore } from "./features/counter/counterSlice";
 
import {BrowserRouter as Router, Switch,Route, Link, Routes} from 'react-router-dom'
import Skip from "./Skip";

import { Ansredval } from './features/counter/counterSlice'
import { Totlascor } from './features/counter/counterSlice'
import { Corectval } from './features/counter/counterSlice'

const questions = [
  {
    questionText: "What language is spoken in Brasil?",
    answerOptions: [
      { answerText: "Portugues", isCorrect: true },
      { answerText: "English", isCorrect: false },
      { answerText: "French", isCorrect: false },
      { answerText: "German", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which countries have the hieghest and lowest life expectancy in the world?",
    answerOptions: [
      { answerText: "Australia and Afghnistan", isCorrect: false },
      { answerText: "Japan and sierra", isCorrect: true },
      { answerText: "Italy", isCorrect: false },
      { answerText: "Brasil", isCorrect: false },
    ],
  },
  {
    questionText: "Which company created the iPhone?",
    answerOptions: [
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Apple", isCorrect: true },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How to learn to program?",
    answerOptions: [
      { answerText: "Practising what you learn", isCorrect: true },
      { answerText: "Watching video", isCorrect: false },
      { answerText: "Reading", isCorrect: false },
      { answerText: "Writing", isCorrect: false },
    ],
  },
];

function AppCopy() {

const dispatch=useDispatch()

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wrongscore,setWrongscore]=useState(0);
  const [answred,setAnswred]=useState(0)
  const [count, setCount]=useState(2)
  const [sec, setSec]=useState(0)
//   const timeoutt=useSelector(Timeoutt)

  if(sec===0) {
    setCount(count-1)
    setSec(60)
  }

  

  let timer;

const runTimer = () => {
  timer = window.setTimeout(
    () => {
      setSec(sec-1)
      // console.log('min')
    }, 1000);
}

runTimer();


 







  


 if( count===0 && sec ===0){
  if(currentQuestion<3) {
    const Question2 = currentQuestion +1;
   setCurrentQuestion(Question2);}
   clearTimeout(timer)
   runTimer()
   setCount(2)
   setSec(0)
 }

 const answered=useSelector(Ansredval)
 const totalscore=useSelector(Totlascor)
//  const Corectans=useSelector(Corectval)

  function handleAnswer(isCorrect) {
    dispatch(Ansrdque())
    console.log(answered)

    dispatch(TotalScore({
        value:actualScore,
    }))
    clearTimeout(timer)
    runTimer()
    setCount(2)

   setSec(0)
//    dispatch(Ansrdque())
    if (isCorrect) {
      setScore(score + 1);
   setAnswred(answred+1)
      
      console.log(answered)

      dispatch(Right())
      dispatch(Corectans())
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        console.log(currentQuestion)
      } 
      else {
        // exceed=true;
      setShowScore(true);
  
        
      }
    }
    if(!isCorrect){
      setWrongscore(wrongscore+1)
   setAnswred(answred+1)
     
      dispatch(wrong())
   const nextQuestion = currentQuestion + 1;
   if (nextQuestion < questions.length) {
     setCurrentQuestion(nextQuestion);
   } 
   else {
     // exceed=true;
   setShowScore(true);

     
   }



    }
    
    

   
  } 

  // if(timeout || (exceed) ){
  //   setShowScore(true);
  // }


  let actualScore=(score*5-(wrongscore*4));

  let hangleback=()=>{

    dispatch(TotalScore({
        value:actualScore,
    }))
   
if(currentQuestion>=1){
    let Question = currentQuestion - 1;
    setCurrentQuestion(Question);
    clearTimeout(timer)
  runTimer()
    setCount(2)
    setSec(0)}
    
   



  }
let handlenext=()=>{
    dispatch(TotalScore({
        value:actualScore,
    }))
  if(currentQuestion<3) {
   const Question1 = currentQuestion +1;
  setCurrentQuestion(Question1);
  // clearTimeout()
  clearTimeout(timer)
  runTimer()
  setCount(2)
  setSec(0)}


}

let a=[1,5,7]

let proptpans
let handleskip=()=>{

  proptpans=true;
  
    console.log(proptpans)

}

  

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <b className="points">Points</b> <span>{actualScore}</span>
         
         
         
         
          <div className="result_res"><b>Right Ans  {` `}</b>  <progress className="rightans" value={score} max={4} />
          <b>Wrong Ans</b> <progress className="wrongans" value={wrongscore} max={4} />
          </div> 
         
         <div className="resques">  Answered question  {answred}/{questions.length} </div>
        
        
        <div className="result_footer">  You scored {score} out of {questions.length} </div>
        
          <b>Your Total score  {score}</b> <br/>
        
        
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
            <b className="points">Points</b> <span className="score">{actualScore}</span>
             {/* <div className="progress"><b>Right Ans</b> <progress className="rightans" value={score} max={4} /></div> 
            <div> <b>Wrong Ans</b> <progress className="wrongans" value={wrongscore} max={4} style={styles}></progress></div> */}
            
            <span className="asnque">Answered question  {answred}</span>/{questions.length}

            <ProgressBar name="Right Ans " color='green'/>
            <ProgressBarred name="Wrong Ans" color='red'/>

            
            
             
              <span className="question">Question {currentQuestion + 1}</span>/{questions.length}
           <br/>
           <div className="countdow">
           <small>Countdown {count}  mins :{sec} sec's</small> 
             
              <input type='range' value={count*60+sec} max={120} />
              </div>
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
          <div className="btn">
            <button onClick={hangleback}> {`<--`} Back</button>
            <button onClick={handlenext}>Next {`-->`}</button>
          </div>

          <div className="scip"> <a href="/skip"> <button className="btn_skip" onClick={handleskip}>Skip</button></a></div>
          <b>Note: Right ans is 5 points and Wrong ans leads to -4 ponits</b>
         



         { a.forEach((num)=>{return(
  // console.log(num)
                    <p>{num}</p>

)})}





        </>
         
      )}



    </div>
  );
}

export default AppCopy;