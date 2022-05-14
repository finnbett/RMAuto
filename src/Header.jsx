// logo with the other contact information
//font highspeed regular, goldman
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"


export function Header () {
    return (
        <>
            <div className="navbar">
                <img src="./rmlogo.png" alt="logo" />
                <div className="title-phone-wrapper">
                    <div className="phone-header">
                    <a href="tel:+64221929380"><FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon><span className="phone-header">022 192 9380</span></a>
                    </div>
                    <h1 className="title">R.M. Auto Repairs</h1>
                </div>
                <div className="email-facebook-wrapper">
                <a href="mailto:rikomahe18@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="icon email-facebook"></FontAwesomeIcon></a><span className="phone-header">rikomahe18@gmail.com</span>
                    <a href="https://m.facebook.com/RM-Auto-Repairs-Ltd-104058145644044/">
                        <FontAwesomeIcon icon={faFacebook} className="icon email-facebook facebook-icon" ></FontAwesomeIcon>
                    </a>
                </div>

                
                <div className="nav-links">
                    <a href="#services"><h2 className="link">Services</h2></a>
                    <a href="#contact"><h2 className="link">Contact</h2></a>
                </div>


            </div>
        </>
    )
  
}

// return (<>
//     <img src="./rmautosjpg3.png" alt="logo" />
//     </>
// )