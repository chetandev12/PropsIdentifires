import React, { useState } from 'react'

function NewText(props) {
const [text,setText]=useState('');
const handleOnClick=()=>{
let Newtext=text.toUpperCase();
setText(Newtext);
props.showAlert('Converted To UpperCase','success');
}

const handleLoClick=()=>{
  const Newtext=text.toLowerCase();
  setText(Newtext);
  props.showAlert('Converted to lowercase','success');
}
const handleClearText=()=>{
  let Newtext='';
  setText(Newtext);
}
const handleCopyText=()=>{
  let text=document.getElementById('myBox');
  text.select();
  navigator.clipboard.writeText(text.value);
}
const handleCapitleFirstLetter=()=>{
  let word=text.toLowerCase();
  setText( word.charAt(0).toUpperCase()+word.slice(1));
}
const handleRemoveExSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
}
const handleOnChange=(event)=>{
setText(event.target.value);
}
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.title}</h1>
<div className="mb-3">
  <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className='btn btn-primary mx-1'onClick={handleOnClick}>To UpperCase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}>to lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleClearText}>Cleare Text</button>
<button className='btn btn-primary mx-1' onClick={handleCopyText}>Copy Text</button>
<button className='btn btn-primary mx-1' onClick={handleRemoveExSpaces}>Remove Extra spaces</button>
<button className='btn btn-primary mx-1' onClick={handleCapitleFirstLetter}>Capitle first later</button>
    </div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>Text summary</h1>
  <p>{text.split(" ").length} Word and {text.length} charecters</p>
  <p>{0.008 * text.split(" ").length} Minuts read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter somthing in the textbox above to preview it here"}</p>
</div>
    </>
  )
}

export default NewText;
