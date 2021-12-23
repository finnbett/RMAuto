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
                <h1 className="title">R.M. Auto Repairs</h1>
                <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon><span className="phone-header">022 192 9380</span>
                <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFacebook} className="icon"></FontAwesomeIcon>

                
                <h2 className="link">Services</h2>
                <h2 className="link">Contact</h2>


            </div>
        </>
    )
  
}

// return (<>
//     <img src="./rmautosjpg3.png" alt="logo" />
//     </>
// )