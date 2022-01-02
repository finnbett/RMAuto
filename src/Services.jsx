//Servicing, Suspension, Brakes, Clutches, Tune Ups, Exhaust, Panel and Paint, ECU scan, Electrical,
//General Mechanical,Tyres, Rust Repair, Cambelt, Batteries.


export function Services () {
    return(
        <>
            <div className="services-container">
                <a id="services"><h1 className="category">Services</h1></a>
                <div className="list-container">                 
                        <div className="list-child">
                            <ul>
                                <li>Oil Change</li>
                                <li>Servicing</li>
                                <li>Suspension</li>
                                <li>Brakes</li>
                            </ul>
                        </div>
                            <div className="list-child">
                                <ul>
                                    <li>Clutches</li>
                                    <li>Tune  Ups</li>
                                    <li>Exhaust</li>
                                    <li>Panel and Paint</li>
                                </ul>
                            </div>
                        <div className="list-child">
                            <ul>
                                <li>Vehicle Scan</li>
                                <li>Electrical</li>
                                <li>Fault Diagnostics</li>
                                <li>General Mechanical Repairs</li>
                            </ul>
                        </div>
                        <div className="list-child">
                            <ul>
                                <li>Tyres</li>
                                <li>Rust Repair</li>
                                <li>Cambelts</li>
                                <li>Batteries</li>
                            </ul>
                        </div>
                </div>
            </div>
            
        </>
    )
        //list of services
    
}