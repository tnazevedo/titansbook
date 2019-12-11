import React, {Component} from 'react';
import './Header.css';
import MeuPerfil from '../perfil/MeuPerfil';

import Title from '../title/Title';

class Header extends Component {


  render(){

    return (
      <header>
        <Title title ="facebook" ></Title>
        <MeuPerfil></MeuPerfil>
        

      </header>
    );
  }

}


export default Header;

