import React from 'react';
import MobileMenu from '../components/MobileMenu';import homestyle from '../styles/home.css';
import homeimg from '../images/homeimg.JPG';
import logo from '../images/logo2.png';
import hometext from '../images/home-text.jpg';
import HomeMobile from './HomeMobile.js';
import Menu from './Menu'
import {withRouter} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Searchbar from './Searchbar';
import More from './More';



class Homepage extends React.Component {
    //state

    state= { w : window.innerWidth };

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
        
        if (this.state.w > 1000){
        return(
        
        
          <div>
             
            <div className='left-side'>
            <h4 className='welcome'>Καλωσήρθατε</h4>
            <Menu />
                <div className='image-wrapper'>
                 
                 </div>

                 
                
            </div>

            <div className='right-side'>
            <More/>
            <Searchbar/>
                <div className='logo-wrapper'>
                    <img src={logo} />
                </div>
                <br></br>
                
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                <div className='Text'>
                    <h1>Καλωσήρθατε στα αλλαντικά κυρά Δανάη.</h1>
                    <br></br>
                    <h2>Εδώ η ποιότητα είναι οικογενειακή υπόθεση.</h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Στα αλλαντικά κυρά Δανάη εδώ και πολλά χρόνια <b>δημιουργούμε</b> υψηλής ποιότητας αλλαντικά που παράγουμεμε πολλή αγάπη και μεράκι.</p>
                    <img src={hometext}/>
                </div>
            </div>
            
        </div>
        


            
         );
        }
        else{
            return(
            <div>
                    
                <div className='left-side'>
           
                <div className='image-wrapper'>
                <MobileMenu />
                <h4 className='welcome'>Καλωσήρθατε</h4>
                </div>
                </div>
                <More/>
                <Searchbar/>
                <HomeMobile />
            </div>
            
            
            );
        }
    }
};

export default withRouter(Homepage);