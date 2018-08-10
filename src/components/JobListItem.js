import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';

const JobListItem = ({ duid, id, name, salary, description='', auth}) =>{ 
   console.log(auth.uid);   
    let route;
   if(duid == auth.uid){
      route = 'edit';
   }else{
       route = 'apply';
   }
return(
<Link className="list-item" to={`/${route}/${id}`}>
<div>
<h3 className="list-item__title">{name}</h3>
<p className="list-item__data">{description}</p>
</div>
<h3 className="list-item__data">{numeral(salary / 100).format('$0,0.00')}</h3>
</Link>
)}
 
const mapStateToProps = (state) =>{
    return {
        auth:state.auth
    };
};

export default connect(mapStateToProps)(JobListItem);