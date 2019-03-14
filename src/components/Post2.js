import React from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import style from '../styles/Post2.css';
import post201 from '../images/post2-1.jpg';
import post202 from '../images/post2-2.jpg';
import post203 from '../images/post2-3.jpg';
import post204 from '../images/post2-4.jpg';
import post205 from '../images/post2-5.jpg';
import post206 from '../images/post2-6.jpg';
import aboutdown from '../images/about-down.png';
import twitter from '../images/twitter.png';
import fb from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import {Link} from 'react-router-dom';
import Searchbar from './Searchbar';
import More from './More';




class Post2 extends React.Component{




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

        if(this.state.w>1000){
        return(
            <div>
                <div className='left-side'>
                    <h4 className='welcome-rec'>Αλλαντικά επιλογή. 6 βασικοί κανόνες!</h4>
                    

                    <div className='image-wrapper-post2'>
                    <Menu />
                    </div>
                   
                </div>
                            
                                      
                <div className='right-side-post'>
                
                

                            <h1>Αλλαντικά επιλογή. 6 κανόνες για τη σωστή επιλογή.</h1>

                            <h2>1.Όψη-Οσμή</h2>

                            <p>Δώστε ιδιαίτερη σημασία στην όψη και την οσμή τους.</p>

                            <img src={post201}/>


                            <h2>2. Ημερομηνία λήξης</h2>

                            <p>Προσέχετε ΠΑΝΤΑ την ημερομηνία λήξης στα συσκευασμένα προϊόντα.</p>

                            <img src={post202}/>

                            <h2>3. Συσκευασία αλλαντικών</h2>

                            <p>Ελέγχετε προσεκτικά τις συσκευασίες των προϊόντων για την περίπτωση που έχουν πάρει αέρα δηλ. οι συσκευασίες να μην έχουν ελεγχθεί και να είναι ελαττωματικές.</p>

                            <img src={post203}/>

                             <h2>4. Μέτρα υγιεινής</h2>

                            <p>Επιλέγετε καταστήματα που γνωρίζετα ή μπορείτε να καταλάβετε ότι εφαρμόζουν τα απαραίτητα μέτρα υγιεινής για την ασφάλεια και τη σωστή διατήρηση των τροφίμων.</p>


                            <img src={post204}/>

                            <h2>5. Ψυγείο</h2>

                            <p>Προτιμάτε να αγοράζετε  από ψυγεία που έχουν σωστή θερμοκρασία, μικρότερη από 7 βαθμούς κελσίου για την συντήρηση –18 βαθμούς κελσίου για την κατάψυξη.</p>


                            <img src={post205}/>

                            <h2>6. Οι φέτες</h2>

                            <p>Και μια έξυπνη συμβουλή: για να απολαμβάνετε καλύτερη γεύση και αρώματα, να επιμένετε ζητάτε οι φέτες από το προϊόν που διαλέγετε να είναι λεπτοκομμένες.</p>


                            <img src={post206}/>

                            <h3>Μακαρόνια με απάκι και μανιτάρια. Δείτε τη συνταγή <Link to='/recipes/spaghetti-apaki-manitaria'>ΕΔΩ</Link></h3>
                            
                        



                   


                </div>

            </div>
        );
        }
        else{
            return(
                <div>
                    <div className='left-side'>
                    

                <div className='image-wrapper-post2'>
               < MobileMenu />
                <h4 className='welcome-rec'>Αλλαντικά επιλογή. 6 βασικοί κανόνες!</h4>
                </div>
                </div>
                <Searchbar/>
                <div className='right-side-post'>
                
                <h1>Αλλαντικά επιλογή. 6 κανόνες για τη σωστή επιλογή.</h1>

<h2>1.Όψη-Οσμή</h2>

<p>Δώστε ιδιαίτερη σημασία στην όψη και την οσμή τους.</p>

<img src={post201}/>


<h2>2. Ημερομηνία λήξης</h2>

<p>Προσέχετε ΠΑΝΤΑ την ημερομηνία λήξης στα συσκευασμένα προϊόντα.</p>

<img src={post202}/>

<h2>3. Συσκευασία αλλαντικών</h2>

<p>Ελέγχετε προσεκτικά τις συσκευασίες των προϊόντων για την περίπτωση που έχουν πάρει αέρα δηλ. οι συσκευασίες να μην έχουν ελεγχθεί και να είναι ελαττωματικές.</p>

<img src={post203}/>

 <h2>4. Μέτρα υγιεινής</h2>

<p>Επιλέγετε καταστήματα που γνωρίζετα ή μπορείτε να καταλάβετε ότι εφαρμόζουν τα απαραίτητα μέτρα υγιεινής για την ασφάλεια και τη σωστή διατήρηση των τροφίμων.</p>


<img src={post204}/>

<h2>5. Ψυγείο</h2>

<p>Προτιμάτε να αγοράζετε  από ψυγεία που έχουν σωστή θερμοκρασία, μικρότερη από 7 βαθμούς κελσίου για την συντήρηση –18 βαθμούς κελσίου για την κατάψυξη.</p>


<img src={post205}/>

<h2>6. Οι φέτες</h2>

<p>Και μια έξυπνη συμβουλή: για να απολαμβάνετε καλύτερη γεύση και αρώματα, να επιμένετε ζητάτε οι φέτες από το προϊόν που διαλέγετε να είναι λεπτοκομμένες.</p>


<img src={post206}/>

<h3>Μακαρόνια με απάκι και μανιτάρια. Δείτε τη συνταγή <Link to='/recipes/spaghetti-apaki-manitaria'>ΕΔΩ</Link></h3>















                   


                </div>

                </div>
            );
        }
    }
};

export default Post2;





