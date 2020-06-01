import React, { useState } from 'react';

function SignIn(){
    const [email,setEmail]=useState(null);
    const [password, setPassword] = useState(null);
    function onChangeHandle(e){
        const state = e.target.id;
        if(state==='email')
        {
            setEmail(e.target.value);
        }
        if(state==='password')
        {
            setPassword(e.target.value);
        }
    }
    function onSubmitHandle(e){
        e.preventDefault();
        console.log("email: ",email,"password: ",password);
    }
    return(
        <div className="container">
            <form onSubmit={onSubmitHandle} className="white">
                <h5 className="grey-text text-darken-3">
                    SignIn
                </h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={onChangeHandle}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={onChangeHandle}></input>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">SignIn</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;