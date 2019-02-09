
import React from 'react';

import ReactDOM from 'react-dom';

import menustyle from '../styles/menustyle.css';

import triagnle from '../images/down copy.png';

import Homepage from './Homepage';

import WhoWeAre from './WhoWeAre';

import MobileMenu from '../components/MobileMenu';

import {BrowserRouter , Route , Link, Redirect} from 'react-router-dom';

import {withRouter} from 'react-router-dom';





//these are const variables of components 



class Menu extends React.Component{

    constructor(props) {
        super(props);
       
        this.state = {
            active: false,
        };
    }

    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


    render(){
        return(
             <BrowserRouter>
            <div className='menu'>
            
                <ul>
                        
                 <Link to='/'>Καλωσήρθατε</Link>
                 <Link to='/about-us' >Ποιοί είμαστε</Link>
                    
                    
                    <a><li onClick={() => this.setState({active: !this.state.active})} className='dropbtn'>Προϊόντα < img className='arrow' src={triagnle} /></li></a>
                        
                            <div id="myDropdown" className={ this.state.active ? "show":"hide"}>
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                            </div>
                    
                    <a><li>Συνταγές</li></a>
                    <a><li>Blog</li></a>
                    <a><li>Επικοινωνία</li></a> 
                </ul>
           
             
           
            </div>
            
            </BrowserRouter> 
        );
    }
};

export default withRouter(Menu);