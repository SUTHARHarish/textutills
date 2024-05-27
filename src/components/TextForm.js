import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';


export default function TextForm(props) {

    const [getValue, setgetValue] = useState("");
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        // props.showtAlert("Converted to uppercase!","success");
       
    }
    const handleLowClick = ()=>{
        // console.log("UpperCase was clicked " + text);
        let newText = text.toLowerCase(); 
        setText(newText)
        // props.showtAlert("Converted to Lowercase!","success");
    }
    
    const handleClearClick = ()=>{
        // console.log("UpperCase was clicked " + text);
        let newText = '';
        setText(newText)
        // props.showtAlert("All text are Clear!","success");
    }
    const hendleonChange = (event)=>{
        console.log("hendleonChange was clicked")
        setText(event.target.value);

    }
    const handlExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // props.showtAlert("Remove the extert Spaces","success");
    }
    const handleCopy = ()=>{
        // var text = document.getElementById("mybox")
        // text.select();
        // // setText(event.target.value);
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        // props.showtAlert("Copy to all the text","success");

    }
    const [text,setText] = useState('');

    const notify = (e) => toast(e);

  return (
    <>
    <div className="container" style={{color:props.Mode==='dark'?`white`:`black`}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text} style={{backgroundColor:props.Mode==='dark'?`#9b9ba4`:`white`,color:props.Mode==='dark'?`white`:`black`}} onChange={hendleonChange}rows="6"></textarea>
        </div>
        <button  disabled={text.length===0} className="btn btn-primary m-1" onClick={(e) =>{ handleUpClick(); notify(e.target.innerText)}}>Connvert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary m-1" onClick={(e) =>{ handleLowClick(); notify(e.target.innerText)}}>Connvert to Lowcase</button>
        <button disabled={text.length===0} className="btn btn-primary m-1" onClick={(e) =>{ handleClearClick(); notify(e.target.innerText)}}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary m-1" onClick={(e) =>{ handleCopy(); notify(e.target.innerText)}}>Copt text</button>
        <button disabled={text.length===0} className="btn btn-primary m-1" onClick={(e) =>{ handlExtraSpaces(); notify(e.target.innerText)}}>Remove ExtraSpaces</button>
    </div>
    <div className="container my-3" style={{color:props.Mode==='dark'?`white`:`black`}}>
        <h2>Your text Summary</h2>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length}</b> Words and  ,<b>{text.length} </b> Characters  </p>
        <p><b>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to  preview"}</p>
    </div>
    </>
  )
}
