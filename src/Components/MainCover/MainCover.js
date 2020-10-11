import React from "react"
import './MainCover.css'




class MainCover extends React.Component{


        render(){
            

            return(
              <div className="slideshow-container1">
                 <h1 className="main-title">
                     ART&nbsp;.&nbsp;PHOTO&nbsp;.&nbsp;STORY
                  </h1>
                <div className="slideshow-container">

                <img  src={require("../../assets/photo1.jpeg")}  className="img1"  />
                <img  src={require("../../assets/img5.PNG")}  className="img5"  />
         
                <img  src={require("../../assets/img4.JPG")}  className="img4"  />

                  <img  src={require("../../assets/img2.jpg")}  className="img2"  />
                  <img  src={require("../../assets/img3.JPG")}  className="img3"  />
         
                  <img  src={require("../../assets/img6.jpeg")}  className="img6"  />
         
         
                 
         
                </div>
                <h1 className="capturin-text">- Capturing Moments is What we do - </h1>
                <div className="separator"></div>

                </div>
               
            );


        }

}
export default MainCover ;