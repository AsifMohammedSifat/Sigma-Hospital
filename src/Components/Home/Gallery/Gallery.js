import React from 'react';
import './Gallery.css';

const Gallery = (props) => {  
    const {img}=props.image;//destructing of object
    return (
        <div>
            <div className="col">
                        <img src={img} className="card-img-top card-style p-3 mt-2   mx-auto rounded-3" alt="..."/>                       
                          
                        </div>
        </div>
         
    );
};

export default Gallery;