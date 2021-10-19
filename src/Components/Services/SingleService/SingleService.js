import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


const SingleService = (props) => {
    const {id,name,description,img}=props.service;
    // fonntawwesome icon 
    const infoIcon = <FontAwesomeIcon icon={faInfoCircle} />
  
   
    return (
       <div>
            {/* data pass by card  */}
            <div className="card details-card card-style h-100">
                {/* card img  */}
                <img src={img} className="card-img-top w-75 rounded-pill mx-auto" alt="..."/>
                <div className="card-body">
                    {/* name  */}
                    <h6 className="card-title"><span className="card-value">{name}</span></h6>   
                    {/* Description  */}
                    <p className="card-title">Description:<span >{description.slice(0,150)}...</span></p>   
                
                </div>

                {/* details button of card  */}
                <div className="card-footer">
                    <Link to={`/details/${id}`} >
                        <button className="btn btn-warning text-white fw-bold">{infoIcon}  Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;