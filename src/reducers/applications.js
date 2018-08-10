//Applications Reducer
const applicationsReducerDefaultState = [];
export default (state = applicationsReducerDefaultState ,action) =>{
  switch (action.type){
      case 'ADD_APPLICATION':
      return [
          ...state,
          action.application
      ];
      case 'REMOVE_JOB': 
      return state.filter(({ id })=>id !== action.id)
      case 'EDIT_JOB':
      return state.map((job)=>{
          if (job.id == action.id){
             return {
               ...job, 
               ...action.updates
            };
          }else{
              return job
          }
      })
      case 'SET_APPLICATIONS':
      return action.applications;
      default:
      return state;
  }  
};
 