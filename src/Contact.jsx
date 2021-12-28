// map, facebook page, phone, email, address, opening hours.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

export function Contact () {
    return( 
    <>
        <a id="contact"><h1 className="category">Contact</h1></a>
        <h2>Phone</h2>
        <a href="tel:+64221929380"><FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon><span>022 192 9380</span></a>
        <h2>Facebook</h2>
                <FontAwesomeIcon icon={faFacebook} className="icon"></FontAwesomeIcon>
        <h2>Email</h2>
                <a href="mailto:rikomahe18@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon><br /><span>rikomahe18@gmail.com</span></a>
        <h2>Opening Hours</h2>
        <h2>Address</h2>
        <address>
            <p>4 Hautonga Street <br/> Petone,<br/> Lower Hutt</p>
        </address>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.1211603393833!2d174.89341332926176!3d-41.23299999870492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38abcbf78e3407%3A0xf7d5ffb2ddc4f983!2s4%20Hautonga%20Street%2C%20Petone%2C%20Lower%20Hutt%205012!5e0!3m2!1sen!2snz!4v1640122456321!5m2!1sen!2snz" title="Location" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
    </>
    )
    //map

}