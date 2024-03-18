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

    const [text , setText] = useState('Enter text here');
    //text = "new state"  //wronge way to change text
    //setText("new text");  //correct way to change text
  return (
    <div>
        <h1>{props.heading} - {text}</h1>
      <div className="form-group">
        <label ></label>
        <textarea className="form-control" name="" id="" value={text} rows="3" onChange={handleOnChange}></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
  )
}
