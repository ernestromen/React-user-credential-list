import React, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';


const List = (prop) => {
    let finalList = '';
    let mapped ='';
    const deleteTask = (e)=>{
        if(e.target.tagName ==='TH'){
            let name = e.target.parentNode.children[0].innerHTML;
            mapped = prop.list.filter(e=>{
                if(e.name !== name){
                    return true;
                }else{
                    return false;
                }

            });

        }else if(e.target.tagName ==='path'){
            console.log(e.target.parentNode.parentNode.parentNode.children[0].innerHTML);
            let name = e.target.parentNode.parentNode.parentNode.children[0].innerHTML;
             mapped = prop.list.filter(e=>{
                if(e.name !== name){
                    return true;
                }else{
                    return false;
                }

            });
        }
        prop.setList(mapped);
         }


   if(prop.list.length>0){
    finalList =  prop.list.map(e=>{
    if(e.name !== 'undefined'){
return <tr style={{borderBottom:'1px solid black'}}><th>{e.name}</th><th>{e.email}</th><th>{e.password}</th><th onClick={deleteTask}><i className="fas fa-trash"></i></th></tr>
        }
     })
   }

 

return (
<div> 
      

{
   prop.list.length>0 ?
<div style={{marginTop:'30px'}} className='container'>
    <div className='row'>
        <div className='col-12'>
        <table className="table border border-dark">
  <thead className="thead-dark">
    <tr>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">delete</th>
    </tr>
    </thead>
<tbody>{finalList}</tbody>
  </table>
        </div>
    </div>
</div>: <h1 style={{textAlign:"center",marginTop:'30px'}}>Submit some data in the form</h1> 

}

 
</div>
)
}

export default List
