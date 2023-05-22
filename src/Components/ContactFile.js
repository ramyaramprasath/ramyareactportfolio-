import React from "react";
import "./ContactFile.css"; 
import useForm from "./useForm";
import validate from "./validate";


const ContactFile = () => {

  const{handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
             <h1>Contact Me</h1> 
            <div className="form-inputs">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                id="username"
                type="text" 
                name="username"
                className="form-input"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}/> 
                {errors.username && <p>{errors.username}</p>}          
                 <br/>

                <label htmlFor="email" className="form-label">Email</label>
                <input 
                id="email"
                type="email" 
                name="email"
                className="form-input"
                placeholder="Enter your email" 
                value={values.email}
                onChange={handleChange}
                />
                 {errors.email && <p>{errors.email}</p>}  
        
                <br/>
                <label htmlFor="password" className="form-label">Password</label>
                <input
                id="password" 
                type="password" 
                name="password"
                className="form-input"
                placeholder="Enter your password" 
                value={values.password}
                onChange={handleChange}  />
                {errors.password && <p>{errors.password}</p>}  
            </div>

            <button className="form-input-btn" type="submit">Submit</button>
            
        </form>
        
    </div>
  );
};

export default ContactFile;