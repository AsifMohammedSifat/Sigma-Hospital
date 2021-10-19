import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';

const Services = () => {
        // initialize state 
    const [services, setServices] =useState([{id:"",name:" ",description:" ",img:" "}]);

    // effect for fetcth data 
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div style = { { marginTop: "90px" }}>
               {/* services div  */}
            <h1 className="text-white fw-bold w-50 m-auto rounded-3 mt-5 bg-warning">Services</h1>

             {/* card container grid */}
            <div className= " row row-cols-1 row-cols-md-2 g-4 container m-auto" >
                    {
                        
                        services.map(service => <SingleService 
                        key={service.id}                      
                        service={service}
                        ></SingleService>)
                    }
            </div> 
            
        </div>
    );
};

export default Services;