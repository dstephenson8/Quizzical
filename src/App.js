import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome"
import Game from "./components/Game"
import React from "react"

function App() {

  const[start, setStart] = React.useState(false)
  const[questions, setQuestions]= React.useState([
    {
        "category": "Celebrities",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the real name of &quot;moot&quot;, founder of the imageboard 4chan?",
        "correct_answer": "Christopher Poole",
        "incorrect_answers": [
            "Mark Zuckerberg",
            "Allison Harvard",
            "Catie Wayne"
        ]
    },
    {
        "category": "Entertainment: Film",
        "type": "boolean",
        "difficulty": "easy",
        "question": "In Alfred Hitchcock&#039;s film &#039;Psycho&#039; it is said he used chocolate syrup to simulate the blood in the famous shower scene from ",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "category": "Sports",
        "type": "boolean",
        "difficulty": "easy",
        "question": "In association football, or soccer, a corner kick is when the game restarts after someone scores a goal.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is the name of the alien species introduced in Shadow the Hedgehog (2005)?",
        "correct_answer": "Black Arms",
        "incorrect_answers": [
            "The Swarm",
            "Black Hive",
            "The Eclipse"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "boolean",
        "difficulty": "easy",
        "question": "In the video game &quot;Splatoon&quot;, the playable characters were originally going to be rabbits instead of squids.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    }
])

  console.log(questions)
  // Turn this back on When you are done editing the styling 
  // React.useEffect(()=>{
  //   fetch("https://opentdb.com/api.php?amount=5")
  //   .then(res => res.json())
  //   .then(data => setQuestions(data.results) )
    
  // },[start])

// function startGame(){
//     setStart(true)
// }


  return (
    <div className="App">
       <div className= "blob"></div>
        <div className= "blob2"></div>
        {/* {!start ? <Welcome start = {startGame} /> : <Game questions = {questions}  />} */}
      <Game questions = {questions}/>

    </div>
  )
    


}

export default App;
