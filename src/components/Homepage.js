import React, {Component} from 'react';
import {Wrapper, Header, Title, MenuButton} from '../styles/homepage/Homepage.css.js';

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Title>Conscious Soul</Title>
          <p id="subtitle">Food that awakens</p>
          <MenuButton 
          onClick={() => this.setState({menuOpen: true})}
          >MENU</MenuButton>
          {this.state.menuOpen && <p>Menu will go here</p>}
        </Header>
      </Wrapper>
    );
  }
}

export default Homepage;
