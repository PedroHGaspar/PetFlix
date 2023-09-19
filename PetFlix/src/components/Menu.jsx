// Menu.js
import React from 'react';

function Menu() {
  return (
    <nav className="menu">
        <img className='img-header' src="/petflix-logo.png" alt="" />
      <ul>
        <li><a href="#">Cachorros</a></li>
        <li><a href="#">Gatos</a></li>
        {/* <li><a href="#">Minha lista</a></li> */}
      </ul>
    </nav>
  );
}

export default Menu;
