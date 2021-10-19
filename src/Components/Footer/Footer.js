import React from 'react';

const Footer = () => {
    return (
        <div className="mt-5">
            {/* footer card  */}
            <div className="card bg-dark text-white mt-2">
            <div className="row g-0 container">
                <div className="col-sm-4 ">
                    {/* footer map iframe left  */}
                    <iframe className="m-auto w-100" title="ProCoders Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236207.0156347899!2d91.67977993957443!3d22.325874170558116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1633350968524!5m2!1sen!2sbd" width="400" height="300"  loading="lazy"></iframe>
                </div>

                <div className="col-sm-8">
                <div className="card-body">
                    <h6 className="card-text">
                         <div className="row row-cols-2 mb-4 d-flex">
          {/* <!-- fotter left branch link --> */}
                           <div className="me-auto">
                                <h6 className="text-uppercase fw-bold mb-4">Our Branch</h6>
                                <p>
                                    <a href="#!" className="text-reset">Chittagong</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Dhaka</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Rajshahi</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Shylet</a>
                                </p>
                                
                           </div>

                           {/* footer right side branch link  */}
                           <div>
                               <h6>Follow Us</h6>
                               <br />
                                <p>
                                    <a href="#!" className="text-reset">Facebook</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Instagram</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Twitter</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">LinkedIn</a>
                                </p>
                                
                           </div>
                        </div> </h6>

                        {/* privacy policy  */}
                    <p className="card-text"><small className="text-white ">All Right Reserved by  SigmaHospital</small></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;