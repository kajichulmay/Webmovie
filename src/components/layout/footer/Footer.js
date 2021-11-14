import React from 'react';

import BranndsLogo from './BranndsLogo';
import DetailAddress from './DetailAddress';
import Social from './Social';
function Footer() {
  return (
    <div className="footer">
      <div className="containerFooter">
        <BranndsLogo />
        <DetailAddress />
        <Social />
      </div>
    </div>
  );
}

export default Footer;
