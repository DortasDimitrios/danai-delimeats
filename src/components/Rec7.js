import React from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import Searchbar from './Searchbar';
import style from '../styles/Rec7.css';
import More from './More';

class Rec7 extends React.Component{




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
                    <h4 className='welcome-rec'>Burger με μπιφτέκι και καπνιστή μπριζόλα
</h4>
                    

                    <div className='image-wrapper-burger'>
                    <Menu />
                    </div>
                   
                </div>
                            
                <div className='right-side'><More/><Searchbar/>
                            <h3>Συστατικά</h3>
                            <p>1/2 κρεμμύδι ψιλοκομμένο</p>
                            <p>600 gr Μοσχαρίσιος κιμάς</p>

                            <p>3 κ. σ. φρυγανιά τριμμένη</p>

                            <p>2 αυγά</p>

                            <p>ρίγανη</p>

                            <p>αλάτι</p>
                            <p>100 ml ελαιόλαδο</p>
                            <p>4 φέτες τυρί για τόστ</p>
                            <p>4 φέτες καπνιστή μπριζόλα κυρά Δανάη</p>
                            <p>4 φέτες ντομάτας</p>
                            <p>4 δαχτυλίδια κρεμμυδιού</p>
                            <p>4 αγγουράκια πίκλες</p>
                        
                            <p>4 φύλλα από μαρούλι</p>
                            <p>ψωμάκια μπέργκερ</p>
                            <p>BBQ Sauce</p>
                            <p>4 ψημένα μπιφτέκια</p>

                    

                            

                            
                            <br></br>

                            <h3>Οδηγίες</h3>
                            <br></br>

                            <p>1.Ρίχνουμε τα υλικά για τα μπιφτέκια μέσα σε ένα μπολ και τα ανακατεύουμε καλά μέχρι να γίνει ο κιμάς.</p>

                            <p>2.Βάζουμε τον κιμά στο ψυγείο για 30’</p>

                            <p>3.Πλάθουμε μπιφτέκια και τα ψήνουμε στο στο grill.

</p>

                            <p>4.Σκεπάζουμε με την άλλη φέτα και σερβίρουμε.</p>
                            <p>5.Τοποθετούμε τα μαρουλόφυλλα, τα ψημένα μπιφτέκια, το τυρί, την καπνιστή μπριζόλα, τις ντομάτες, τα δαχτυλίδια κρεμμυδιού και τις λεπτές φέτες από τις πίκλες.</p>
                            <p>6.Κλείνουμε και σερβίρουμε.</p>














                   


                </div>

            </div>
        );
        }
        else{
            return(
                <div>
                    <div className='left-side'>
                    

                <div className='image-wrapper-burger'>
               < MobileMenu />
                <h4 className='welcome-rec'>Burger με μπιφτέκι και καπνιστή μπριζόλα
</h4>
                </div>
                </div>
                
                <div className='right-side'><More/><Searchbar/>
                <h3>Συστατικά</h3>
                            <p>1/2 κρεμμύδι ψιλοκομμένο</p>
                            <p>600 gr Μοσχαρίσιος κιμάς</p>

                            <p>3 κ. σ. φρυγανιά τριμμένη</p>

                            <p>2 αυγά</p>
                            <p>ρίγανη</p>
                            <p>αλάτι</p>
                            <p>100 ml ελαιόλαδο</p>
                            <p>4 φέτες τυρί για τόστ</p>
                            <p>4 φέτες καπνιστή μπριζόλα κυρά Δανάη</p>
                            <p>4 φέτες ντομάτας</p>
                            <p>4 δαχτυλίδια κρεμμυδιού</p>
                            <p>4 αγγουράκια πίκλες</p>
                        
                            <p>4 φύλλα από μαρούλι</p>
                            <p>ψωμάκια μπέργκερ</p>
                            <p>BBQ Sauce</p>
                            <p>4 ψημένα μπιφτέκια</p>


                    

                            

                            
                            <br></br>

                            <h3>Οδηγίες</h3>
                            <br></br>

                            <p></p>

                            <p>2.Βάζουμε τον κιμά στο ψυγείο για 30’.

</p>

                            <p>3.Πλάθουμε μπιφτέκια και τα ψήνουμε στο στο grill.

</p>

                            <p>4.Αλείφουμε τα ψωμάκια με BBQ Sauce.</p>
                            <p>5.Τοποθετούμε τα μαρουλόφυλλα, τα ψημένα μπιφτέκια, το τυρί, την καπνιστή μπριζόλα, τις ντομάτες, τα δαχτυλίδια κρεμμυδιού και τις λεπτές φέτες από τις πίκλες.</p>
                            <p>6.Κλείνουμε και σερβίρουμε.</p>







                   


                </div>

                </div>
            );
        }
    }
};

export default Rec7;





