import React from 'react';
import './CallCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'


const CallCard = (props) => {
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />
  
    const {name,type,age,country,salary,img}=props.doctor;//destructing of object
    return (
        <div>
            <div className="col">
                    <div className="card card-style " >
                        {/* card img  */}
                        <img src={img} className="card-img-top mt-2 w-50  mx-auto rounded-circle" alt="..."/>
                        
                           {/* card body  */}
                            <div className="card-body">
                             <p className="fs-7 fs-md-5  fw-bold">Name: {name}</p>
                        
                             <p className = "card-text fs-6 fs-md-5 fw-normal" >
                                    <span className="fw-bold"> Type:</span> 
                                    <span>{type}</span> <br />
                                    <span className="fw-bold"> Country:</span>
                                    <span>{country}</span> <br />
                                    <span className="fw-bold"> Age:</span>
                                    <span>{age}</span>  <br />
                            </p>
                            <p className="fw-bold">Salary: {salary}$</p>

                        </div>
                        <div className="card-footer">
                            <button className="bg-warning text-white fw-bold border-0 btn btn-outline-warning rounded-3">{phoneIcon} Call Now</button>
                        </div>
                
                    </div>
            </div>

            
        </div>
    );
};

export default CallCard;