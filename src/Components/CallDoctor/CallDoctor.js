import React, { useEffect, useState } from 'react';
import CallCard from './CallCard/CallCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons';


const CallDoctor = () => {
        const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />

    // doctors state 
    const [doctors,setDoctors]=useState([{name:" ",type:" ",age:" ",country:" ",salary:" ",img:" "}]);
     //  fetcth data doctors
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data));
    },[])
    return (
        <div className="py-5">
             {/*============================= our doctors start============================  */}
             <h1 className="text-white fw-bold  my-5 w-50 m-auto rounded-3 mt-5 bg-warning">{phoneIcon} Talk with Our Doctors</h1>

             {/* grid system for doctors  */}
              <div className= "row row-cols-1 row-cols-md-3 g-2 container m-auto" >
                   {
                        
                        doctors.map(doctor => <CallCard
                        key={doctor.id}                      
                        doctor={doctor}
                        ></CallCard>)
                    }
                   
            </div>  

            
        </div>
    );
};

export default CallDoctor;