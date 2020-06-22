import React from "react"
import './MainImage.css'




class MainImage extends React.Component{


        render(){
            

            return(
                <div className="polaroid">
                    <img src={require(`../../assets/${this.props.display}`)} alt="5 Terre"  />
               </div>
              

            );


        }

}
export default MainImage ;