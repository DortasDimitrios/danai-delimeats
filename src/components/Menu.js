
import React from 'react';


import menustyle from '../styles/menustyle.css';

import triagnle from '../images/down copy.png';


import {Link} from 'react-router-dom';

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
             
               








              
                <div className='menu'>
                
                        
                 <Link to={'/'}>Καλωσήρθατε</Link>
                 <Link to={'/about-us'} >Ποιοί είμαστε</Link>
                 
                    
                    <Link to='/products'>Προϊόντα </Link>
                                                

                    <Link to='/recipes'>Συνταγές</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Επικοινωνία</Link> 
                   

                   
                    
                    
                    
                        
                 </div> 
                
      
        );
    }
};

export default withRouter(Menu);