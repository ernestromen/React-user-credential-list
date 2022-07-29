import { useState } from "react";

import React from 'react'

const UseForm = () => {
    const [formState, setFormState] = useState({name:'',email:'',password:''});
    const handleChange = e =>{
    const {name,value} = e.target;
    setFormState(formState => ({...formState,[name]:value}));
    }
    return [formState,handleChange];
}

export default UseForm
