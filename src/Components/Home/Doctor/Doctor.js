import React from 'react';
import './Doctor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Doctor = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
  
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
                
                    </div>
            </div>

            
        </div>
    );
};

export default Doctor;