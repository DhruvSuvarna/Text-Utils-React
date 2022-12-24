import React, {useState} from 'react'

export default function About() {

  const [myStyle1, setMyStyle1] = useState({
    color : 'black',
    backgroundColor : '',
    borderRadius : '7px',
    border : '1px solid'
  })

  const [myStyle2, setMyStyle2] = useState({
  })

  const [myStyle3, setMyStyle3] = useState({
  })

  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle = ()=>{
    if(myStyle1.color === 'black'){
        setMyStyle1({
            backgroundColor: 'rgb(62, 54, 75)',
            color: 'white',
            borderRadius: '7px',
            border : '1px solid'
        })
        setMyStyle2({
            backgroundColor: 'rgb(62, 54, 75)',
            color: 'white'
        })
        setMyStyle3({
            backgroundColor: 'black',
            color: 'white'
        })
        setBtnText("Enable Light Mode")
    }
    else{
        setMyStyle1({
            backgroundColor: '',
            color: 'black',
            borderRadius: '7px',
            border : '1px solid'
        })
        setMyStyle2({
        })
        setMyStyle3({
        })
        setBtnText("Enable Dark Mode");
    }
  }

  return (
    <div className="container my-3" style={myStyle1}>
        <h1 className='my-2'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle2}>
                <h2 className="accordion-header" id="headingOne">
                    <button style={myStyle3} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle2}>
                <h2 className="accordion-header" id="headingTwo">
                    <button style={myStyle3} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle2}>
                <h2 className="accordion-header" id="headingThree">
                    <button style={myStyle3} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <button className='btn btn-warning my-2' onClick={toggleStyle}><b>{btnText}</b></button>
        </div>
    </div>
  )
}
