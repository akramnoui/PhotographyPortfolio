import React from "react"
import './Header.css'




class Header extends React.Component{


        render(){
            

            return(
                <nav>
                <div className="flex-container" >
                  <img className="logo" src={require("./photography.png")}></img>
                  <h2 className="logo-text">Akram's Gallery</h2>
    
                  
                </div>
              
               <ul className="nav-list">
                        <div className="menu-icons close">
                            <i className="icon ion-md-close"></i>
                        </div>
                        <li className="nav-item">
                            <a href="#" class="nav-link current">Home</a> 
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link">Pricing</a> 
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link">booking</a> 
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a> 
                        </li>
                    </ul>
             </nav>
            );


        }

}
export default Header ;