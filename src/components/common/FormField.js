import React from "react";

export default ({input,label ,type,required,meta})=>{
   
    console.log(input);
    
    return(
        
        <div className="form-group">
           
            <label>{label}</label>
            <input type={type} {...input}required={required}className="form-control" />
           {meta.error && meta.touched &&(
              <div className="text-danger title">{meta.error}</div>  
           ) }
    
        </div>
    )


}