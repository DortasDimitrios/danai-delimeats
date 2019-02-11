import React from 'react';
import Menu from './Menu';
import {BrowserRouter,Link,Switch} from 'react-router-dom';
import WhoWeAreStyle from '../styles/WhoWeAreStyle.css';
import {withRouter} from 'react-router-dom';
import aboutdown from '../images/about-down.png';
import twitter from '../images/twitter.png';
import fb from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import MobileMenu from './MobileMenu'

class About extends React.Component {
    render(){
        return(
            <div>
            <br></br>
            <br></br>
           
            <br></br>
            <br></br>
            <div className='Text-about'>
            <h1>Πως ξεκίνησαν όλα:</h1>
              <p>Η <b>αλλαντοποιία</b> μας ξεκινάει το 1981, όταν ο Δημήτρης Γιαννακός και η σύζυγός του Δανάη, από το Μεσενικόλα Καρδίτσας, αποφάσισαν να ιδρύσουν ένα μικρό εργαστήρι επεξεργασίας κρεάτων στα Λιόσια Αττικής. Ο Δημήτρης έχοντας ήδη σε ηλικία 27 ετών, μία πολυετή πείρα στην παραγωγή αλλαντικών, ένα ανήσυχο πνεύμα για δημιουργία και μία εκπληκτική γυναίκα για συνεργάτη και σύζυγο, κυνηγάει το όνειρό του…
              </p>
            <h1>Η αλλαντοποιία</h1>
             <p> …να φτιάξει τη δική του αλλαντοποιία.</p>

              <p>Η εταιρεία «Αλλαντικά Δανάη» ιδρύθηκε επισήμως το 1989 με στόχο να προσφέρει χειροποίητα αλλαντικά υψηλής ποιότητας στους καταναλωτές.
              </p>
              <h1>Η οικογένεια μεγαλώνει!</h1>
              <p>Η οικογένειά τους μεγάλωνε παράλληλα με την απόκτηση 3 παιδιών. Το 2012, η σκυτάλη παραδόθηκε στα παιδιά Κων/νο και Άννα Γιαννακού. Η εταιρία εστιάζει πλέον στην παραγωγή gourmet αλλαντικών.

              Ο Δημήτρης & η «κυρά Δανάη» παραμένουν η ψυχή της εταιρίας. Ταυτόχρονα αποδεικνύουν πως η σκληρή δουλειά, η υπομονή και το μεράκι μπορούν να πραγματοποιήσουν κάθε μας όνειρο.
              </p>
              <br></br>
              <br></br>
              <br></br>
              <img className='image-down' src={aboutdown}/>

              <div className='social-media'>
             <br></br>
              <br></br>
                  <h4>
                      Βρείτε μας ΚΑΙ ΕΔΩ:
                   </h4>
                   <br></br>
                   <br></br>
                   
                      <div className='mini-icons'>
                          {/*  */}
                          <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://danae-delimeats.com" target="_blank"><img title='Share this on LinkedIn' className='linkedIn' src={linkedin} /></a>
                          <a href="https://twitter.com/share?url=https://danae-delimeats.com&amp;text=Δείτε%20Περισσότερα:&amp;hashtags=danaedelimeats" target="_blank"> <img title='Share this on Twitter' src={twitter} />   </a>

                          <a href='https://www.instagram.com/danae_delimeats/' target='_blank'><img src={instagram} /></a>
                          <a href='https://www.facebook.com/allantikadanah/' target='_blank'> <img src={fb} /></a>
                      </div>
                 
              </div>

            </div>
          </div>
        );
    }
};

export default About;