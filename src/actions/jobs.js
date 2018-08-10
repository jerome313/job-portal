import uuid from 'uuid'; 
import database from '../firebase/firebase';
//Add Expense
export const addJob = (job)=> ({ 
     type: 'ADD_JOB',
     job
});     

 
export const startAddJob = (jobData = {}) =>{
    return (dispatch,getState) =>{
        const duid = getState().auth.uid;
       const {
        name='', 
        description='', 
        salary=0} = jobData;

        const job = {duid, name, description,  salary};
        return database.ref(`users/jobs`).push(job).then((ref)=>{
            dispatch(addJob({
                id:ref.key,
                ...job
            }));
        });
    };
};
//Remove Expense
export const removeExpense = ({id}={}) =>(
      {
          type:'REMOVE_JOB',
          id
      }
);

export const startRemoveExpense = ({id}={}) =>{
    return(dispatch,getState)=>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/jobs/${id}`).remove().then(()=>{
           dispatch(removeExpense({id}));
       });
    };

};
//edit expense
export const editExpense = (id, updates) =>(
    {
       type:'EDIT_JOB',
       id,
       updates
    }
);

export const startEditExpense = (id ,updates) =>{
    return(dispatch,getState)=>{
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
          dispatch(editExpense(id,updates));
        });
    }
}
export const setJobs = (jobs) =>({
     type:'SET_JOBS',
     jobs
})

export const setStartJobs = () =>{
    return (dispatch,getState) =>{
        const uid = getState().auth.uid;
        return database.ref(`users/jobs`).once('value').then((snapshot)=>{
            const jobs = [];
            snapshot.forEach((childSnapshot)=>{
               jobs.push({
                 id:childSnapshot.key,
                 ...childSnapshot.val()
               });    
            });
            dispatch(setJobs(jobs));
            console.log('db',jobs);
        });
    };
};