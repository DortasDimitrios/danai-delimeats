import React from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import style from '../styles/Rec8.css';
import Searchbar from './Searchbar';
import More from './More';

class Rec8 extends React.Component{




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
                    <h4 className='welcome-rec'>Κριθαρότο με απάκι και γραβιέρα
</h4>
                    

                    <div className='image-wrapper-kritharoto'>
                    <Menu />
                    </div>
                   
                </div>
                            
                <div className='right-side'><More/><Searchbar/>
                            <h3>Συστατικά</h3>
                            <p>-500 gr Κριθαράκι μέτριο</p>
                            <p>-150 gr Απάκι κυρά Δανάη σε φέτες</p>

                            <p>-1 Κρεμμύδι ψιλοκομμένο</p>

                            <p>-1 Σκόρδο τριμμένο</p>

                            <p>-100 gr  Γραβιέρα σε κύβους</p>
                            <p>-250 ml Λευκό κρασί</p>
                            <p>-2Ξύσμα πορτοκαλιού</p>
                            <p>-Δεντρολίβανο</p>
                            <p>-4 κ.σ. Ελαιόλαδο</p>
                            <p>-Αλάτι, πιπέρι</p>
                            

                    

                            

                            
                            <br></br>

                            <h3>Οδηγίες</h3>
                            <br></br>

                            <p>1.Σοτάρουμε το κρεμμύδι, το σκόρδο και το αλλαντικό απάκι για λίγα λεπτά σε δυνατή φωτιά.

</p>

                            <p>2.Προσθέτουμε το κριθαράκι και λίγο ψιλοκομμένο δεντρολίβανο. Συνεχίζουμε το σοτάρισμα για ένα λεπτό περίπου.</p>

                            <p>3.Ρίχνουμε το λευκό κρασί και ανακατεύουμε.
</p>

                            <p>4.Αφήνουμε για 2 λεπτά σε μέτρια φωτιά μέχρι να εξατμιστεί το κρασί, προσθέτουμε αλάτι και πιπέρι και συνεχίζουμε ρίχνοντας τον ζωμό σταδιακά. Ανακατεύουμε μέχρι να μαγειρευτεί το κριθαράκι και να γίνει χυλός.</p>


                            <p>5.Στο τέλος, προσθέτουμε το ξύσμα του πορτοκαλιού, τη γραβιέρα και λίγο δεντρολίβανο, ανακατεύουμε και σερβίρουμε.</p>











                   


                </div>

            </div>
        );
        }
        else{
            return(
                <div>
                    <div className='left-side'>
                    

                <div className='image-wrapper-kritharoto'><More/><Searchbar/>
               < MobileMenu />
                <h4 className='welcome-rec'>Κριθαρότο με απάκι και γραβιέρα
</h4>
                </div>
                </div>
                
                <div className='right-side'>
                <h3>Συστατικά</h3>
                            <p>-500 gr Κριθαράκι μέτριο</p>
                            <p>-150 gr Απάκι κυρά Δανάη σε φέτες</p>

                            <p>-1 Κρεμμύδι ψιλοκομμένο</p>

                            <p>-1 Σκόρδο τριμμένο</p>

                            <p>-100 gr  Γραβιέρα σε κύβους</p>
                            <p>-250 ml Λευκό κρασί</p>
                            <p>-2Ξύσμα πορτοκαλιού</p>
                            <p>-Δεντρολίβανο</p>
                            <p>-4 κ.σ. Ελαιόλαδο</p>
                            <p>-Αλάτι, πιπέρι</p>
                            

                    

                            

                            
                            <br></br>

                            <h3>Οδηγίες</h3>
                            <br></br>

                            <p>11.Σοτάρουμε το κρεμμύδι, το σκόρδο και το αλλαντικό απάκι για λίγα λεπτά σε δυνατή φωτιά.

</p>

                            <p>2.Προσθέτουμε το κριθαράκι και λίγο ψιλοκομμένο δεντρολίβανο. Συνεχίζουμε το σοτάρισμα για ένα λεπτό περίπου.</p>

                            <p>3.Ρίχνουμε το λευκό κρασί και ανακατεύουμε.
</p>

                            <p>4.Αφήνουμε για 2 λεπτά σε μέτρια φωτιά μέχρι να εξατμιστεί το κρασί, προσθέτουμε αλάτι και πιπέρι και συνεχίζουμε ρίχνοντας τον ζωμό σταδιακά. Ανακατεύουμε μέχρι να μαγειρευτεί το κριθαράκι και να γίνει χυλός.</p>


                            <p>5.Στο τέλος, προσθέτουμε το ξύσμα του πορτοκαλιού, τη γραβιέρα και λίγο δεντρολίβανο, ανακατεύουμε και σερβίρουμε.</p>






                   


                </div>

                </div>
            );
        }
    }
};

export default Rec8;





