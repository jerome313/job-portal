import React from 'react';
import {connect} from 'react-redux'; 
import ApplicationsListBox from './ApplicationsListBox';


const ApplicationsList = (props) => {
      console.log(props.applications);
    return(
   <div>
    {  
        props.applications.length === 0 ?  (
        <div className="list-item list-item--message">
            <span>No Applications</span>
        </div>
    )
    :
    (
        props.applications.map((application)=>(
        <ApplicationsListBox key={application.id}{...application}
         /> 
         
        )
     )
    ) 
   }
   </div>  
  ); 
};


export default ApplicationsList;

