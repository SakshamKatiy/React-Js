import React ,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
}
const handleDownClick = () =>{
    let DownText = text.toLowerCase();
    setText(DownText);
}

    const [text , setText] = useState('Enter text here');
    //text = "new state"  //wronge way to change text
    //setText("new text");  //correct way to change text
  return (
    <div>
        <div className="container">
        <h1>{props.heading} </h1>
      <div className="form-group">
        <label ></label>
        <textarea className="form-control" name="" id="" value={text} rows="3" onChange={handleOnChange}></textarea>
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>

      <button type="submit" className="btn btn-danger mx-2" onClick={handleDownClick}>Convert to lowercase</button>
      </div>

      <div className="container">
<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text}</p>
    </div>
    </div>
  )
}
