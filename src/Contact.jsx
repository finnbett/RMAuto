// map, facebook page, phone, email, address, opening hours.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

export function Contact () {
    return( 
    <>
        <a href="#contact" id="contact"><h1 className="category">Contact</h1></a>
        <div className="contact-container">
            <div className="contact-child">
                <h2>Phone</h2>
                <a href="tel:+64221929380"><FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon><span>022 192 9380</span></a>
            </div>
            <div className="contact-child">
                <a href="https://m.facebook.com/RM-Auto-Repairs-Ltd-104058145644044/">
                    <h2>Facebook</h2>
                            <FontAwesomeIcon icon={faFacebook} className="icon"></FontAwesomeIcon>
                </a>
            </div>
            <div className="contact-child email">
                <h2>Email</h2>
                        <a href="mailto:rikomahe18@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon><br /><span>rikomahe18@gmail.com</span></a>
            </div>
        </div>
            <div className="address-container">
            <div className="opening-hours">
                <h2 className="opening-hours-heading">Opening Hours</h2>
                <p className="hours">Monday to Friday: <p className="weekdays">5:30pm- 10:30pm</p></p>
                <p className="hours">Weekends: <p className="weekends">9am- 5pm</p></p>
                <img className="sign" src="sign2.jpg" alt="sign" />
            </div>
                <div className="address-child">
                    <div className="address-text">
                        <h2>Address</h2>
                        
                            <address>
                                <p>1/29 Bridge Street <br/> Melling<br/> Lower Hutt</p>
                            </address>
                            
                      
                    </div>
                    
                    
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.497334895935!2d174.8962161!3d-41.210931300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38abab03e368c3%3A0x7d85796e61e272a8!2s29%20Bridge%20Street%2C%20Melling%2C%20Lower%20Hutt%205010!5e0!3m2!1sen!2snz!4v1744808417657!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
    </>
    )
    

}
