import { Link } from "react-router-dom"


export default function Footer(){

    return (
        <div className="footer">
            <div className="footer-heading"> 
                <p>Contact Us</p>
                <h1><strong>Feel Free </strong>by trying to oreder things maybe youre lucky one with sale</h1>
            </div>
            <div className="footer-contacts">
                <p>contact at:</p>
                <div className="contact-row">
                    <a href="#"> example@gamil.com</a>
                    <div className="footer-mini-menu">
                        <p>How to order</p>
                        <p>suggest products</p>
                        <p>Features</p>
                        <p>Team</p>
                    </div>  
                </div>
            </div>
            <div className="footer-logo">
                <img src="/img/unnamed.png" alt="Logo" className="footer-logo-img"/>
                <p>BackStore</p>
            </div>
            <div className="copyright">
                <p>© BackStore 2026 All rights reserved</p>

                <div className="social-links">
                    <p>Facebook</p>
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    )
}