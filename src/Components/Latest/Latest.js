import React from "react"
import './Latest.css'




class Latest extends React.Component{


        render(){
            

            return(
                <div className="grid-1">
                   
                    <div className="Latest-work" >
                        <h1 className="Latest-title">Architecture</h1>
                    </div>
                    <div className="Latest-images">
                    <img  src={require("../../assets/arch5.jpeg")}  className="arch5"  />
                     <img  src={require("../../assets/arch1.jpg")}  className="arch1"  />
                     <img  src={require("../../assets/arch6.jpeg")}  className="arch6"  />
                     <img  src={require("../../assets/photo1.jpeg")}  className="arch7"  />
                     <img  src={require("../../assets/arch2.jpeg")}  className="arch2"  />
                     
                     <img  src={require("../../assets/arch3.jpeg")}  className="arch3"  />

                    </div>
                    

                </div>
               
            );


        }

}
export default Latest ;