import './App.css';
import{useEffect,useState} from 'react'
import axios from 'axios'
import {MathJaxContext,MathJax} from 'better-react-mathjax'
import { question } from './componants/content';




function App() {
  const [data, setData] = useState("")
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    
    axios
    .get(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${question[count]}`)
    .then((response)=>
     {setData(response.data[0].Question)
      console.log(response.data)
     })
     
  });
  
  const handlePrevClick=() =>{
    console.log("Previos")
    setCount(count-1);
  }
  const handleNextClick=() =>{
    setCount(count+1);
  }
  
  return (
    <MathJaxContext>
      <h2>Nioclass</h2>
      <div className="items">
        <MathJax className="content">{data}</MathJax>
     </div>
      <div className="container">
        <button className='leftbutton' disabled={count<=0} onClick={handlePrevClick}>Previous</button>
        <button className='rightbutton' disabled={count>=2} onClick={handleNextClick}>Next</button>
      </div>
    </MathJaxContext>
        
  );
}

export default App;