import React from "react"

export default function About(props) {

  var bgColor2;
    switch(props.mode){
      case 'dark': bgColor2 = props.modeColors.dark2; break;
      case 'blue': bgColor2 = props.modeColors.blue2; break;
      case 'green': bgColor2 = props.modeColors.green2; break;
      case 'red': bgColor2 = props.modeColors.red2; break;
      default: bgColor2 = 'white'; break;
  }
  return (
    <div className="container my-3" style={{border: `1px solid ${bgColor2 !== "white"? "white":"black"}`, borderRadius: "5px"}}>
        <h1 className="my-2">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={{backgroundColor: bgColor2, color: `${bgColor2 !== "white"? "white":"black"}`}}>
                <h2 className="accordion-header" id="headingOne">
                    <button  className="accordion-button" type="button" style={{backgroundColor: bgColor2, color: `${bgColor2 !== "white"? "white":"black"}`}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze your text
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Textutils gives you a way to analyze your text quickly and efficietly. Be it word count, character count or ideal reading time required.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor: bgColor2, color: `${bgColor2 !== "white"? "white":"black"}`}}>
                <h2 className="accordion-header" id="headingTwo">
                    <button  className="accordion-button collapsed" type="button" style={{backgroundColor: bgColor2, color: `${bgColor2 !== "white"? "white":"black"}`}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils is a free character counter tool that provides instant character count& word count statistics for a given text. TextUtils reports the number of words and characters. thus it is suitable for writing text with word/character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor: bgColor2, color: `${bgColor2 !== "white"? "white":"black"}`, marginBottom: "10px"}}>
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" style={{backgroundColor: bgColor2, color: `${bgColor2 !== "white"? "white":"black"}`}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
