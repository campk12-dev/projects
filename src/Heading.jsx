import React from "react";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const topLogo = "/img/index.svg";

const Heading = () =>{
    return(
        <>
            <div className="contact_heading row_x">

                <div className="icon_wrapper block">
                    <a href="tel:8929306408">
                        <CallIcon/>
                    </a>
                </div>

                <div className="icon_wrapper block">
                    <a href="mailto:info@campk12.com">
                        <EmailIcon/>
                    </a>
                </div>

                <div className="icon_wrapper block">
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/company/campk12/" target="_blank">
                        <LinkedInIcon/>
                    </a>
                </div>

            </div>

            <div className="main_heading row_x">
                <img src={topLogo} alt="CK12"/>
            </div>
        </>
    )
}

export default Heading;