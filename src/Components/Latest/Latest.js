import React from "react"
import './Latest.css'




class Latest extends React.Component{


        render(){
            

            return(
                <div className="grid-1">
                   
                    <div className="Latest-work" >
                        <h1 className="Latest-title">Latest Work</h1>
                    </div>
                    <div className="Latest-images">
                        <div className="div1"></div>
                        <div className="div2"></div>
                        <div className="div3"></div>
                        <div className="div4"></div>
                        <div className="div5"></div>
                        <div className="div6"></div>
                        <div className="div7"></div>
                     

                    </div>
                    <div className="Contact-us" >
                        <h1 className="Interested">Interested in working with us ?</h1>
                        <h2 className="let-talk"> Let's talk Now !  </h2>
                    </div>

                </div>
               
            );


        }

}
export default Latest ;