import React from 'react'
import invite from "../../Assets/body-icons/invite.svg"
import profile from "../../Assets/body-icons/profiles.svg"
import filter from "../../Assets/body-icons/filter.svg"
import edit from "../../Assets/body-icons/edit.svg"
import link from "../../Assets/body-icons/link.svg"
import calender from "../../Assets/body-icons/calender.svg"
import part from "../../Assets/body-icons/participants.svg"
import share from "../../Assets/body-icons/share.svg"

const Title = () => {
    function changeText(){
        var head = document.getElementById("header");
        console.log(head);
        head.contentEditable="true";
    }
    
  return (
    <div className="container">
    <div className="row">
    <div className="col-md-6">
    <span id="header" className="header " contenteditable="false">Mobile App</span>
    <button className="invite" onClick={changeText}><img  src={edit}/></button>
    <button className="invite"><img  src={link}/></button><br/>
    <button className="invite"><img  src={filter}/></button>
    <button className="invite"><img  className="calender" src={calender}/></button>
    </div>

    <div className="col-md-6 mt-auto">
    
    <button className="invite share">
    <img src={invite}/>
    </button>

    <img src={part}/>
    <div>
    <button className="invite share"><img  src={share}/></button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Title