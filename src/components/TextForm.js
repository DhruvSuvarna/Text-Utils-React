import React, {useState} from 'react';

export default function TextForm(props) {

  const HandleUpClick = ()=>{
        //console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Convert to Uppercase has been Enabled", "success");
  }

  const HandleDownClick = ()=>{
    //console.log("Uppercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Convert to Lowercase has been Enabled", "success");
  }

  const HandleCapClick = ()=>{
    //console.log("Uppercase was clicked");
    let newtext = text.toLowerCase().split(' ').map(arr=>arr.charAt(0).toUpperCase() + arr.slice(1)).join(' ');
    setText(newtext);
    props.showAlert("Capitalize has been Enabled", "success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speak has been Enabled", "success");
  }
  
  const HandleOnChange = (event)=>{
    //console.log("On Change")
    setText(event.target.value);
  }

  function WordCount() {
    let words;
    if(text.length === 0) {
      words = 0;
    }
    else {
      words = text.split(' ').length;
    }
    return words;
  }

  const [text, setText] = useState("");

  var bgColor;
  switch(props.mode){
    case 'dark': bgColor = props.modeColors.dark2; break;
    case 'blue': bgColor = props.modeColors.blue2; break;
    case 'green': bgColor = props.modeColors.green2; break;
    case 'red': bgColor = props.modeColors.red2; break;
    default: bgColor = 'white'; break;
  }

  return (
    <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} id="myBox" onChange={HandleOnChange} style={{backgroundColor: bgColor, color: props.mode==='light'?'black':'white'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={HandleUpClick}>Convert to Upper Case</button>  
            <button className="btn btn-success mx-1" onClick={HandleDownClick}>Convert to Lower Case</button>  
            <button className="btn btn-dark mx-1" onClick={HandleCapClick}>Capitalize</button>  
            <button className="btn btn-warning mx-1" onClick={speak}>Speak</button>
        </div>

        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>{WordCount()} words and {text.length} characters</p>
          <p>{0.008*WordCount()} Minutes Read</p>
          <h2>Preview</h2>
          <p>{text.length === 0? "Enter something in the above Textbox to preview it here":text}</p>
        </div>
    </>
  )
}