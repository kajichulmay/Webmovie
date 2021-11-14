import React from 'react';
import logo from '../../../images/logo.png';
import SearchBox from './SearchBox';
function Header() {
  return (
    <div className="header">
      <div className="containerBlock">
        <div className="logoImgHeader">
          <img src={logo} />
          <span className="nameBrands">BOXMOVIE</span>
        </div>
        <SearchBox />
      </div>
    </div>
  );
}

export default Header;
