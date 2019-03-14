import React from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import style from '../styles/Post1.css';
import {Link} from 'react-router-dom';
import post101 from '../images/post101.jpg'
import aboutdown from '../images/about-down.png';
import twitter from '../images/twitter.png';
import fb from '../images/facebook.png';
import instagram from '../images/instagram.png';

import linkedin from '../images/linkedin.png';

import Searchbar from './Searchbar';
import More from './More';



class Post1 extends React.Component{




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
                    <h4 className='welcome-rec'>6 Βασικοί κανόνες για τη σωστή συντήρηση των αλλαντικών</h4>
                    

                    <div className='image-wrapper-post'>
                    <Menu />
                    </div>
                   
                </div>
                            
                <div className='right-side'>
                <More/>
                <Searchbar/>

                            <h1>Ποια είναι η σωστή συντήρηση των αλλαντικών;</h1>

                            <h2>Ευαισθησία</h2>

                            <p>Συντήρηση αλλαντικών λοιπόν. Έχουμε και λέμε, τα αλλαντικά είναι ευαίσθητα στο φως, την υγρασία και την υψηλή θερμοκρασία. Πάνω από όλα, οφείλουμε να επιλέγουμε καταστήματα και καταστηματάρχες που εφαρμόζουν τα βασικά μέτρα υγιεινής και διαθέτουν ψυγεία με προβλεπόμενη θερμοκρασία (από 2-4 βαθμούς κελσίου για συντήρηση και–18 βαθμούς κελσίου για κατάψυξη).</p>

                            <h2>Ετικέτες</h2>

                            <p>Είναι απαραίτητο να συμβουλεύεστε την ετικέτα του κάθε προϊόντος στην οποία αναφέρεται ακριβώς η διάρκεια ζωής του. Επιπλέον, μπορείτε να ρωτάτε  τον υπάλληλο που σας εξυπηρετεί στον πάγκο την ώρα που σας το κόβει.</p>

                            <h2>Κατάψυξη
                            </h2>

                            <p>Σίγουρα, κάποια προϊόντα που έχουν υποστεί τη διαδικασία κάπνισης μπορούν να διατηρηθούν για πολύ περισσότερο χρόνο, αν τα διατηρήσουμε στην κατάψυξη. Προσοχή όμως, Μόλις αποψυχθούν πρέπει να καταναλωθούν άμεσα.

</p>


                            <h2>Διάρκεια ζωής</h2>
                            <p>Τα συσκευασμένα αλλαντικά έχουν χρόνο διάρκειας ζωής η οποία αναγράφεται στη συσκευασία. Κοιτάξτε προσεκτικά!

Τα κοπής εξαρτάται από την ημέρα που άνοιξε τη συσκευασία ο υπάλληλος στον πάγκο.

Οι φέτες ζαμπόν, γαλοπούλας, πάριζας διατηρούνται σε σωστή συντήρηση (2- 4C) για 2 με 3 ημέρες.

</p>

<div className='mini-icons'>
                        
                          <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://danae-delimeats.com/blog/6-basic-rules" target="_blank"><img title='Share this on LinkedIn' className='linkedIn' src={linkedin} /></a>
                          <a href="https://twitter.com/share?url=https://danae-delimeats.com/blog/6-basic-rules&amp;text=Δείτε%20Περισσότερα:&amp;hashtags=danaedelimeats" target="_blank"> <img title='Share this on Twitter' src={twitter} />   </a>

                          <a href='https://www.instagram.com/danae_delimeats/' target='_blank'><img src={instagram} /></a>
                          <a href='https://www.facebook.com/allantikadanah/' target='_blank'> <img src={fb} /></a>
                      </div>
                 
                   


                </div>

            </div>
        );
        }
        else{
            return(
                <div>
                    <div className='left-side'>
                    

                <div className='image-wrapper-post'>
               < MobileMenu />
                <h4 className='welcome-rec'>6 Βασικοί κανόνες για τη σωστή συντήρηση των αλλαντικών</h4>
                </div>
                </div>
                <div className='right-side'>
                <More/>
                <Searchbar/>
                            <h1>Ποια είναι η σωστή συντήρηση των αλλαντικών;</h1>

<h2>Ευαισθησία</h2>

<p>Συντήρηση αλλαντικών λοιπόν. Έχουμε και λέμε, τα αλλαντικά είναι ευαίσθητα στο φως, την υγρασία και την υψηλή θερμοκρασία. Πάνω από όλα, οφείλουμε να επιλέγουμε καταστήματα και καταστηματάρχες που εφαρμόζουν τα βασικά μέτρα υγιεινής και διαθέτουν ψυγεία με προβλεπόμενη θερμοκρασία (από 2-4 βαθμούς κελσίου για συντήρηση και–18 βαθμούς κελσίου για κατάψυξη).</p>

<h2>Ετικέτες</h2>

<p>Είναι απαραίτητο να συμβουλεύεστε την ετικέτα του κάθε προϊόντος στην οποία αναφέρεται ακριβώς η διάρκεια ζωής του. Επιπλέον, μπορείτε να ρωτάτε  τον υπάλληλο που σας εξυπηρετεί στον πάγκο την ώρα που σας το κόβει.</p>

<h2>Κατάψυξη
</h2>

<p>Σίγουρα, κάποια προϊόντα που έχουν υποστεί τη διαδικασία κάπνισης μπορούν να διατηρηθούν για πολύ περισσότερο χρόνο, αν τα διατηρήσουμε στην κατάψυξη. Προσοχή όμως, Μόλις αποψυχθούν πρέπει να καταναλωθούν άμεσα.

</p>


<h2>Διάρκεια ζωής</h2>
<p>Τα συσκευασμένα αλλαντικά έχουν χρόνο διάρκειας ζωής η οποία αναγράφεται στη συσκευασία. Κοιτάξτε προσεκτικά!

Τα κοπής εξαρτάται από την ημέρα που άνοιξε τη συσκευασία ο υπάλληλος στον πάγκο.

Οι φέτες ζαμπόν, γαλοπούλας, πάριζας διατηρούνται σε σωστή συντήρηση (2- 4C) για 2 με 3 ημέρες.

</p>
<div className='mini-icons'>
                          {/*  */}
                          <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://danae-delimeats.com" target="_blank"><img title='Share this on LinkedIn' className='linkedIn' src={linkedin} /></a>
                          <a href="https://twitter.com/share?url=https://danae-delimeats.com&amp;text=Δείτε%20Περισσότερα:&amp;hashtags=danaedelimeats" target="_blank"> <img title='Share this on Twitter' src={twitter} />   </a>

                          <a href='https://www.instagram.com/danae_delimeats/' target='_blank'><img src={instagram} /></a>
                          <a href='https://www.facebook.com/allantikadanah/' target='_blank'> <img src={fb} /></a>
                      </div>
                 




                   


                </div>

                </div>
            );
        }
    }
};

export default Post1;





