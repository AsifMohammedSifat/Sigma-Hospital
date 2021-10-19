import React from 'react';
import {useState,useEffect} from 'react'
import { Carousel } from 'react-bootstrap';
import './Home.css';
import SingleService from '../Services/SingleService/SingleService';
import Doctor from './Doctor/Doctor';
import Gallery from './Gallery/Gallery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListOl,faImages,faUserMd } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
    // fonst awesome icon 
        const serviceIcon = <FontAwesomeIcon icon={faListOl} />
        const imagesIcon = <FontAwesomeIcon icon={faImages} />
        const doctorIcon = <FontAwesomeIcon icon={faUserMd} />

    // initialize state of services 
    const [services, setServices] =useState([{id:"",name:" ",description:" ",img:" "}]);

    // doctors state 
    const [doctors,setDoctors]=useState([{name:" ",type:" ",age:" ",country:" ",salary:" ",img:" "}]);

    // gallery state 
    const [images,setImages]=useState([{img:" "}]);

    //  fetcth data service  
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data.slice(0,6)));
    },[])
    //  fetcth data doctors
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data));
    },[])
    // fetch data of gallery 
    useEffect(()=>{
        fetch('./gallery.json')
        .then(res=>res.json())
        .then(data=>setImages(data));
    },[])

    return (
        <div>

            {/* ================banner slider==================  */}
            <Carousel  fade className="carosel-div" style={{marginTop: "70px"}} >       

                {/* item-1  */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src = "https://www.clarendonmedicalcentre.nhs.uk/wp-content/uploads/2016/09/banner_aae1.jpg"
                     alt="Third slide"
                    />

                   {/* banner caption  */}
                    <Carousel.Caption>
                    <h3><span className="banner-head banner-brand fw-bold ">World Best Docotors</span></h3>
                    <p  className="banner-p text-warning fw-bold text-dark">We hire best doctor for  our medical service.We provide a range of specialised  health services for people of all ages in our community.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                {/* item-2 */}
                <Carousel.Item>
                    <img className="banner d-block "
                    src = "https://schneckstage.blob.core.windows.net/schneckmedical/medialibraries/schneckmedical/images/interior%20slides%20%20-%201600x460/emergency-room-banner.png?ext=.png"
                    alt="second slide"/>
                    
                    {/* caption-2  */}
                    <Carousel.Caption>
                    <h3><span className="banner-head banner-brand text-primary fw-bold">Medical Service</span></h3>
                    <p className="banner-p banner-text text-dark fw-bold">We have the most comprehensive medical services in the state, with expert care covering a wide range of illnesses plus emergency and elective surgery, ensuring our community receives the care they need</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* item-3 */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src = "http://www.belledental.com.au/wp-content/uploads/2016/04/HOME-banner.jpg"
                    alt=""
                    />

                    {/* caption-3                      */}
                    <Carousel.Caption>
                    <h3> <span className = "banner-head banner-brand fw-bold" > Specialised support services</span></h3>
                    <p className = "banner-p text-dark fw-bold" > Your care will be multi disciplinary to ensure you can
                    return to your daily activities as soon as possible.
                    We run a range of outpatient and community clinics to help people when they leave hospital.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            {/* banner end  */}

            {/*============================= services start ============================ */}
            <h1 className="bg-warning  text-white fs-1  fw-bold w-50 m-auto rounded-3 mt-5 ">{serviceIcon} Services</h1>

             {/* home->service section card container grid */}
            <div className= " row row-cols-1 row-cols-md-2 g-4 container m-auto" >
                    {
                        
                        services.map(service => <SingleService 
                        key={service.id}                      
                        service={service}
                        ></SingleService>)
                    }
            </div>      


            {/* service end  */}

            {/*============================= our doctors start============================  */}
             <h1 className="text-white fw-bold my-5 w-50 m-auto rounded-3 mt-5 bg-warning">{doctorIcon} Our Doctors</h1>

             {/* grid system for doctors  */}
              <div className= " row row-cols-1 row-cols-md-3 g-2 container m-auto" >
                   {
                        
                        doctors.map(doctor => <Doctor
                        key={doctor.id}                      
                        doctor={doctor}
                        ></Doctor>)
                    }
                   
            </div>  

            {/* ================================our gallery start======================== */}

             <h1 className="text-white fw-bold my-5 w-50 m-auto rounded-3 mt-5 bg-warning">{imagesIcon} Our Gallery</h1>
              {/* grid system for gallery  */}
              <div className= "row gallery-container row-cols-1 row-cols-md-2 g-2 container m-auto" >
                   {
                        
                        images.map(image => <Gallery
                        key={image.id}                      
                        image={image}
                        ></Gallery>)
                    }
              </div>

              {/* =======================footer of home==================== */}

              <footer>
                 {/* container of home footer  */}
            <div className="bg-dark w-75 m-auto text-warning text-center mt-5 p-5 rounded-3">
                <h4>We provide best Doctors for best treatment...</h4>
                <h5>We take care our Pateient with best Treatment.</h5>
                <p>
                    We always try out best.
                </p>
                
                <h6 className="brand-name">SIGMA HOSPITAL</h6>
            </div>
              </footer>





            
        </div>
    );
};

export default Home;