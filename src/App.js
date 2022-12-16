import {useState, useRef, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
const [Question, setQuestion] = useState('');
const questionCont = useRef();
const questionIn = useRef()
useEffect(() => {
  setTimeout(() => {
    questionCont.current.style.display = "flex"  
    questionIn.current.focus()
  }, 1000);
},[]);
let changeFinder = (event) =>{
setQuestion(event.target.value)
}
useEffect(() => {
if(Question.toLowerCase() === "так"){
  questionCont.current.style.display="none"
}
}, [Question]);
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      <div className='question-cont' ref={questionCont}>
        <label htmlFor="question">Вам подобається React?</label>
        <input ref={questionIn} onChange={changeFinder} type="text" name="question" id="question"/>
      </div>
    </>
  );
}

export default App;
