import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu.js'
import MobileMenu from '../components/MobileMenu';
import  HomeMob from '../styles/HomeMobile.css'
import homeimg from '../images/homeimg.JPG';
import logo from '../images/logo2.png'
import hometext from '../images/home-text.jpg';


class HomeMobile extends React.Component{
   render(){ 
       return( 
    <div className='content'>
    <div className='logo-wrapper'>
        <img src={logo} />
    </div>
    <br></br>
    
    <br></br>
    <br></br>
    <hr></hr>
    <br></br>
    <br></br>
    <div className='Text'>
        <h1>Καλωσήρθατε στα αλλαντικά κυρά Δανάη.</h1>
        <br></br>
        <h2>Εδώ η ποιότητα είναι οικογενειακή υπόθεση.</h2>
        <br></br>
        <br></br>
        <br></br>
        <p>Στα αλλαντικά κυρά Δανάη εδώ και πολλά χρόνια <b>δημιουργούμε</b> υψηλής ποιότητας αλλαντικά που παράγουμεμε πολλή αγάπη και μεράκι.</p>
        <img src={hometext}/>
    </div>
</div>
       );
   }

};

export default HomeMobile;