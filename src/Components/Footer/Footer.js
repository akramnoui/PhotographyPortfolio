import React from "react"
import './Footer.css'



class Footer extends React.Component{
   

        render(){
            

            return(
                <footer className="site-footer">
                <div className="container-3">
                  
                    <div className="col-sm-12 col-md-6">
                      <h6>About</h6>
                      <p className="text-justify">"Lorem ipsum dolor sit amet,  consectetur adipiscing elit <br/>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco <br/>laboris nisi ut aliquip ex ea 
                            "</p>
                    </div>
          
                    <div className="col-xs-6 col-md-3">
                      <h6>Categories</h6>
                      <ul className="footer-links">
                        <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                        <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                        <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                        <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                        <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                        <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                      </ul>
                    </div>
          
                    <div className="col-xs-6 col-md-3">
                      <h6>Quick Links</h6>
                      <ul className="footer-links">
                        <li><a href="http://scanfcode.com/about/">About Us</a></li>
                        <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                        <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                        <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                        <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                      </ul>
                    </div>
                   
                </div>
                <hr/>
                <div className="Line-container">
         
                    <div >
                      <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
                   <a href="#">Scanfcode</a>.
                      </p>
                    </div>
          
                    <div >
                      <ul className="social-icons">
                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                      </ul>
                    </div>
                </div>
          </footer>
                      
                        
            

            );


        }

}
export default Footer ;