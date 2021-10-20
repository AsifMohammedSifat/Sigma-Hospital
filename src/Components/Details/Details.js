import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useService from '../../hook/useService';

const Details = () => {
    const {detailsId}=useParams();
    const [services]=useService();
    const service=services.find(data=>data.id==detailsId);
    
    return (
        <div div className = " row row-cols-1 row-cols-md-2 g-4 container m-auto">
            {/* data pass by card  */}
            <div className="card details-card card-style h-100">
                {/* card img  */}
                <img src={service?.img} className="card-img-top w-75 rounded-pill mx-auto" alt="..."/>
                <div className="card-body">
                    {/* name  */}
                    <h6 className="card-title"><span className="card-value">{service?.name}</span></h6>   
                    {/* Description  */}
                    <p className="card-title">Description:<span >{service?.description}</span></p>   
                
                </div>

                {/* details button of card  */}
                <div className="card-footer">
                    <Link to="/home" >
                        <button className="btn btn-warning text-white fw-bold">Go to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;