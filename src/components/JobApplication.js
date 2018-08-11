import React from 'react';
import { connect } from 'react-redux';
import { firebase }from '../firebase/firebase';
import FileUploader from 'react-firebase-file-uploader';
import { startAddApplication } from '../actions/applications';
class JobApplication extends React.Component{
    constructor(props){
        super(props);
      this.state={
        name:'',
        age:'',
        education:'',
        experience:'',
        id:this.props.match.params.id,
        resume: '',
        isUploading: false,
        progress: 0,
        resumeURL: '',
        error:''
    };
    }   
    onNameChange =(e)=>{
       const name = e.target.value;
       this.setState(()=>({ name }));
    }
    onEducationChange=(e)=>{
        const education = e.target.value;
        this.setState(()=>({education}))
    }
    onAgeChange=(e)=>{
        const age = e.target.value;
    if(age.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(()=>({age}))
        }
    }
    onExperienceChange=(e)=>{
      const experience = e.target.value;
  if(experience.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(()=>({experience}))
      }
  }

 handleUploadSuccess = (filename) => {
    this.setState({resume: filename, progress: 100, isUploading: false});
    firebase.storage().ref('resume').child(filename).getDownloadURL()
    .then((url) => this.setState({resumeURL: url}));
    console.log(this.state.resumeURL);
    };

    onSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.name || !this.state.age || !this.state.experience || !this.state.education){
        this.setState(()=>({error:'name age experience education fields are required'}));
        }else{
            this.setState(()=>({error:''}));
            const application = {
                name:this.state.name,
                age:this.state.age,
                experience:this.state.experience,
                education:this.state.education,
                id:this.state.id,
                resumeURL:this.state.resumeURL          
            };
            this.props.dispatch(startAddApplication(application));
            this.props.history.push('/');

        }
    } 
    render(){ 
        console.log('application',this.props);
      return(
          <div>
          <div className="page-header">
             <div className="content-container">
                <h1 className="page-header__title">Job Application</h1>
              </div>
          </div>
          <form className="content-container form" onSubmit={this.onSubmit}>
              {this.state.error && <p className="form__error">{this.state.error}</p>}
             <input
              className="text-input"
              type="text"
              placeholder="name"
              autoFocus
              value={this.state.name}
              onChange={this.onNameChange}
             />
             <input
              className="text-input"
              type="text"
              value={this.state.age}
              placeholder="Age"
              onChange={this.onAgeChange}
             />
             <input
             className="text-input"
             placeholder="education"
             value={this.state.education}
             onChange={this.onEducationChange}
             />
             <input
             className="text-input"
             placeholder="experience"
             value={this.state.experience}
             onChange={this.onExperienceChange}
             />
             <label>Resume:</label>
             {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>  
             }
             {this.state.avatarURL &&
             <img src={this.state.avatarURL} />
             }
             <FileUploader
             accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
             name="resume"
             randomizeFilename
             storageRef={firebase.storage().ref('resume')}
             onUploadStart={this.handleUploadStart}
             onUploadError={this.handleUploadError}
             onUploadSuccess={this.handleUploadSuccess}
             onProgress={this.handleProgress}
             />
             <div>
             <button className="button">Submit Job Application</button>
             </div>
          </form>
          </div>
      );
  }
}

// const mapDispatchToProps = (dispatch) =>(
//    {
//        startAddApplication: ()=> dispatch(startAddApplication())
      
//    }
// );

export default connect()(JobApplication);