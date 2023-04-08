import React from 'react'
import company from '/home/comp/Desktop/Webd/Insynk/insynk/src/assets/company.png'
import './Header.css';

function Header() {
  return (
    <>
    <div className="header">
        <div className="company">
            <img src={company} alt="Insynk Studios" />
        </div>
        
        <div className="search">
        <form><button><i className='fa fa-search'></i></button>
        <input type="text" placeholder='     Search for a Movie'/></form>
        </div>
        <hr></hr>
    </div>
    </>
  )
}

export default Header
