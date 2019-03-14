import React from 'react';
import style from '../styles/Products.css';
import b1 from '../images/products-1.jpg';
import b2 from '../images/loukanika-1-dark.jpg';
import l002 from '../images/loukanika-1.jpg';
import b3 from '../images/b3.jpg';
import l004 from '../images/l004.jpg';
import l006 from '../images/l006.jpg';
import l007 from '../images/l007.jpg';
import l008 from '../images/l008.jpg';
import l009 from '../images/l009.jpg';
import l005 from '../images/l005.jpg';
import l015 from '../images/l015.jpg';
import b005 from '../images/b005.jpg';
import k003 from '../images/k003.jpg';
import k005 from '../images/koo5.jpg';
import k002 from '../images/k002.jpg';
import pig from '../images/pig.png';
import k009 from '../images/k009.jpg';
import k007 from '../images/k007.jpg';
import k011 from '../images/k011.jpg';
import k012 from '../images/k012.jpg';
import k014 from '../images/k014.jpg';
import k010 from '../images/k010.jpg';
import f001 from '../images/f001.jpg';
import f003 from '../images/f003.jpg';
import ImageSlider from './ImageSlider';
import Menu from './Menu';
import Searchbar from './Searchbar';

import MobileMenu from './MobileMenu';

import More from './More';










class Products extends React.Component{




    








    state= { w : window.innerWidth ,
            scrollPosition : window.pageYOffset
     };

    


    updateWidth(){
        
            let update_width = window.innerWidth;
            this.setState({w:update_width});
        
    }

        updateScroll(){
            let updated_scroll = window.pageYOffset;
            this.setState({scrollPosition:updated_scroll});
        }

    /**
   * Add event listener
   */

    componentDidMount() {
        this.updateWidth();
        window.addEventListener("resize", this.updateWidth.bind(this));
  window.addEventListener('scroll',this.updateScroll.bind(this));
    }
   

