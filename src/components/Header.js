import React from 'react';
import '../App.css';
import memebckg from '../images/memebckg1.png';
import crane from '../images/crane3.gif';



function Header(){
    return (
        <header>
            <img className='headercls' src={memebckg} alt="meme background img"/>

            <h2 className='headerh2'>           
             <img src={crane} alt='meme crane'/>&nbsp;&nbsp;&nbsp;
             My Meme Generator
            </h2>
        </header>
    )
}


export default Header;

//this is Header function component, exporting here, imported and executed inside App.js



