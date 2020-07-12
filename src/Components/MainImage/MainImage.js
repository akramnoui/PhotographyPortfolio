import React from "react"
import './MainImage.css'




class MainImage extends React.Component{


        render(){
            

            return(
                <div className='card-1'>
                    <h1 className='title'>
                      {this.props.Titles[this.props.index]} |
                    </h1>
                <div className="polaroid">
                    <img src={require(`../../assets/${this.props.display}`)} alt="5 Terre"  />
               </div>
               </div>

              

            );


        }

}
export default MainImage ;