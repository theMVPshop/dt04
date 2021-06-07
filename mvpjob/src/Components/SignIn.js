import React, { useState } from "react";
import Navigation from "./Navigation";

const SignIn = (props) => {
//     const alertContext = useContext(AlertContext);
//     const authContext = useContext(AuthContext)
  
//     const { setAlert } = alertContext;
//   const { login, error, clearErrors, isAuthenticated } = authContext;
  
//   useEffect(()=>{
//     if(isAuthenticated){
//       props.history.push('/')
//     }
  
//     if(error === 'Invalid Credentials'){
//       setAlert(error, 'danger');
//       clearErrors()
//     }
//     //eslit-disable-next-line
//   },[error, isAuthenticated, props.history]);
  
  
    // const [user, setUser] = useState({
    //   email: '',
    //   password: '',
    // });
  
    // const { email, password } = user;
  
    // const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  
    // const onSubmit = (e) => {
    //   e.preventDefault();
    //   if(email === '' ||password === ''){
    //     setAlert('Please fill in all fields','danger')
    //   }else{
    //     login({
    //       email,
    //       password
    //     })
    //   }
    // };

    return(
        <form>
        <Navigation/>
        <h3>Register</h3>

    <div className="registration-form">
        
      
        <div className="form-group-2">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group-2">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button className="create-account" type="submit" className="btn btn-dark btn-lg btn-block">Register</button>

        <p className="forgot-password text-right">
            Already registered? <a href="/Login">log in</a>
        </p>
        </div>
    </form>
)
}

export default SignIn