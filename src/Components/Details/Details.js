import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {detailsId}=useParams();
    return (
        <div>

            <h1 className="my-5 py-5">this is {detailsId}</h1>
        </div>
    );
};

export default Details;