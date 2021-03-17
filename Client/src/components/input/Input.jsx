import React from 'react';
const Input = ({name, label, id,errors, ...rest})=>{
  return(
    <div className="form-group">
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input {...rest} id={id} name={name} placeholder={name} id={name} className="form-control"/>
      </div>
      {errors && <div className="alert alert-danger">
        {errors}
        </div>}
    </div>
  );
}
export default Input;