    /**
   * Remove event listener
   */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth.bind(this));
        window.removeEventListener("scroll",this.updateScroll.bind(this));
    }


      
      


    

    
    render(){
        
        if( this.state.w > 1000  ){
        return(
            
                    <div>
                        <div className='left-side'>
                            
                            <Menu/>
                            <ImageSlider/>
                            </div>
                           
                       
                                    
                        <div className='right-side-products' ><More/><Searchbar/>

                                <h1>ΛΟΥΚΑΝΙΚΑ</h1>  
                                <hr className='underline'></hr>
                                <div className='product'>
                                    <div className='code'><h4>KΩΔΙΚΟΣ</h4>
                                    </div>
                                    <div className='type'><h4>ΕΙΔΟΣ</h4>
                                    </div>
                                    <div className='name'><h4>ΠΕΡΙΓΡΑΦΗ</h4>  
                                    </div>
                                
                                <div className='product' >
                                    <div className='code'><h4>Λ/001</h4>
                                    </div>
                                    <div className='type' id='d1'><h4>Χωριάτικο Έξτρα</h4>
                                    </div>
                                    <div className='name'><p>100% χοιρινό κρέας. Xαμηλή περιεκτικότητα σε λιπαρά. Κυρίαρχη γεύση πράσου και φυσικών μπαχαρικών.</p>  
                                    </div>
                                </div>    
                                <div className='product'>
                                    <div className='code'><h4>Λ/002</h4>
                                    </div>
                                    <div className='type'><h4>Τ. Καρδίτσας</h4>
                                    </div>
                                    <div className='name'><p>Παραδοσιακή συνταγή από την ευρύτερη περιοχή της Καρδίτσας, με 100% χοιρινό κρέας και πράσο.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Λ/003</h4>
                                    </div>
                                    <div className='type'id='d2'><h4>Ωμό Καπνιστό</h4>
                                    </div>
                                    <div className='name'><p>100% χοιρινό κρέας. Κυρίαρχη γεύση γλυκού κρεμμυδιού και ρίγανης</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Λ/004</h4>
                                    </div>
                                    <div className='type'id='d3'><h4>Χοιρινό με Πορτοκάλι</h4>
                                    </div>
                                    <div className='name'><p>Παραδοσιακή συνταγή Μάνης, με 100% χοιρινό κρέας, πορτοκάλι και Αγιωργίτικο κρασί .</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'id='d4'><h4>Λ/005</h4>
                                    </div>
                                    <div className='type'><h4>Μοσχαρίσιο 100%</h4>
                                    </div>
                                    <div className='name'><p>100% μοσχαρίσιο κρέας, φυσικά μπαχαρικά. Χαμηλή περιεκτικότητα σε λιπαρά.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Λ/010</h4>
                                    </div>
                                    <div className='type'><h4>Βοδινό κρασοριγανάτο</h4>
                                    </div>
                                    <div className='name'id='d5'><p>Προϊόν με 100% μοσχαρίσιο ελληνικό κρέας. Συσκευασία με ρίγανη και κρασί Νεμέας.</p>  
                                    </div>
                                </div> 
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>

                                <div className='prod'>
                                <img src={l002} />
                                <br></br>
                                <p>Λ/002 T. Καρδίτσας</p>
                                <br></br>
                                    
                                
                                </div>
                                <div className='prod'>
                                <img src={l004} />
                                <br></br>
                                <p>Λ/004 Λουκάνικο με πορτοκάλι κ κρασί</p>
                                <br></br>
                                </div>
                                
                                
                                






                                





                                <div className='product'>
                                    <div className='code'><h4>Λ/006</h4>
                                    </div>
                                    <div className='type'><h4>Χωριάτικη Μπουκιά</h4>
                                    </div>
                                    <div className='name'><p>100% χοιρινό κρέας σε πρόβειο έντερο. Κυρίαρχη γεύση γλυκού κρεμμυδιού και ρίγανης.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Λ/007</h4>
                                    </div>
                                    <div className='type'><h4>Ντομάτα λιαστή και φέτα</h4>
                                    </div>
                                    <div className='name'><p>100% χοιρινό κρέας, λιαστή ντομάτα και φέτα Π.Ο.Π.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Λ/008</h4>
                                    </div>
                                    <div className='type'><h4>Παρμεζάνας</h4>
                                    </div>
                                    <div className='name'><p>100% χοιρινό κρέας και παρμεζάνα Reggiano.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Λ/015</h4>
                                    </div>
                                    <div className='type'><h4>Γραβιέρας</h4>
                                    </div>
                                    <div className='name'><p>100% χοιρινό κρέας και ημίσκληρη γραβιέρα.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Λ/009</h4>
                                    </div>
                                    <div className='type'><h4>Κυνηγού</h4>
                                    </div>
                                    <div className='name'><p>100% χοιρινό κρέας, λιαστή ντομάτα και φέτα Π.Ο.Π. σε πρόβειο έντερο.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Λ/011</h4>
                                    </div>
                                    <div className='type'><h4>Ξυδάτο</h4>
                                    </div>
                                    <div className='name'><p>100% χοιρινό κρέας, μαριναρισμένο σε κόκκινο ξύδι και ρίγανη.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Λ/012</h4>
                                    </div>
                                    <div className='type'><h4>Τρικάλων</h4>
                                    </div>
                                    <div className='name'><p>Λουκάνικο για food service με πράσο.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Λ/016</h4>
                                    </div>
                                    <div className='type'><h4>Χοιρινό με Σταμναγκάθι</h4>
                                    </div>
                                    <div className='name'><p>100% χοιρινό κρέας και σταμναγκαθι</p>  
                                    </div>
                                </div> 
                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>


                                <div className='prod'>
                                <img src={l006} />
                                <br></br>
                                <p>Λ/006 Χωριάτικη μπουκιά</p>
                                <br></br>
                                    
                                
                                </div>
                                <div className='prod'>
                                <img src={l007} />
                                <br></br>
                                <p>Λ/007 Λουκάνικο με λιαστή ντομάτα και φέτα ΠΟΠ</p>
                                <br></br>
                                </div>
                                <br></br>
                                <div className='prod'>
                                <img src={l008} />
                                <br></br>
                                <p> Λ/008 Λουκάνικο με παρμεζάνα</p>
                              
                                </div>
                                
                                
                                <div className='prod'>
                                <img src={l009} />
                                <br></br>
                                <p>Λ/009 Λουκάνικο Κυνηγού</p>
                              
                                </div>
                                
                                <br></br>
                                <div className='prod'>
                                <img src={l005} />
                                <br></br>
                                <p>Λ/005 Λουκάνικο Μοσχαρίσιο 100%</p>
                              
                                </div>
                                
                                
                                <div className='prod'>
                                <img src={l015} />
                                <br></br>
                                <p>Λ/015 Λουκάνικο με γραβιέρα</p>
                              
                                </div>
                                
                                <br></br>

<h1 id='vrasta'>ΒΡΑΣΤΑ</h1>  
                                <hr className='underline'></hr>

<br></br>
                             



                                <div className='product'>
                                    <div className='code'><h4>Β/001</h4>
                                    </div>
                                    <div className='type'><h4>Πάριζα special</h4>
                                    </div>
                                    <div className='name'><p>Μία πάριζα από τα παλιά..</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Β/002</h4>
                                    </div>
                                    <div className='type'><h4>Μορταδέλλα Τ.Ιταλίας</h4>
                                    </div>
                                    <div className='name'><p>Με σπαστό μαύρο πιπέρι και ολόκληρο φυστίκι Αιγίνης.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Β/003</h4>
                                    </div>
                                    <div className='type'><h4>Pork Shoulder</h4>
                                    </div>
                                    <div className='name'><p>Τεμάχια χοιρινής σπάλας. Το αυτούσιο ζαμπόν.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Β/004</h4>
                                    </div>
                                    <div className='type'><h4>Γαλοπούλα</h4>
                                    </div>
                                    <div className='name'><p>Φιλέτο στήθος γαλοπούλας για τοστ 10x10</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Β/005</h4>
                                    </div>
                                    <div className='type'><h4>Πηχτή</h4>
                                    </div>
                                    <div className='name'><p>Ξυδάτη με αρακά και καρότο. Σερβίρεται ως κρύος μεζές.</p>  
                                    </div>
                                </div> 
                                
                                <div className='product'>
                                    <div className='code'><h4>Β/006</h4>
                                    </div>
                                    <div className='type'><h4>Καβουρμάς</h4>
                                    </div>
                                    <div className='name'><p>Κρέας μόσχου καβουρδισμένο στο ζουμί του. Πήξη με το ζωμό του κρέατος. (Κρύος και ζεστός μεζές)</p>  
                                    </div>
                                </div> 
                                <br></br>
                                <br></br>
                                <div className='prod' style={{maxWidth:'100%'}}>
                                <img src={b005} />
                                <br></br>
                                <p>Β/005 Πηχτη και Β/006 Καβουρμάς</p>
                              
                                </div>
                                <br></br>
                                <br></br>

                                <h1>ΚΑΠΝΙΣΤΑ</h1>  
                                <hr className='underline'></hr>
                                <br></br>
                                <br></br>

                                <div className='product'>
                                    <div className='code'><h4>Κ/001</h4>
                                    </div>
                                    <div className='type'><h4>Μπέικον</h4>
                                    </div>
                                    <div className='name'><p>Πανσέτα ελληνικής επεξεργασίας καπνισμένη στην οξιά και ακανόνιστη.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Κ/002</h4>
                                    </div>
                                    <div className='type'><h4>Πανσέτα Ρολλέ Ριγανάτο ή Τσίλι</h4>
                                    </div>
                                    <div className='name'><p>Πανσέτα με επικάλυψη ρίγανης και μαύρου πιπεριού ή με τσίλι και σκόρδο.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Κ/003</h4>
                                    </div>
                                    <div className='type'><h4>Λαιμός Α/Ο</h4>
                                    </div>
                                    <div className='name'><p>Λαιμός καπνισμένος στην οξιά.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Κ/004</h4>
                                    </div>
                                    <div className='type'><h4>Μπριζόλα Μ/Ο</h4>
                                    </div>
                                    <div className='name'><p>Μπριζόλα καπνισμένη στην οξιά.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Κ/005</h4>
                                    </div>
                                    <div className='type'><h4>Μπριζόλα Α/Ο</h4>
                                    </div>
                                    <div className='name'><p>Μπριζόλα με το παραφιλέτο. Τραβηχτό το κόκκαλο. Μερίδες για πιάτο ζεστό ή κρύο, 2-2 συσκευασμένες.</p>  
                                    </div>
                                </div> 
                                <div className='prod'>
                                <img src={l006} />
                                <br></br>
                                <p>K/003 Χοιρινός Λαιμός Καπνιστός</p>
                                <br></br>
                                    
                                
                                </div>
                                <div className='prod'>
                                <img src={l007} />
                                <br></br>
                                <p> K/005 Χοιρινή Μπριζόλα Α/Ο και Κ/006 Μπριζόλα μάτι</p>
                                <br></br>
                                </div>
                                <br></br>
                                <div className='prod'>
                                <img src={l008} />
                                <br></br>
                                <p> Κ/002 Πανσέτα ρολλέ με ρίγανη ή τσίλι</p>
                              
                                </div>
                                <div className='prod'>
                                <img src={pig} />
                                <br></br>
                            </div>
                            <div className='product'>
                                    <div className='code'><h4>K/006</h4>
                                    </div>
                                    <div className='type'><h4>Μπριζόλα ρολλέ</h4>
                                    </div>
                                    <div className='name'><p>Μπριζόλα μάτι. Καπνισμένη στην οξιά. Σε φέτες για κρύο πιάτο ή σάντουιτς.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Κ/007</h4>
                                    </div>
                                    <div className='type'><h4>Μπούτι Χοιρινό Πιπεράτο</h4>
                                    </div>
                                    <div className='name'><p>Μπούτι στρογγυλό και τρανς με μαύρο σπαστό πιπέρι. Για κρύο ή και ζεστό πιάτο.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Κ/008</h4>
                                    </div>
                                    <div className='type'><h4>Φιλέτο Γαλοπούλας 10*10</h4>
                                    </div>
                                    <div className='name'><p>Τετράγωνο φιλέτο γαλοπούλας.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>K/009</h4>
                                    </div>
                                    <div className='type'><h4>Καπνιστό Φιλέτο γαλοπούλας ρολλέ</h4>
                                    </div>
                                    <div className='name'><p>Ψητό καπνιστό στήθος γαλοπούλας. Ιδανικό για gourmet σάντουιτς.</p>  
                                    </div>
                                </div> 
                                <div className='prod'>
                                <img src={k007} />
                                <br></br>
                                <p> Κ/ 007 Μπούτι Χοιρινό Πιπεράτο</p>
                                <br></br>
                                </div>
                              
                                <div className='prod'>
                                <img src={k009} />
                                <br></br>
                                <p> Κ/009 Καπνιστό Φιλέτο Γαλοπούλας Ρολλέ</p>
                              
                                </div>
                                <div className='product'>
                                    <div className='code'><h4>K/010</h4>
                                    </div>
                                    <div className='type'><h4>Σύγκλινο</h4>
                                    </div>
                                    <div className='name'><p>Τεμάχια σπάλας απονευρωμένης με επικάλυψη δάφνης, ρίγανης, πορτοκαλιού και ελαιόλαδου.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>K/011</h4>
                                    </div>
                                    <div className='type'><h4>Απάκι Κοτόπουλο</h4>
                                    </div>
                                    <div className='name'><p>Φιλέτο στήθος κοτόπουλου. Ωριμασμένο στο ξύδι και καπνισμένο στην οξιά. Με επικάλυψη μπαχαρικών.</p>  
                                    </div>
                                </div> 
                                
                                <div className='product'>
                                    <div className='code'><h4>Κ/012</h4>
                                    </div>
                                    <div className='type'><h4>Απάκι Χοιρινό (Γλυκιά πάπρικα)</h4>
                                    </div>
                                    <div className='name'><p>Τεμάχιο χοιρινού λαιμού ωριμασμένο στο ξύδι με επικάλυψη πάπρικας. Κρύος και ζεστός μεζές.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>K/013</h4>
                                    </div>
                                    <div className='type'><h4>Απάκι Χοιρινό (Κύμινο)</h4>
                                    </div>
                                    <div className='name'><p>Τεμάχιο χοιρινού λαιμού ωριμασμένο στο ξύδι με επικάλυψη κύμινου. Κρύος και ζεστός μεζές.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>K/014</h4>
                                    </div>
                                    <div className='type'><h4>Ψαρονέφρι (φιλέτο)</h4>
                                    </div>
                                    <div className='name'><p>Χοιρινό φιλέτο της μπριζόλας, το λεγόμενο ψαρονέφρι. Με επικάλυψη ρίγανης και μαύρου πιπεριού.</p>  
                                    </div>
                                </div> 
                                <div className='prod'>
                                <img src={k010} />
                                <br></br>
                                <p> Κ/010 Σύγκλινο τύπου Μάνης</p>
                                <br></br>
                                </div>
                              
                                <div className='prod'>
                                <img src={k012} />
                                <br></br>
                                <p>Κ/012 - 3 Απάκι με κύμινο ή με γλυκιά πάπρικα</p>
                              
                                </div>
                                <div className='prod'>
                                <img src={k011} />
                                <br></br>
                                <p> Κ/011 Απάκι Κοτόπουλο</p>
                                <br></br>
                                </div>
                              
                                <div className='prod'>
                                <img src={k014} />
                                <br></br>
                                <p> Κ/014 Ψαρονέφρι καπνιστό</p>
                              
                                </div>


                                <h1>ΣΑΛΑΜΙΑ</h1>  
                                <hr className='underline'></hr>
                                <br></br>
                                <br></br>

                                <div className='product'>
                                    <div className='code'><h4>Σ/001</h4>
                                    </div>
                                    <div className='type'><h4>Σαλάμι Αέρος τ. Ουγγαρίας</h4>
                                    </div>
                                    <div className='name'><p>Σαλάμι Αέρος απαλό με ολόκληρο μαύρο πιπέρι.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Σ/002</h4>
                                    </div>
                                    <div className='type'><h4>Σαλάμι Αέρος Πικάντικο</h4>
                                    </div>
                                    <div className='name'><p>Σαλάμι Αέρος πικάντικο με μπούκοβο.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Σ/003</h4>
                                    </div>
                                    <div className='type'><h4>Σαλάμι Πιπερόνι</h4>
                                    </div>
                                    <div className='name'><p>Σαλάμι θερμικής επεξεργασίας με μπούκοβο.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Σ/004</h4>
                                    </div>
                                    <div className='type'><h4>Σαλάμι Μπύρας</h4>
                                    </div>
                                    <div className='name'><p>Σαλάμι ημίξηρο με σιναπόσπορο.</p>  
                                    </div>
                                </div>
                                <div className='product'>
                                    <div className='code'><h4>Σ/005</h4>
                                    </div>
                                    <div className='type'><h4>Σαλάμι Αέρος Μίνι</h4>
                                    </div>
                                    <div className='name'><p>Θυμίζει το παλιό σαλάμι Λευκάδας.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Σ/006</h4>
                                    </div>
                                    <div className='type'><h4>Σαλάμι Σκορδάτο</h4>
                                    </div>
                                    <div className='name'><p>Σαλάμι θερμικής επεξεργασίας με επίγευση σκόρδου.</p>  
                                    </div>
                                </div>


                                    <h1>ΩΡΙΜΑΝΣΗΣ</h1>  
                                <hr className='underline'></hr>
                                <br></br>
                                <br></br>

                                <div className='product'>
                                    <div className='code'><h4>Φ/001</h4>
                                    </div>
                                    <div className='type'><h4>Παστουρμάς Τ. Αρμένικος</h4>
                                    </div>
                                    <div className='name'><p>Τεμάχιο μόσχου τρανς ή στρογγυλό με επικάλυψη από τσιμένι. Πικάντικη γεύση.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Φ/002</h4>
                                    </div>
                                    <div className='type'><h4>Σουτζούκι Πλεκτό</h4>
                                    </div>
                                    <div className='name'><p>Σουτζούκι ανάμεικτο , από χοιρινό και μοσχαρίσιο κρέας.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Φ/003</h4>
                                    </div>
                                    <div className='type'><h4>Σουτζούκι Πολίτικο</h4>
                                    </div>
                                    <div className='name'><p>Σουτζούκι μοσχαρίσιο με πικάντικη γεύση.</p>  
                                    </div>
                                </div> 
                                <div className='product'>
                                    <div className='code'><h4>Φ/004</h4>
                                    </div>
                                    <div className='type'><h4>Παστράμι</h4>
                                    </div>
                                    <div className='name'><p>Από διαλεχτό μοσχαρίσιο κρέας με φυσικά μυρωδικά</p>  
                                    </div>
                                </div>
                                <div className='product'>
                                    <div className='code'><h4>Φ/004</h4>
                                    </div>
                                    <div className='type'><h4>Νουά Μόσχου</h4>
                                    </div>
                                    <div className='name'><p>Εκλεκτό έδεσμα με βάση το ατόφιο μοσχαρίσιο κρέας.</p>  
                                    </div>
                                </div>
                                <div className='prod' style={{maxWidth:'100%'}}>
                                <img src={f001} />
                                <br></br>
                                <p>Φ/001 Παστουρμάς Τ. Αρμένικος</p>
                              
                                </div>
                                <div className='prod' style={{maxWidth:'100%'}}>
                                <img src={f003} />
                                <br></br>
                                <p>  Φ/003 Σουτζούκι Πολίτικο</p>
                              
                                </div>
                           

                                </div>




















                        </div>
                    </div>
        
                       
        


        );
        }else {
            return(
              
                
                  
                <div>
                    <div className='left-side'>
                           
                            <MobileMenu/>
                            <ImageSlider/>
                    </div>
                <div className='right-side-products' ><More/><Searchbar/>

                        <h1>ΛΟΥΚΑΝΙΚΑ</h1>  
                        <hr className='underline'></hr>
                        <div className='product'>
                            <div className='code'><h4>KΩΔΙΚΟΣ</h4>
                            </div>
                            <div className='type'><h4>ΕΙΔΟΣ</h4>
                            </div>
                            <div className='name'><h4>ΠΕΡΙΓΡΑΦΗ</h4>  
                            </div>
                        
                        <div className='product'>
                            <div className='code'><h4>Λ/001</h4>
                            </div>
                            <div className='type'><h4>Χωριάτικο Έξτρα</h4>
                            </div>
                            <div className='name'><p>100% χοιρινό κρέας. Xαμηλή περιεκτικότητα σε λιπαρά. Κυρίαρχη γεύση πράσου και φυσικών μπαχαρικών.</p>  
                            </div>
                        </div>    
                        <div className='product'>
                            <div className='code'><h4>Λ/002</h4>
                            </div>
                            <div className='type'><h4>Τ. Καρδίτσας</h4>
                            </div>
                            <div className='name'><p>Παραδοσιακή συνταγή από την ευρύτερη περιοχή της Καρδίτσας, με 100% χοιρινό κρέας και πράσο.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Λ/003</h4>
                            </div>
                            <div className='type'><h4>Ωμό Καπνιστό</h4>
                            </div>
                            <div className='name'><p>100% χοιρινό κρέας. Κυρίαρχη γεύση γλυκού κρεμμυδιού και ρίγανης</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Λ/004</h4>
                            </div>
                            <div className='type'><h4>Χοιρινό με Πορτοκάλι</h4>
                            </div>
                            <div className='name'><p>Παραδοσιακή συνταγή Μάνης, με 100% χοιρινό κρέας, πορτοκάλι και Αγιωργίτικο κρασί .</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Λ/005</h4>
                            </div>
                            <div className='type'><h4>Μοσχαρίσιο 100%</h4>
                            </div>
                            <div className='name'><p>100% μοσχαρίσιο κρέας, φυσικά μπαχαρικά. Χαμηλή περιεκτικότητα σε λιπαρά.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Λ/010</h4>
                            </div>
                            <div className='type'><h4>Βοδινό κρασοριγανάτο</h4>
                            </div>
                            <div className='name'><p>Προϊόν με 100% μοσχαρίσιο ελληνικό κρέας. Συσκευασία με ρίγανη και κρασί Νεμέας.</p>  
                            </div>
                        </div> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div className='prod'>
                        <img src={l002} />
                        <br></br>
                        <p>Λ/002 T. Καρδίτσας</p>
                        <br></br>
                            
                        
                        </div>
                        <div className='prod'>
                        <img src={l004} />
                        <br></br>
                        <p>Λ/004 Λουκάνικο με πορτοκάλι κ κρασί</p>
                        <br></br>
                        </div>
                        
                        
                        






                        





                        <div className='product'>
                            <div className='code'><h4>Λ/006</h4>
                            </div>
                            <div className='type'><h4>Χωριάτικη Μπουκιά</h4>
                            </div>
                            <div className='name'><p>100% χοιρινό κρέας σε πρόβειο έντερο. Κυρίαρχη γεύση γλυκού κρεμμυδιού και ρίγανης.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Λ/007</h4>
                            </div>
                            <div className='type'><h4>Ντομάτα λιαστή και φέτα</h4>
                            </div>
                            <div className='name'><p>100% χοιρινό κρέας, λιαστή ντομάτα και φέτα Π.Ο.Π.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Λ/008</h4>
                            </div>
                            <div className='type'><h4>Παρμεζάνας</h4>
                            </div>
                            <div className='name'><p>100% χοιρινό κρέας και παρμεζάνα Reggiano.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Λ/015</h4>
                            </div>
                            <div className='type'><h4>Γραβιέρας</h4>
                            </div>
                            <div className='name'><p>100% χοιρινό κρέας και ημίσκληρη γραβιέρα.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Λ/009</h4>
                            </div>
                            <div className='type'><h4>Κυνηγού</h4>
                            </div>
                            <div className='name'><p>100% χοιρινό κρέας, λιαστή ντομάτα και φέτα Π.Ο.Π. σε πρόβειο έντερο.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Λ/011</h4>
                            </div>
                            <div className='type'><h4>Ξυδάτο</h4>
                            </div>
                            <div className='name'><p>100% χοιρινό κρέας, μαριναρισμένο σε κόκκινο ξύδι και ρίγανη.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Λ/012</h4>
                            </div>
                            <div className='type'><h4>Τρικάλων</h4>
                            </div>
                            <div className='name'><p>Λουκάνικο για food service με πράσο.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Λ/016</h4>
                            </div>
                            <div className='type'><h4>Χοιρινό με Σταμναγκάθι</h4>
                            </div>
                            <div className='name'><p>100% χοιρινό κρέας και σταμναγκαθι</p>  
                            </div>
                        </div> 
                        
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>


                        <div className='prod'>
                        <img src={l006} />
                        <br></br>
                        <p>Λ/006 Χωριάτικη μπουκιά</p>
                        <br></br>
                            
                        
                        </div>
                        <div className='prod'>
                        <img src={l007} />
                        <br></br>
                        <p>Λ/007 Λουκάνικο με λιαστή ντομάτα και φέτα ΠΟΠ</p>
                        <br></br>
                        </div>
                        <br></br>
                        <div className='prod'>
                        <img src={l008} />
                        <br></br>
                        <p> Λ/008 Λουκάνικο με παρμεζάνα</p>
                      
                        </div>
                        
                        
                        <div className='prod'>
                        <img src={l009} />
                        <br></br>
                        <p>Λ/009 Λουκάνικο Κυνηγού</p>
                      
                        </div>
                        
                        <br></br>
                        <div className='prod'>
                        <img src={l005} />
                        <br></br>
                        <p>Λ/005 Λουκάνικο Μοσχαρίσιο 100%</p>
                      
                        </div>
                        
                        
                        <div className='prod'>
                        <img src={l015} />
                        <br></br>
                        <p>Λ/015 Λουκάνικο με γραβιέρα</p>
                      
                        </div>
                        
                        <br></br>

<h1>ΒΡΑΣΤΑ</h1>  
                        <hr className='underline'></hr>

<br></br>
                     



                        <div className='product'>
                            <div className='code'><h4>Β/001</h4>
                            </div>
                            <div className='type'><h4>Πάριζα special</h4>
                            </div>
                            <div className='name'><p>Μία πάριζα από τα παλιά..</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Β/002</h4>
                            </div>
                            <div className='type'><h4>Μορταδέλλα Τ.Ιταλίας</h4>
                            </div>
                            <div className='name'><p>Με σπαστό μαύρο πιπέρι και ολόκληρο φυστίκι Αιγίνης.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Β/003</h4>
                            </div>
                            <div className='type'><h4>Pork Shoulder</h4>
                            </div>
                            <div className='name'><p>Τεμάχια χοιρινής σπάλας. Το αυτούσιο ζαμπόν.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Β/004</h4>
                            </div>
                            <div className='type'><h4>Γαλοπούλα</h4>
                            </div>
                            <div className='name'><p>Φιλέτο στήθος γαλοπούλας για τοστ 10x10</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Β/005</h4>
                            </div>
                            <div className='type'><h4>Πηχτή</h4>
                            </div>
                            <div className='name'><p>Ξυδάτη με αρακά και καρότο. Σερβίρεται ως κρύος μεζές.</p>  
                            </div>
                        </div> 
                        
                        <div className='product'>
                            <div className='code'><h4>Β/006</h4>
                            </div>
                            <div className='type'><h4>Καβουρμάς</h4>
                            </div>
                            <div className='name'><p>Κρέας μόσχου καβουρδισμένο στο ζουμί του. Πήξη με το ζωμό του κρέατος. (Κρύος και ζεστός μεζές)</p>  
                            </div>
                        </div> 
                        <br></br>
                        <br></br>
                        <div className='prod' style={{maxWidth:'100%'}}>
                        <img src={b005} />
                        <br></br>
                        <p>Β/005 Πηχτη και Β/006 Καβουρμάς</p>
                      
                        </div>
                        <br></br>
                        <br></br>

                        <h1>ΚΑΠΝΙΣΤΑ</h1>  
                        <hr className='underline'></hr>
                        <br></br>
                        <br></br>

                        <div className='product'>
                            <div className='code'><h4>Κ/001</h4>
                            </div>
                            <div className='type'><h4>Μπέικον</h4>
                            </div>
                            <div className='name'><p>Πανσέτα ελληνικής επεξεργασίας καπνισμένη στην οξιά και ακανόνιστη.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Κ/002</h4>
                            </div>
                            <div className='type'><h4>Πανσέτα Ρολλέ Ριγανάτο ή Τσίλι</h4>
                            </div>
                            <div className='name'><p>Πανσέτα με επικάλυψη ρίγανης και μαύρου πιπεριού ή με τσίλι και σκόρδο.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Κ/003</h4>
                            </div>
                            <div className='type'><h4>Λαιμός Α/Ο</h4>
                            </div>
                            <div className='name'><p>Λαιμός καπνισμένος στην οξιά.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Κ/004</h4>
                            </div>
                            <div className='type'><h4>Μπριζόλα Μ/Ο</h4>
                            </div>
                            <div className='name'><p>Μπριζόλα καπνισμένη στην οξιά.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Κ/005</h4>
                            </div>
                            <div className='type'><h4>Μπριζόλα Α/Ο</h4>
                            </div>
                            <div className='name'><p>Μπριζόλα με το παραφιλέτο. Τραβηχτό το κόκκαλο. Μερίδες για πιάτο ζεστό ή κρύο, 2-2 συσκευασμένες.</p>  
                            </div>
                        </div> 
                        <div className='prod'>
                        <img src={l006} />
                        <br></br>
                        <p>K/003 Χοιρινός Λαιμός Καπνιστός</p>
                        <br></br>
                            
                        
                        </div>
                        <div className='prod'>
                        <img src={l007} />
                        <br></br>
                        <p> K/005 Χοιρινή Μπριζόλα Α/Ο και Κ/006 Μπριζόλα μάτι</p>
                        <br></br>
                        </div>
                        <br></br>
                        <div className='prod'>
                        <img src={l008} />
                        <br></br>
                        <p> Κ/002 Πανσέτα ρολλέ με ρίγανη ή τσίλι</p>
                      
                        </div>
                        <div className='prod'>
                        <img src={pig} />
                        <br></br>
                    </div>
                    <div className='product'>
                            <div className='code'><h4>K/006</h4>
                            </div>
                            <div className='type'><h4>Μπριζόλα ρολλέ</h4>
                            </div>
                            <div className='name'><p>Μπριζόλα μάτι. Καπνισμένη στην οξιά. Σε φέτες για κρύο πιάτο ή σάντουιτς.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Κ/007</h4>
                            </div>
                            <div className='type'><h4>Μπούτι Χοιρινό Πιπεράτο</h4>
                            </div>
                            <div className='name'><p>Μπούτι στρογγυλό και τρανς με μαύρο σπαστό πιπέρι. Για κρύο ή και ζεστό πιάτο.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Κ/008</h4>
                            </div>
                            <div className='type'><h4>Φιλέτο Γαλοπούλας 10*10</h4>
                            </div>
                            <div className='name'><p>Τετράγωνο φιλέτο γαλοπούλας.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>K/009</h4>
                            </div>
                            <div className='type'><h4>Καπνιστό Φιλέτο γαλοπούλας ρολλέ</h4>
                            </div>
                            <div className='name'><p>Ψητό καπνιστό στήθος γαλοπούλας. Ιδανικό για gourmet σάντουιτς.</p>  
                            </div>
                        </div> 
                        <div className='prod'>
                        <img src={k007} />
                        <br></br>
                        <p> Κ/ 007 Μπούτι Χοιρινό Πιπεράτο</p>
                        <br></br>
                        </div>
                      
                        <div className='prod'>
                        <img src={k009} />
                        <br></br>
                        <p> Κ/009 Καπνιστό Φιλέτο Γαλοπούλας Ρολλέ</p>
                      
                        </div>
                        <div className='product'>
                            <div className='code'><h4>K/010</h4>
                            </div>
                            <div className='type'><h4>Σύγκλινο</h4>
                            </div>
                            <div className='name'><p>Τεμάχια σπάλας απονευρωμένης με επικάλυψη δάφνης, ρίγανης, πορτοκαλιού και ελαιόλαδου.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>K/011</h4>
                            </div>
                            <div className='type'><h4>Απάκι Κοτόπουλο</h4>
                            </div>
                            <div className='name'><p>Φιλέτο στήθος κοτόπουλου. Ωριμασμένο στο ξύδι και καπνισμένο στην οξιά. Με επικάλυψη μπαχαρικών.</p>  
                            </div>
                        </div> 
                        
                        <div className='product'>
                            <div className='code'><h4>Κ/012</h4>
                            </div>
                            <div className='type'><h4>Απάκι Χοιρινό (Γλυκιά πάπρικα)</h4>
                            </div>
                            <div className='name'><p>Τεμάχιο χοιρινού λαιμού ωριμασμένο στο ξύδι με επικάλυψη πάπρικας. Κρύος και ζεστός μεζές.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>K/013</h4>
                            </div>
                            <div className='type'><h4>Απάκι Χοιρινό (Κύμινο)</h4>
                            </div>
                            <div className='name'><p>Τεμάχιο χοιρινού λαιμού ωριμασμένο στο ξύδι με επικάλυψη κύμινου. Κρύος και ζεστός μεζές.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>K/014</h4>
                            </div>
                            <div className='type'><h4>Ψαρονέφρι (φιλέτο)</h4>
                            </div>
                            <div className='name'><p>Χοιρινό φιλέτο της μπριζόλας, το λεγόμενο ψαρονέφρι. Με επικάλυψη ρίγανης και μαύρου πιπεριού.</p>  
                            </div>
                        </div> 
                        <div className='prod'>
                        <img src={k010} />
                        <br></br>
                        <p> Κ/010 Σύγκλινο τύπου Μάνης</p>
                        <br></br>
                        </div>
                      
                        <div className='prod'>
                        <img src={k012} />
                        <br></br>
                        <p>Κ/012 - 3 Απάκι με κύμινο ή με γλυκιά πάπρικα</p>
                      
                        </div>
                        <div className='prod'>
                        <img src={k011} />
                        <br></br>
                        <p> Κ/011 Απάκι Κοτόπουλο</p>
                        <br></br>
                        </div>
                      
                        <div className='prod'>
                        <img src={k014} />
                        <br></br>
                        <p> Κ/014 Ψαρονέφρι καπνιστό</p>
                      
                        </div>


                        <h1>ΣΑΛΑΜΙΑ</h1>  
                        <hr className='underline'></hr>
                        <br></br>
                        <br></br>

                        <div className='product'>
                            <div className='code'><h4>Σ/001</h4>
                            </div>
                            <div className='type'><h4>Σαλάμι Αέρος τ. Ουγγαρίας</h4>
                            </div>
                            <div className='name'><p>Σαλάμι Αέρος απαλό με ολόκληρο μαύρο πιπέρι.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Σ/002</h4>
                            </div>
                            <div className='type'><h4>Σαλάμι Αέρος Πικάντικο</h4>
                            </div>
                            <div className='name'><p>Σαλάμι Αέρος πικάντικο με μπούκοβο.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Σ/003</h4>
                            </div>
                            <div className='type'><h4>Σαλάμι Πιπερόνι</h4>
                            </div>
                            <div className='name'><p>Σαλάμι θερμικής επεξεργασίας με μπούκοβο.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Σ/004</h4>
                            </div>
                            <div className='type'><h4>Σαλάμι Μπύρας</h4>
                            </div>
                            <div className='name'><p>Σαλάμι ημίξηρο με σιναπόσπορο.</p>  
                            </div>
                            <div className='product'>
                            <div className='code'><h4>Σ/005</h4>
                            </div>
                            <div className='type'><h4>Σαλάμι Αέρος Μίνι</h4>
                            </div>
                            <div className='name'><p>Θυμίζει το παλιό σαλάμι Λευκάδας.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Σ/006</h4>
                            </div>
                            <div className='type'><h4>Σαλάμι Σκορδάτο</h4>
                            </div>
                            <div className='name'><p>Σαλάμι θερμικής επεξεργασίας με επίγευση σκόρδου.</p>  
                            </div>
                        </div>


                            <h1>ΩΡΙΜΑΝΣΗΣ</h1>  
                        <hr className='underline'></hr>
                        <br></br>
                        <br></br>

                        <div className='product'>
                            <div className='code'><h4>Φ/001</h4>
                            </div>
                            <div className='type'><h4>Παστουρμάς Τ. Αρμένικος</h4>
                            </div>
                            <div className='name'><p>Τεμάχιο μόσχου τρανς ή στρογγυλό με επικάλυψη από τσιμένι. Πικάντικη γεύση.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Φ/002</h4>
                            </div>
                            <div className='type'><h4>Σουτζούκι Πλεκτό</h4>
                            </div>
                            <div className='name'><p>Σουτζούκι ανάμεικτο , από χοιρινό και μοσχαρίσιο κρέας.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Φ/003</h4>
                            </div>
                            <div className='type'><h4>Σουτζούκι Πολίτικο</h4>
                            </div>
                            <div className='name'><p>Σουτζούκι μοσχαρίσιο με πικάντικη γεύση.</p>  
                            </div>
                        </div> 
                        <div className='product'>
                            <div className='code'><h4>Φ/004</h4>
                            </div>
                            <div className='type'><h4>Παστράμι</h4>
                            </div>
                            <div className='name'><p>Από διαλεχτό μοσχαρίσιο κρέας με φυσικά μυρωδικά</p>  
                            </div>
                        </div>
                        <div className='product'>
                            <div className='code'><h4>Φ/004</h4>
                            </div>
                            <div className='type'><h4>Νουά Μόσχου</h4>
                            </div>
                            <div className='name'><p>Εκλεκτό έδεσμα με βάση το ατόφιο μοσχαρίσιο κρέας.</p>  
                            </div>
                        </div>
                        <div className='prod' style={{maxWidth:'100%'}}>
                        <img src={f001} />
                        <br></br>
                        <p>Φ/001 Παστουρμάς Τ. Αρμένικος</p>
                      
                        </div>
                        <div className='prod' style={{maxWidth:'100%'}}>
                        <img src={f003} />
                        <br></br>
                        <p>  Φ/003 Σουτζούκι Πολίτικο</p>
                      
                        </div>
                   

</div>




















</div>

                </div>

            </div>
                
                    

            );
        }
    };
};
export default Products;