import React, {useState} from 'react';
import './Textutil.css';

export default function Textutil() {
  const [text, setText] = useState('Enter Text Here');

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const handleUpClick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleLowClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleClearBTN = ()=>{
    let newtext = "";
    setText(newtext);
  }
  const handleTitleCase = ()=>{
    let newtext = text.toLowerCase().replace(/(^\w|\s\w)/g,function(c) {
      return c.toUpperCase();
    });
    setText(newtext);
  }
  return (
    <div>
    <div id="input_group">
        <h1>Text Analizer</h1>
        <textarea class="form-control" onChange={handleOnChange} value={text} aria-label="With textarea"></textarea>
        <div id="btn_group">
        <button type="button" onClick={handleUpClick} id="btns"class="btn btn-outline-primary">To UpperCase</button>
        <button type="button" onClick={handleLowClick} id="btns"class="btn btn-outline-primary">To LowerCase</button>
        <button type="button" onClick={handleTitleCase} id="btns"class="btn btn-outline-primary">To Title Case</button>
        <button type="button" onClick={handleClearBTN} id="btns"class="btn btn-danger">Clear Text</button>
        </div>
    </div>
    <div id="Output_group">
      <h1>Text Summary</h1>
      <p>- You Have Entered {text.split(" ").length} Words And {text.length} Characters in Input Box. -</p>

    </div>
    
    </div>
  )
}