import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import {BrowserRouter,Link,Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


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

                            <BrowserRouter>
                                
                              <div className='left-side'>
                              
                                <div className='image-wrapper'>
                                     
                                     <Menu/>  
                                   
                                    <h4 className='welcome'>Ποιοί είμαστε</h4>
                                </div>
                              </div>
                             
                            </BrowserRouter>
                          
                    );
                }
                

             }
}


export default withRouter(WhoWeAre);