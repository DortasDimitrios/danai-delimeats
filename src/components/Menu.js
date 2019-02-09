
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
                    
                    
                    <Link to='/' onClick={() => this.setState({active: !this.state.active})} className='dropbtn'>Προϊόντα < img className='arrow' src={triagnle} /></Link>
                        
                            <div id="myDropdown" className={ this.state.active ? "show":"hide"}>
                                <Link to='/' href="#home">Home</Link>
                                <Link to='/' href="#about">About</Link>
                                <Link to='/' href="#contact">Contact</Link>
                            </div>
                    
                    <Link to='/'>Συνταγές</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Επικοινωνία</Link> 
                </ul>

           
             
           
            </div>
            
            </BrowserRouter> 
        );
    }
};

export default withRouter(Menu);