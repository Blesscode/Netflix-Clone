import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    //scroll listner
    const[show,setShow]=useState(false);
    /*useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){ //scroll over y-axis is >100px
                handelShow(true); //kick in the black nav
            }
            else{
                handelShow(false);
            }
        });
        return()=>{
            window.removeEventListener("scroll");
        };
    },[]);*/

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
    <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix logo"/>
  
    <img className="new_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix logo"/>
      
    </div>
    
  )
}

export default Nav
