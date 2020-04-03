import React from 'react';

import logoFacebook from '../assets/facebook-1.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logoFacebook} />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;