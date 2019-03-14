import React from 'react';
import ConStyle from '../styles/ContactStyle.css';
import MobileMenu from '../components/MobileMenu';
import Menu from './Menu';
import axios from 'axios';
import Searchbar from './Searchbar';
import More from './More';



const API_PATH = 'http://dimitrisdortas.com/index.php';





class Contact extends React.Component{


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






    constructor(props) {
        super(props);
        this.state = {
          fname: '',
          lname: '',
          email: '',
          message: '',
          mailSent: false,
          error: null
        }
      }
      handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            window.location.reload();
            this.setState({
            //   mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };






    render(){

        if(this.state.w>1000){
        return(
            <div>
                <div className='left-side'>
                    <h4 className='welcome'>Επικοινωνία</h4>
                    

                    <div className='image-wrapper-contact'>
                    <Menu />
                    </div>
                   
                </div>
                <div className='right-side'>
                <More/>
                <Searchbar/>
                    <form action="#" >
                       <div className='wrapper'>
                        <label>Ονοματεπώνυμο</label>
                        <br></br>
                        <br></br>
                        <input type="text" id="fname" name="firstname" 
                            value={this.state.fname}
                            onChange={e => this.setState({ fname: e.target.value })}
                        />
                        </div>
                       
                       
                        
                        
                        <div className='wrapper-email'>
                        <label>Email</label>
                        <br></br>
                        <input type="email" id="email" name="email" 
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        </div>

                        <div className='msg-wrapper'>
                        <label>Το μήνυμα σας:</label>
                        <textarea id="message" name="message" 
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}
                        ></textarea>
                 
                        </div>

                     
                        <div className={this.state.mailSent ? 'done':'none'}>
                            
                                <div>Thank you for contacting us.</div>
                        
                        </div>
                       
                        <input type="submit"  onClick={e => this.handleFormSubmit(e) & this.setState({mailSent: true})} value="Αποστολή" />
                        
                    
                    </form >
                        <div className='descreption'>
                        <h4>ΑΦΟΙ Κ &#38; Α ΓΙΑΝΝΑΚΟΥ Ο.Ε.</h4>

                        <h6>ΤΗΛ: 210-4822107, FAX: 210-4839027</h6>

                        <p>Πρέσπας 8, Μοσχάτο. 18346.</p>
                        </div>

                </div>

                







            </div>
        



        );
    }
    else{
        return(
            <div>
                <div className='left-side'>
                <div className='image-wrapper-contact'>
                <MobileMenu />
                <h4 className='welcome'>Επικοινωνία</h4>
                </div>
                </div>
                <div className='right-side'>
                <More/>
                <Searchbar/>
                    <form action="#" >
                       <div className='wrapper'>
                        <label>Όνομα</label>
                        <br></br>
                        <br></br>
                        <input type="text" id="fname" name="firstname" 
                            value={this.state.fname}
                            onChange={e => this.setState({ fname: e.target.value })}
                        />
                        </div>
                       
                      
                        <div className='wrapper-email'>
                        <label>Email</label>
                        <br></br>
                        <input type="email" id="email" name="email" 
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        </div>

                        <div className='msg-wrapper'>
                        <label>Το μήνυμα σας:</label>
                        <textarea id="message" name="message" 
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}
                        ></textarea>
                 
                        </div>
                       
                        <input type="submit"  onClick={e => this.handleFormSubmit(e)} value="Αποστολή" />
                        <div>
                            {this.state.mailSent &&
                                <div>Thank you for contcting us.</div>
                            }
                        </div>
                    </form >
                </div>

                        <div className='descreption'>
                        <h4>ΑΦΟΙ Κ &#38; Α ΓΙΑΝΝΑΚΟΥ Ο.Ε.</h4>

                        <h6>ΤΗΛ: 210-4822107, FAX: 210-4839027</h6>

                        <p>Πρέσπας 8, Μοσχάτο. 18346.</p>
                        </div>

               
            </div>
            
            
            );
    }

    }
};


export default Contact;