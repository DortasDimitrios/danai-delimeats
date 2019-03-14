import React from 'react';
import style from '../styles/More.css';
import {Link} from 'react-router-dom';
import i2 from '../images/i2.png';
import i3 from '../images/i3.png';
import i4 from '../images/i4.png';
import i5 from '../images/i5.png';
import i6 from '../images/i6.png';
import i7 from '../images/i7.png';


class More extends React.Component{

    constructor(props){
        super(props);
        this.state= { w : window.innerWidth,
           active:false,
          
   };
   
    }
   
   // state= { w : window.innerWidth,
   //         active:false,
   //         query: '',
   //         results : results
   // };

   updateWidth(){
       
           let update_width = window.innerWidth;
           this.setState({w:update_width});
       
   }


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
        if(this.state.w>1000){
        return(
        <div>
        <h2 className='display-more'  onClick={() => this.setState({active : !this.state.active})} style={{zIndex:'20'}}>...</h2>
            
        <div className={this.state.active ? 'more':'none'}>

        
        <div>
            <div className='main-wrapper'>
                <div className='top-posts'>
                <h1>Top Posts and Pages</h1>
                <ul>
                <li><Link to='/'>Καλωσορίσατε</Link></li>
                <li><Link to='/about'>Ποιοί είμαστε</Link></li>
                <li><Link to='/products'>Προϊόντα</Link></li>
                <li><Link to='/recipes'>Συνταγές</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Επικοινωνία</Link> </li>
                <li><Link to='/recipes/burger'>Burger με μπιφτέκι και καπνιστή μπριζόλα</Link> </li>
                <li><Link to='/recipes/spaghetti-apaki'>Spaghetti με pesto λιαστής ντομάτας και απάκι κοτόπουλο</Link> </li>

                </ul>
                <br></br>
                <br></br>
                <br></br>

                <hr className='grayline'></hr>

                <h1>Instagram</h1>

                <div className='instagram-wrapper'>
                    
                    <a href='https://www.instagram.com/p/BuV0Va1HTog/' target='_blank'><img src={i2} /></a>
                    <a href='https://www.instagram.com/p/Br5HVSrn8-N/' target='_blank'><img src={i3} /></a>
                    <a href='https://www.instagram.com/p/BsOZwVngLod/' target='_blank'><img src={i4} /></a>
                    <a href='https://www.instagram.com/p/BsaogwTgB2w/' target='_blank'><img src={i5} /></a>
                    <a href='https://www.instagram.com/p/Bs5oslPAYid/' target='_blank'><img src={i6} /></a>
                    <a href='https://www.instagram.com/p/BtQXgKbHZfm/' target='_blank'><img src={i7} /></a>

                    <a href='https://www.instagram.com/danae_delimeats/' className='see-more' target='_blank'><h1>See more...</h1></a>
                </div>
                <hr className='grayline'></hr>

                <a><h1>Το παραδοσιακό αλλαντικό της κυρά Δανάης</h1></a>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fallantikadanah%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style={{width:"600", height:"800", border:'none' ,overflow:'hidden', scrolling:"yes", frameborder:"0" ,allowTransparency:"true", allow:"encrypted-media"}} ></iframe>
            </div>
        </div>
            

            </div>
        </div>
        </div>  

        );}
        else{
            return(
                <div>
        <h2 className={this.state.active?'display-more-white':'display-more-black'}  onClick={() => this.setState({active : !this.state.active})}>...</h2>
            
        <div className={this.state.active ? 'more':'none'}>

        
        <div>
            <div className='main-wrapper'>
                <div className='top-posts'>
                <h1>Top Posts and Pages</h1>
                <ul>
                <li><Link to='/'>Καλωσορίσατε</Link></li>
                <li><Link to='/about'>Ποιοί είμαστε</Link></li>
                <li><Link to='/products'>Προϊόντα</Link></li>
                <li><Link to='/recipes'>Συνταγές</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Επικοινωνία</Link> </li>
                <li><Link to='/recipes/burger'>Burger με μπιφτέκι και καπνιστή μπριζόλα</Link> </li>
                <li><Link to='/recipes/spaghetti-apaki'>Spaghetti με pesto λιαστής ντομάτας και απάκι κοτόπουλο</Link> </li>

                </ul>
                <br></br>
                <br></br>
                <br></br>

                <hr className='grayline'></hr>

                <h1>Instagram</h1>

                <div className='instagram-wrapper'>
                    
                    <a href='https://www.instagram.com/p/BuV0Va1HTog/' target='_blank'><img src={i2} /></a>
                    <a href='https://www.instagram.com/p/Br5HVSrn8-N/' target='_blank'><img src={i3} /></a>
                    <a href='https://www.instagram.com/p/BsOZwVngLod/' target='_blank'><img src={i4} /></a>
                    <a href='https://www.instagram.com/p/BsaogwTgB2w/' target='_blank'><img src={i5} /></a>
                    <a href='https://www.instagram.com/p/Bs5oslPAYid/' target='_blank'><img src={i6} /></a>
                    <a href='https://www.instagram.com/p/BtQXgKbHZfm/' target='_blank'><img src={i7} /></a>

                    <a href='https://www.instagram.com/danae_delimeats/' className='see-more' target='_blank'><h1>See more...</h1></a>
                </div>
                <hr className='grayline'></hr>

                <a><h1>Το παραδοσιακό αλλαντικό της κυρά Δανάης</h1></a>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fallantikadanah%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style={{width:"600", height:"800", border:'none' ,overflow:'hidden', scrolling:"yes", frameborder:"0" ,allowTransparency:"true", allow:"encrypted-media"}} ></iframe>
            </div>
        </div>
            

            </div>
        </div>
        </div>  
            );
        }

    }

};

export default More;