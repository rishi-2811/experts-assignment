import Navbar from "../../components/navbar/navbar";
import './landing.css'

export const LandingPage=()=>{
    return(
        <div className="container">
            <Navbar/>
            <div className="land-image-container">
                <img src="homepage-min.png" alt="Get started"/>
            </div>
        </div>
    )
}
