import React from "react"

//Should shuffle answers randomly, put all answers in one auqesiont 

export default function Game(props){

    const {questions} = props
    console.log(questions)
    

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
// var arr = [2, 11, 37, 42];
// shuffle(arr);
// console.log(arr);



    const questionElements = questions.map(question =>{
        return( 
            <div>
                 <div className= "blob3"></div>
                <div className= "blob4"></div>

                 <div  className = "question-block">
                    <div className ="question"> {question.question}</div> 
                    <div className = "possible-answer1">{question.correct_answer}</div>
                    <div className = "possible-answer2">{question.incorrect_answers[0]}</div>
                    <div className = "possible-answer3">{question.incorrect_answers[1]}</div>
                    <div className = "possible-answer4">{question.incorrect_answers[2]}</div>
                 </div>
                


            </div>
            
        )
    })

    return(
        <div>
            {questionElements}
        </div>
       
    )
}