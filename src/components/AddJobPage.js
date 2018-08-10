import React from 'react';
import { connect } from 'react-redux';
import { startAddJob } from '../actions/jobs'; 
import AddJobForm from './AddJobForm';

export class AddJobPage extends React.Component{
 
  onSubmit = (job) => {
    this.props.dispatch(startAddJob(job));
   this.props.history.push('/');
    }
    
    
  render(){ 
    return( 
    <div>
      <div className="page-header">
         <div className="content-container">
           <h1 className="page-header__title">Post a Job</h1>
          </div>
      </div>
      <div className="content-container">
       <AddJobForm  
        onSubmit={this.onSubmit}
       />
       </div>
    </div>); 
  }

}

export default connect()(AddJobPage);