import React from 'react';

const AboutUs = () => {
    return (
        <div>
            
        <div  style={{marginTop:"100px"}}>

            {/* location card  */}
            <div className="card my-3 container card-style h-100" >
                    <div className="row g-0">
                        {/* banner left image  */}
                        <div className="col-md-8">
                       <iframe className="m-auto mt-4 w-100 rounded-3" title="ProCoders Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236207.0156347899!2d91.67977993957443!3d22.325874170558116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1633350968524!5m2!1sen!2sbd" width="400" height="300"  loading="lazy"></iframe>
                        </div>

                        {/* banner right text  */}
                        <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title"> Lets meet...<br /><span className="banner-brand">Our Location</span> </h5>
                            <p className="card-text">Here we provide our location.You can meet with us and learn freely.</p>
                           <h3 className="text-dark fw-bold">Visit & Learn...</h3>
                           <div>

                               {/* banner right -img  */}
                                 <img className="w-75 img-fluid" src="https://th.bing.com/th/id/OIP.2gOVIVPUWbCvfdsiZyuuTAHaFm?pid=ImgDet&rs=1" alt="" />
                           </div>
                         
                        </div>
                        </div>
                    </div>
            </div>



            {/* our mission card  */}
            
            <div className="card my-3 container card-style h-100" >
                    <div className="row g-0">
                        {/* banner left image  */}
                        <div className="col-md-8">
                     <img className="img-fluid" src="https://th.bing.com/th/id/OIP.HOQVNTCPVkZSKmfWXjiutwHaHa?pid=ImgDet&rs=1" alt="" />
                        </div>

                        {/* banner right text  */}
                        <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title"> <span className="banner-brand">Our Misson</span> </h5>
                            <p className="card-text">We work to make the world Well.We will serve free treatment all over the country.</p>
                           <h3 className="text-dark fw-bold">Lets change the world </h3>
                           <div>
                                 <img className="w-100 img-fluid" src="https://image.freepik.com/free-photo/globe-hands-protective-mask-gloves-guy-girl-africans_1157-46652.jpg" alt="" />
                           </div>
                         
                        </div>
                        </div>
                    </div>
            </div>


            {/* email us card              */}
            
            
        </div>
            
        </div>
    );
};

export default AboutUs;