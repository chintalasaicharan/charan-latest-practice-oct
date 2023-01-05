
import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';

function LoginUrl() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    // const history=useHistory();
    // useEffect(()=>{
    //     if(localStorage.getItem('use-info')){
    //         history.push('/hello')
    //     }
    // },[])

    async function Login(){
        console.log(email,password)
        let items={email,password};
        let result=await fetch("http://localhost:8000/api/login",{
            method:'POST',
            headers:{
                "content-type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(items)

        });
        result= await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        // history.push("/hello")
    }
    return (
        <div>
            <center>
                <h1>LOGIN PAGE</h1>
            </center>
            <div className='col-sm-6 offset-sm-3'>
                <div>
                    <input type="text" placeholder="Enter Email" className="form-control" 
                    onChange={(e)=>setEmail(e.target.value)} />
                </div><br/>
                <div>
                    <input type="password" placeholder="Enter Password" className="form-control" 
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div><br/>
                <div>
                    <button type='buttom' className='btn btn-primary' onClick={Login}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginUrl;