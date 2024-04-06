import React from "react";
import  {useState} from 'react';
export default function TextForm(props) {
  const [text,setText]=useState('Enter the text here');
//text ="new text"; //this is the wrong way to chenge the text
//setText='Enter new text';//this is the correct way to chenge the text
   const handleUpClick=()=>{
    // console.log('upercase was clicked'+text);
    let newText= text.toUpperCase();
    setText(newText);
   }
   const handleLoclick=()=>{
let newText=text.toLowerCase();
setText(newText);
   }
   const handleOnChange=(event)=>{
    // console.log(' on change');
    setText(event.target.value);
   }
  
  return (
<>
    <div className="container">
     <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>convert to lowercase</button>
      </div>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Word and {text.length} charecters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
