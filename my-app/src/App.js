import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import List from './List';
import {cssOb,errorStyle} from './styles.js';
import useForm from './useForm.js';
import Errors from './Errors.js';
import {useState,useEffect} from 'react';



export default function App(){

  const [values,handleChange] = useForm(); 
  const [formErrors,setFormErrors] = Errors();
  const [list,setList] = useState([]);
  const [isSubmit,setIsSubmit] = useState('');

  const regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 

  const validate = (values) =>{
      if(!(values.name)){
          setFormErrors(state => ({...state,'name':'name is required'}));
      }else{
        setFormErrors(state => ({...state,'name':''}));
  
      }
  
  
      if(!(values.email)){
          setFormErrors(state => ({...state,'email':'email is required'}));
      }else{
        if(!regex.test(values.email)){
          setFormErrors(state => ({...state,'email':'email is incorrect'}));
  
        }else{
          setFormErrors(state => ({...state,'email':''}));
  
        }
      }
  
      if(!(values.password)){
          setFormErrors(state => ({...state,'password':'password is required'}));
  
      }else{
        setFormErrors(state => ({...state,'password':''}));
  
      }
  }



const handleSubmit = e =>{
  e.preventDefault();
  validate(values);
  setIsSubmit(true);
}



useEffect(()=>{
let numberOfErrors = Object.values(formErrors).filter(e=>e !== '');

if(numberOfErrors ==0 && isSubmit){


setList(state =>{
  return[
...state,
values

  ]
 
});
}


},[formErrors]);








  return (

    <div className="App">
       {/* <pre>{JSON.stringify(values,undefined,2)}</pre> */}
     <Box onSubmit={handleSubmit}  style={cssOb}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          // error
          id="outlined-error"
          label="Name"
          // defaultValue="Insert name"
          variant="outlined"
          name='name'
          value = {values.name}
          onChange={handleChange}

        />
        {formErrors.name && 
        <div>
           <br/>
        <span style={errorStyle}>  
          {formErrors.name}
          </span>
          </div>
         }
        <br/>
        <TextField
          // error
          id="outlined-error-helper-text"
          label="Email"
          // defaultValue="Insert email"
          variant="outlined"
          // helperText="Incorrect entry."
          name='email'
          value = {values.email}
          onChange={handleChange}


          />

{formErrors.email && 
<div style={{paddingBottom:'20px'}}>
<br/>
        <span style={errorStyle}>
          {formErrors.email}
          </span>
          <br/>
          </div>
         }
      </div>
      <div>
        <TextField
          // error
          // required
          type='password'
          id="filled-error"
          label="Password"
          // defaultValue="Insert password"
          variant="outlined"
          // variant='standard'
          name='password'
          value = {values.password}
          onChange={handleChange}


        />
     {formErrors.password && 
       <div>
       <br/>
               <span style={errorStyle}>
                 {formErrors.password}
                 </span>
                 </div>
         }
      </div>
      <div>
 
      </div>
      <Button style={{marginTop:'20px',marginBottom:'20px'}} type='submit'
       variant="contained"
     >Submit</Button>

    </Box>
    <List setList={setList} list={list}/>
    </div>

  );
}

