import React, {Component} from 'react';
import {Wrapper, Header, Title, MenuButton} from '../styles/homepage/Homepage.css.js';

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    };
  }

  openMenu = () => {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Title>Conscious Soul</Title>
          <p>Food that awakens</p>
          <MenuButton onClick={this.openMenu}>MENU</MenuButton>
          {this.state.menuOpen && <p>Menu will go here</p>}
        </Header>
      </Wrapper>
    );
  }
}

export default Homepage;
