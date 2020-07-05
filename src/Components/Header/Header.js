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
              
               <ul class="nav-list">
                        <div class="menu-icons close">
                            <i class="icon ion-md-close"></i>
                        </div>
                        <li class="nav-item">
                            <a href="#" class="nav-link current">Home</a> 
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Pricing</a> 
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">booking</a> 
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">About</a> 
                        </li>
                    </ul>
             </nav>
            );


        }

}
export default Header ;