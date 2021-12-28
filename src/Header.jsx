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
                        <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon><span className="phone-header">022 192 9380</span>
                    </div>
                    <h1 className="title">R.M. Auto Repairs</h1>
                </div>
                <div className="email-facebook-wrapper">
                    <FontAwesomeIcon icon={faEnvelope} className="icon email-facebook"></FontAwesomeIcon><span className="phone-header">rikomahe18@gmail.com</span>
                    <FontAwesomeIcon icon={faFacebook} className="icon email-facebook"></FontAwesomeIcon>
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