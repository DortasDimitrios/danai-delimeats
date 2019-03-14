import React from 'react';
import Menu from './Menu';
import {BrowserRouter,Link,Switch} from 'react-router-dom';
import WhoWeAreStyle from '../styles/WhoWeAreStyle.css';
import {withRouter} from 'react-router-dom';
import aboutdown from '../images/about-down.png';
import twitter from '../images/twitter.png';
import fb from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import MobileMenu from './MobileMenu';
import AboutUs from './AboutUs';
import Searchbar from './Searchbar';
import More from './More';

class WhoWeAre extends React.Component  {


        //state for responsiveness 

        state = { w : window.innerWidth};

        updateWidth(){
            
                let update_width = window.innerWidth;
                this.setState({w:update_width});
            
        }

        /**
        * Add event listener
        */

        componentDidMount() {
            this.updateWidth();
            window.addEventListener("resize", this.updateWidth.bind(this));
        }

        /**
        * Remove event listener
        */
        componentWillUnmount() {
            window.removeEventListener("resize", this.updateWidth.bind(this));
        }



            render(){
                if (this.state.w>1000){
                    return(

                            
                        <div>
                              <div className='left-side'>
                              
                              
                                <div className='image-wrapper-about'>
                                     
                                     <Menu/>  
                                   
                                    <h4 className='welcome'>Ποιοί είμαστε</h4>
                                </div>
                                
                              </div>

                              <div className='right-side'><More/><Searchbar/>
                                                    <AboutUs />
                            </div>
                        </div>

                          
                          
                    );
                }

                    // responsiveness

                else{
                    return(
                        <div>
                            <div>
                                <div className='left-side'>
                                <div className='image-wrapper-about'>
                                <MobileMenu />
                                <h4 className='welcome'>Ποιοί Είμαστε</h4>
                                <More/>
                                <Searchbar/>
                                </div>
                                
                                </div>
                                
                                <AboutUs />
                            </div>
            
                        </div>
                    );
                }
                

             }
}


export default withRouter(WhoWeAre);