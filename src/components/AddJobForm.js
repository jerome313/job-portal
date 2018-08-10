import React from 'react';



class AddJobForm extends React.Component{
    constructor(props){
        super(props);
      this.state={
        name:'',
        description:'',
        salary:'',
        error:''
    };
    }   
    onNameChange =(e)=>{
       const name = e.target.value;
       this.setState(()=>({ name }));
    }
    onDescriptionChange=(e)=>{
        const description = e.target.value;
        this.setState(()=>({description}))
    }
    onSalaryChange=(e)=>{
        const salary = e.target.value;
    if(!salary || salary.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(()=>({salary}))
        }
    }
    
    onSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.name || !this.state.salary){
        this.setState(()=>({error:'please provide job name and salary'}));
        }else{
            this.setState(()=>({error:''}));
            this.props.onSubmit({
                name:this.state.name,
                salary:parseFloat(this.state.salary ,10) * 100,
                description:this.state.description
            });
        }
    } 
    render(){
      return(
          <form className="form" onSubmit={this.onSubmit}>
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
              value={this.state.salary}
              placeholder="Salary"
              onChange={this.onSalaryChange}
             />
             <textarea
             className="textarea"
             placeholder="add a description for the job (optional)"
             value={this.state.description}
             onChange={this.onDescriptionChange}
             />
             <div>
             <button className="button">Submit Job</button>
             </div>
          </form>
      );
  }
}

export default AddJobForm;