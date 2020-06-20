import React from "react"
import './AlbumImage.css'



class AlbumImage extends React.Component{
   

        render(){
            

            return(
                   
                        <div className="polaroid1" style={{'transform': `translateY(-${this.props.index*(200/3)}%`}}>
                             <img className="shown" src={require(`../../assets/${this.props.display}`)}   />
                        </div>
            

            );


        }

}
export default AlbumImage ;