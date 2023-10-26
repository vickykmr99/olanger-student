import React from "react";
// import {Image} from "react"
import logo from "./logo.png"
import "./index.css";
import SocialFlow from "./SocialFlow";
import { Link } from "react-router-dom";
// -----------------import image footer-------//
import facebookp from "../footer/facebookp.png"
import twitternew from "../footer/twitternew.jpeg"
import linkedinp from "../footer/linkedinp.png"
import instagramp  from "../footer/instagramp.png"
import youtubep from "../footer/youtubep.png"
// -----------------import image footer-------//


class Footer extends React.Component {
  render() {
    return (

      <div className="footer-image">

        <div className="footer-links-number-container">

          <div className="footer-contact-quicklinks">
            <div className="footer-heading">Olanger</div>
            <div className="footer-sub heading">Olanger Edu Solution Pvt. Ltd.</div>
            <div className="footer-content">1st & 2nd Floor, Zion Building, <br />Plot No. 273, Sector 10, Kharghar,<br /> Navi Mumbai - 410210</div>
            <div className="footer-content">Toll Free: 1800 203 0577</div>
            <div className="footer-content">Email at: support@.com</div>
            <div className="footer-content">Office Hours: 10 AM to 7 PM (all 7 days)</div>
          </div>

          <div className="footer-contact-quicklinks">
            <div className="footer-heading">Company</div>
            <div className="footer-content">About us</div>
            <div className="footer-content">Careers</div>
            <div className="footer-content">User Policy</div>
            <div className="footer-content">Terms & Conditions</div>
            <div className="footer-content">Privacy Policy</div>
          </div>

          <div className="footer-contact-quicklinks">
            <div className="footer-heading"> Products</div>
            <div className="footer-content">Courses</div>
            <div className="footer-content">Test Series</div>
            <div className="footer-content">Exams</div>
            <div className="footer-content">Prev. Year PDF</div>
          </div>
          
          <div className="footer-contact">
            <div className="footer-heading">Our App</div>
            <a href="http://www.msmeodisha.gov.in/" style={{ textDecoration: "none" }}> <div className="footer-content">Olanger</div></a>
            <a href="https://startupodisha.gov.in/" style={{ textDecoration: "none" }}> <div className="footer-content">Download App</div></a>
            <a href="https://investodisha.gov.in/" style={{ textDecoration: "none" }}><div className="footer-content">Follow us on</div></a>
            <div className="foo-social-media">
              <img className="footersite"
                src={facebookp}
                alt="facebook.png" style={{  borderRadius:'2px', height: 26, width: 26 }}
              ></img>
              <img className="footersite"
                src={twitternew}
                alt="twiter.png" style={{borderRadius:'2px', height: 26, width: 26 }}
              ></img>
              <img className="footersite"
                src={linkedinp}
                alt="in.png" style={{ borderRadius:'2px', height: 26, width: 26 }}
              ></img>
              <img className="footersite"
                src={instagramp}
                alt="insta.png" style={{ borderRadius:'2px', height: 26, width: 26 }}
              ></img>
              <img className="footersite"
                src={youtubep}
                alt="youtube.png" style={{ height: 41, width: 36, paddingTop:'2px' }}
              ></img>

            </div>
          </div>
        </div>
        <div className="footer-copyright">Copyright © 2014-2023 Olanger Edu Solutions Pvt. Ltd.: All rights reserved</div>
      </div>

    );
  }
}

export default Footer;
