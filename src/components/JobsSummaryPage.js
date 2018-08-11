
import React from 'react';
import { connect } from 'react-redux'; 
import selectJobs from '../selectors/jobs';
import { Link } from 'react-router-dom';

export const JobsSummaryPage = ({  jobCount }) => {
const jobWord = jobCount > 1 ? 'jobs' : 'job';
return(
  <div className="page-header">
     <div className="content-container">
    <h1 className="page-header__title">Viewing <span>{jobCount}</span> {jobWord}</h1>
    <div className="page-header__actions">
    <Link className="button" to="/create">Add Job</Link>
    </div>
    </div>  
    </div>
 );
};

const mapStateToProps = (state) =>{
 const jobs = state.jobs;
 return{
   jobCount: jobs.length
 }
}


export default connect(mapStateToProps)(JobsSummaryPage);