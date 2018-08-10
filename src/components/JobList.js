import React from 'react';
import {connect} from 'react-redux'; 
import JobListItem from './JobListItem';
import selectJobs from '../selectors/jobs';

const JobList = (props) => (
<div className="content-container">
<div className="list-header">   
   <div className="show-for-mobile">Jobs</div>
   <div className="show-for-desktop">Job</div>
   <div className="show-for-desktop">Salary</div>
</div>
<div className="list-body">

  {   console.log('job',props.jobs)}

    {  props.jobs.length === 0 ?  (
       <div className="list-item list-item--message">
           <span>No Jobs</span>
       </div>
   ):
   (
       props.jobs.map((job)=>(
       <JobListItem key={job.id}{...job}
/>
       )
    )
   ) }   
{console.log('job',props.jobs)}

</div>
</div>
); 

const mapStateToProps = (state) =>{
    return {
        jobs:state.jobs
    };
};

export default connect(mapStateToProps)(JobList);  