import React from 'react'

export default function Alert(props) {

    const Capitalize = (text)=>{
        return text.toLowerCase().split(' ').map(arr=>arr.charAt(0).toUpperCase() + arr.slice(1)).join(' ');
      }

    return (
        <div style={{height: "50px"}}>
            {props.alert1 && <div>
                <div className={`alert alert-${props.alert1.type} alert-dismissible fade show`} style={{ backgroundColor: props.mode === 'light'? null:'rgb(255, 255, 255, 0.3)', color: props.mode === 'light'? null:'black'}}role="alert">
                    <strong>{Capitalize(props.alert1.type)} : </strong>{props.alert1.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>}
        </div>
        
    )
}
