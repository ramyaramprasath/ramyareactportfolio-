import React, { useState } from "react";

const useForm = (validate) => {

     const[values, setValues] = useState({
        username:"",
        email:"",
        password:"",
    
     });

     const[errors, setErrors] = useState({});

     const handleChange = (e) => {
        const { name,value } = e.target;

        setValues ((prevvalues)=>{
            return {
                ...prevvalues,
                [name]:value,


            };
        });
    };

        const handleSubmit = (event) => {
            event.preventDefault();

            setErrors(validate(values));
        };

    return{ handleChange, values, handleSubmit, errors};
};

export default useForm;