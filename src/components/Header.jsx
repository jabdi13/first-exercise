import React from 'react';
import newYorkTimesLogo from '../img/newYork__title.png';
import '../stylesheets/components/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="containerImg">
        <img src={newYorkTimesLogo} alt="New york times title" />
      </div>
      <div className="subheader">
        <h3>Contenido de subcabecera</h3>
      </div>
    </header>
  );
};

export default Header;