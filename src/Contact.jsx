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
                                <p>4 Hautonga Street <br/> Petone<br/> Lower Hutt</p>
                            </address>
                            
                      
                    </div>
                    
                    
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.1211603393833!2d174.89341332926176!3d-41.23299999870492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38abcbf78e3407%3A0xf7d5ffb2ddc4f983!2s4%20Hautonga%20Street%2C%20Petone%2C%20Lower%20Hutt%205012!5e0!3m2!1sen!2snz!4v1640122456321!5m2!1sen!2snz" title="Location" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
    </>
    )
    

}