import React from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import style from '../styles/rec5.css';
import Searchbar from './Searchbar';
import More from './More';

class Rec5 extends React.Component{




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
                    <h4 className='welcome-rec'>Μακαρόνια με απάκι και μανιτάρια</h4>
                    

                    <div className='image-wrapper-makaronia'>
                    <Menu />
                    </div>
                   
                </div>
                            
                <div className='right-side'>
                <More/>
                <Searchbar/>
                            <h3>Συστατικά</h3>
                            <p>-30 gr Μανιτάρια</p>
                            <p>-500 gr Μακαρόνια</p>

                            <p>-150 gr Απάκι κυρά Δανάη</p>

                            <p>-100 gr. Tριμμένο κεφαλοτύρι</p>

                            <p>-100 ml λευκό κρασί</p>

                            <p>-Μαϊντανός</p>

                            <p>-1 κρεμμύδι ψιλοκομμένο</p>

                            <p>-Σκόρδο</p>

                            <p>-4 κ.σ. Ελαιόλαδο</p>

                            <p>-Αλάτι, πιπέρι</p>

                            

                            
                            <br></br>

                            <h3>Οδηγίες</h3>
                            <br></br>

                            <p>1.Βάζουμε τα μανιτάρια σε μπολ με το ζεστό νερό. Τα αφήνουμε να μουλιάσουν για 10 λεπτά. Στη συνέχεια τα στραγγίζουμε και τα ψιλοκόβουμε.</p>

                            <p>2.Βάζουμε τα μακαρόνια να βράσουν.</p>

                            <p>3.Σοτάρουμε το σκόρδο και το κρεμμύδι και το απάκι για 3-4 λεπτά.</p>

                            <p>4.Προσθέτουμε τα μανιτάρια, αλάτι και πιπέρι και συνεχίζουμε το σοτάρισμα για 3 λεπτά περίπου και στη συνέχεια σβήνουμε με το κρασί.</p>

                            <p>5.Στραγγίζουμε τα ζυμαρικά και τα ρίχνουμε μέσα στη σάλτσα. Προσθέτουμε το κεφαλοτύρι και το μαϊντανό και ανακατεύουμε.</p> 













                   


                </div>

            </div>
        );
        }
        else{
            return(
                <div>
                    <div className='left-side'>
                    

                <div className='image-wrapper-makaronia'>
               < MobileMenu />
                <h4 className='welcome-rec'>Μακαρόνια με απάκι και μανιτάρια</h4>
                </div>
                </div>
                
                <div className='right-side'><More/><Searchbar/>
                             <h3>Συστατικά</h3>
                             <br>
                             </br>
                             <br>
                             </br>

                            <p>-30 gr Μανιτάρια</p>
                            <p>-500 gr Μακαρόνια</p>

                            <p>-150 gr Απάκι κυρά Δανάη</p>

                            <p>-100 gr. Tριμμένο κεφαλοτύρι</p>

                            <p>-100 ml λευκό κρασί</p>

                            <p>-Μαϊντανός</p>

                            <p>-1 κρεμμύδι ψιλοκομμένο</p>

                            <p>-Σκόρδο</p>

                            <p>-4 κ.σ. Ελαιόλαδο</p>

                            <p>-Αλάτι, πιπέρι</p>

                            

                            
                            <br></br>

                            <h3>Οδηγίες</h3>
                            <br></br>

                            <p>1.Βάζουμε τα μανιτάρια σε μπολ με το ζεστό νερό. Τα αφήνουμε να μουλιάσουν για 10 λεπτά. Στη συνέχεια τα στραγγίζουμε και τα ψιλοκόβουμε.</p>

                            <p>2.Βάζουμε τα μακαρόνια να βράσουν.</p>

                            <p>3.Σοτάρουμε το σκόρδο και το κρεμμύδι και το απάκι για 3-4 λεπτά.</p>

                            <p>4.Προσθέτουμε τα μανιτάρια, αλάτι και πιπέρι και συνεχίζουμε το σοτάρισμα για 3 λεπτά περίπου και στη συνέχεια σβήνουμε με το κρασί.</p>

                            <p>5.Στραγγίζουμε τα ζυμαρικά και τα ρίχνουμε μέσα στη σάλτσα. Προσθέτουμε το κεφαλοτύρι και το μαϊντανό και ανακατεύουμε.</p> 









                   


                </div>

                </div>
            );
        }
    }
};

export default Rec5;





