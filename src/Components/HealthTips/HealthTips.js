import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


const HealthTips = () => {
     // fonntawwesome icon 
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
  
    return (
        <div className="mt-5 pt-5">
            <h3 className="text-white fw-bold my-5 w-75 m-auto rounded-3 mt-5 bg-warning">Describely {emailIcon}Email us your proplem.We will solve your problem as soon as possible</h3>
            <div className="card my-5 container card-style h-100" >
                    <div className="row g-0">
                        {/* banner left image  */}
                        <div className="col-md-5">
                            <img  className="img-fluid " src="https://th.bing.com/th/id/R.fc6c22229108a171a17af9de34512c4a?rik=tcVbS8pmbuYIPw&pid=ImgRaw&r=0" alt="" />
                
                        </div>

                        {/* banner right text  */}
                        <div className="col-md-7">
                        <div className="card-body">

                            {/* form of send mail  */}
                      <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label fs-4 fw-bold">Email address</label>
                                <input type="email" value="sigmahospital@gamil.com" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label fs-4 fw-bold">Your Problem</label>
                                <textarea  type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-warning text-white fw-bold">Submit</button>
                 </form>
                 {/* form end  */}
                         
                        </div>
                        </div>
                    </div>
            </div>
            
        </div>
    );
};

export default HealthTips;