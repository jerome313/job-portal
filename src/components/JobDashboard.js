import React from 'react';
import database from '../firebase/firebase';
import ApplicationsList from './ApplicationsList';




  class JobDashboard extends React.Component{
    constructor(props){
      super(props);
    }
    state={
      jobId:this.props.match.params.id,
      app:[]
    }

 
    getApplications = () =>{
    return database.ref(`users/jobs/${this.state.jobId}/applications`).once('value').then((snapshot)=>{
      const app = [];
            snapshot.forEach((childSnapshot)=>{
               app.push({
                 id:childSnapshot.key,
                 ...childSnapshot.val()
               });    
            });
            //console.log('fetch success',applications);
            this.setState(()=>({app}))
    });

    
   
     
   
     };
    render(){
      console.log(this.state.app); 
      this.getApplications();
   return(
      <div>
      <div className="page-header">
      <div className="content-container">
         <h1 className="page-header__title">Applications</h1>
         <ApplicationsList applications={this.state.app}/>
       </div>
   </div>
      </div>
    );
  }
}
    export default JobDashboard;