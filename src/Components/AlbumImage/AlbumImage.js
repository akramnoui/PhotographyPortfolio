import React from "react"
import './AlbumImage.css'



class AlbumImage extends React.Component{
   

        render(){
            

            return(
                   
                        <div className="polaroid1">
                             <img className="shown" src={require(`../../assets/${this.props.display}`)}  alt="5 Terre"  />
                        </div>
            

            );


        }

}
export default AlbumImage ;