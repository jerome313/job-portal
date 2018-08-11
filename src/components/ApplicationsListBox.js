import React from 'react';
 

 const ApplicationListBox = ({name, age, education, experience}) =>{
 
    return(
    <div>
    <div>
    <div className="list-header">   
        <div>Name</div>
       <div className="list-item__data ">{name}</div>
    </div>
   <div className="list-header">   
     <div>Age</div>
     <div>{age}</div>
    </div>
   <div className="list-header">   
     <div>Education</div>
     <div>{education}</div>
   </div>
   <div className="list-header">   
     <div>Experience</div>
     <div>{experience}</div>
    </div>
    </div>
    <br/>
    </div>
 ); 
 }

export default ApplicationListBox;