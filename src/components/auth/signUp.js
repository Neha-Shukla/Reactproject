import React, { useState } from 'react';

function SignIn(){
    const [email,setEmail]=useState(null);
    const [password, setPassword] = useState(null);
    const [firstName,setFirstName] = useState(null);
    const [lastName,setLastName] = useState(null);

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
        if(state==='firstName')
        {
            setFirstName(e.target.value);
        }
        if(state==='lastName')
        {
            setLastName(e.target.value);
        }
    }
    function onSubmitHandle(e){
        e.preventDefault();
        console.log(email,password,firstName,lastName);
    }
    return(
        <div className="container">
            <form onSubmit={onSubmitHandle} className="white">
                <h5 className="grey-text text-darken-3">
                    SignUp
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
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text" id="firstName" onChange={onChangeHandle}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">LastName</label>
                    <input type="text" id="lastName" onChange={onChangeHandle}></input>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;