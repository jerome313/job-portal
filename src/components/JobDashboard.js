import React from 'react';
import ApplicationsList from './ApplicationsListBox';
import database from '../firebase/firebase';

const JobDashboard = (props) => {
  const jobId = props.match.params.id;
  console.log(jobId);
   const getApplications = () =>{
    return database.ref(`users/jobs/${jobId}/applications`).once('value').then((snapshot)=>{
      const applications = [];
            snapshot.forEach((childSnapshot)=>{
               applications.push({
                 id:childSnapshot.key,
                 ...childSnapshot.val()
               });    
            });
            return applications;
          console.log(snapshot.val());
    });
   }
   
   const applications = getApplications();
   console.log('applications',applications);
    return(
      <div>
      <div className="page-header">
      <div className="content-container">
         <h1 className="page-header__title">Applications</h1>
         <ApplicationsList/>
       </div>
   </div>
      </div>
    );
  }
    export default JobDashboard;