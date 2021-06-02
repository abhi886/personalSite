import React from 'react';
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";


const Services = () => {
    return (
        <div>
            <div id="services" className="services">
                <h1 className="py-5"> My services </h1>
                    <div className="container"> 
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
                                    <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faDesktop} size="2x" />
                                    </div>
                                    <h3>Web Development</h3>
                                    <p> Create Sites and Web Applications</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faFileCode} size="2x" />
                                    </div>
                                    <h3>Facebook Adds</h3>
                                    <p> This is the web desiug</p>

                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faFacebookF} size="2x" />
                                    </div>
                                    <h3>Facebook Adds</h3>
                                    <p> This is the web desiug</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className='icon' icon={faGoogle} size="2x" />
                                    </div>
                                    <h3>Google Ads</h3>
                                    <p> This is the web desiug</p>

                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Services
