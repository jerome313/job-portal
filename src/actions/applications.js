//add application
import database from '../firebase/firebase';

export const addApplication = (application) =>({
     type:'ADD_APPLICATION',
     application
})

export const startAddApplication = (applicationData = {}) =>{
    return (dispatch,getState) =>{
        const duid = getState().auth.uid;
       const {
        name='', 
        education='',
        experience=0,
        age=0,
        resumeURL='',
        id
        } = applicationData;

        const application = {duid, name, education,  experience, age, resumeURL};
        //const id = {id}; 
        console.log(id);
        return database.ref(`users/jobs/${id}/applications/`).push(application).then((ref)=>{ 
            console.log('succesfull');
            dispatch(addApplication({
                id:ref.key,
                ...application
            }));
        });
    };
};


// //set applications
// export const setApplications = (applications) =>({
//     type:'SET_APPLICATIONS',
//     applications
// })

// export const setStartApplications = () =>{
//    return (dispatch,getState) =>{
//        const uid = getState().auth.uid;
//        return database.ref(`users/jobs`).once('value').then((snapshot)=>{
//            const jobs = [];
//            snapshot.forEach((childSnapshot)=>{
//               jobs.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//               });    
//            });
//            dispatch(setJobs(jobs));
//            console.log('db',jobs);
//        });
//    };
// };





