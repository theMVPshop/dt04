import React, { useState } from "react";
const axios = require('axios');

const SignUp = (props) => {
  //     const alertContext = useContext(AlertContext);
  //     const authContext = useContext(AuthContext)

  //     const { setAlert } = alertContext;
  //   const { Signup, error, clearErrors, isAuthenticated } = authContext;

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

  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    zipcode: "",
    city: "",
    state: "",
  });

  //const { email, password } = user;

  const textChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if(email === '' ||password === ''){
  //     setAlert('Please fill in all fields','danger')
  //   }else{
  //     Signup({
  //       email,
  //       password
  //     })
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...user };
    console.log(payload);
    axios.post('http://localhost:3000/users/signup', {
      ...payload
    })
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Signup</span>
      </h1>
      <form className="wholethang" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={user.email} onChange={textChange} required />
        </div>
        <div class="emailError"></div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={user.password} onChange={textChange} required />
        </div>
        <div class="passwordError"></div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="firstName" name="firstName" value={user.firstName} onChange={textChange} required />
        </div>
        <div class="firstNameError"></div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="lastName" name="lastName" value={user.lastName} onChange={textChange} required />
        </div>
        <div class="lastNameError"></div>
        <div class="firstNameError"></div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="phoneNumber" name="phoneNumber" value={user.phoneNumber} onChange={textChange} required />
        </div>
        <div class="phoneNumberError"></div>
        <div className="form-group">
          <label htmlFor="zipcode">Zipcode</label>
          <input type="zipcode" name="zipcode" value={user.zipcode} onChange={textChange} required />
        </div>
        <div class="zipcodeError"></div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="city" name="city" value={user.city} onChange={textChange} required />
        </div>
        <div class="cityError"></div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="state" name="state" value={user.state} onChange={textChange} required />
        </div>
        <div class="stateError"></div>
        

        <input
          type="submit"
          value="Signup"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default SignUp;
