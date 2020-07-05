import React from "react"
import './Presentation.css'




class Presentation extends React.Component{


        render(){
            

            return(
                <div className="flex-container3">
                   
                    <div className="profile-pic" >
                        <img  src={require("../../assets/ProfileP.JPG")}  className="profile-picture"  />
                    </div>
                    <div className="text">
                        <h1 className="profile-text">
                             Behind The Camera
                        </h1>
                        <p className="profile-text"> "Lorem ipsum dolor sit amet,  consectetur adipiscing elit <br/>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco <br/>laboris nisi ut aliquip ex ea 
                            " </p>

                    </div>

                </div>
               
            );


        }

}
export default Presentation ;