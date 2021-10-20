import React from 'react';
import useAuth from '../../hook/useAuth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF,faGithub} from '@fortawesome/free-brands-svg-icons';



const Login = () => {
     const googleIcon = <FontAwesomeIcon icon={faGoogle} />
     const githubIcon = <FontAwesomeIcon icon={faGithub} />
     const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />

    const {
        user,
        login,
        name,
        email,
        password,
        error,
        signInWithPopup,
        signInWithEmailAndPassword,
        handleGoogleSignIN,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleNameChange,
        handleToggleChange,
        createNewUser,
        toggleLogIn,
        logOut
    }=useAuth();
   return (
    <div className="container p-5 my-5">

        {/* log in or register header  */}
      <h1 className="text-white bg-warning rounded-3">Please {login? 'Login':'Register'}</h1>

      <form onSubmit={handleRegistration}>
           {
           login? '':<div className="mb-3">

              <label htmlFor="inputname" className="form-label">Username</label>
              <input onBlur={handleNameChange} type="text" className="form-control" name="inputname" required/>
            </div>}


            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input onBlur={handleEmailChange} type="email" className="form-control" required/>
              <div  className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required/>
            </div>

            <div>
              <input onChange={toggleLogIn} onClick={handleToggleChange}  className="form-check-input" type="checkbox" name="" id="check" />
              <label  className="form-check-label mx-1" htmlFor="check">Already Register?</label>
            </div>
            <div className="text-danger my-3">{error}</div>
            <button type="submit" onMouseMove={handleToggleChange} className="btn btn-dark text-warning fw-bold">{login? 'Login':'Register'}</button>
            <h6>Sign-in With...</h6>
      </form>
      <form form onSubmit = {
          signInWithPopup
      } >
            <button className="bg-dark p-2 rounded-3 fs-5 me-2 border-0 text-warning fw-bold  ">{facebookIcon}</button>
            <button type="submit" className="bg-dark p-2 rounded-3 fs-5 me-2 border-0 text-warning fw-bold">{googleIcon}</button>
            <button className="bg-dark p-2 rounded-3 fs-5 me-2 border-0 text-warning fw-bold ">{githubIcon}</button>
    </form>

    </div>
  );

};

export default Login;