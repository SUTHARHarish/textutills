import React, {useState} from 'react'

export default function About(props) {
    
    // const [mystyle,setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    //  })
     let mystyle = {
      color: props.Mode ==='dark'?'white':'black',
      backgroundColor: props.Mode === 'dark'?'gray':'white'
     }
    //  const [btntext,setBtnText] = useState("Enable Dark mode")
    // const togglesStyle = ()=>
    // {
    //     if (mystyle.color === 'white') {
    //       setMyStyle({
    //         color:'black',
    //     backgroundColor:'white'
    //       }) 
    //       setBtnText("Enable dark mode") 
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //         backgroundColor:'black'
    //           }) 
    //           setBtnText("Enable light mode")
    //     }
    // }
    return (
    
    <div className="container" style={mystyle}>
        <h1 className='my-2S'>About Us </h1>
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        Textutils given you a way  to analyze text quickly and efficiently. Be it word count, Character count or
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free  to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      TextUtils is a free Character counter tool that provides instsnt Character count & word count statisics for a given text. TextUtils reports the number of words and Character. thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body " style={mystyle}>
        This word counter software works in any web browsers such as Chrome , Firefox , Internet Explorer , Safari , Opera. It suits to count character in facebook ,blog ,books, excel document, pdf document essays etc..
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
   <button onClick={togglesStyle} type="button"className="btn btn-success">{btntext}</button>
</div> */}
    </div>
  )
}
