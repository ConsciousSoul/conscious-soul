import React, { Component } from 'react';
import { Wrapper, Header, Title, Button, Menu, TitleWrapper } from '../styles/homepage/Homepage.css.js';

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    };
  }

  renderContent = () => {
    return this.state.menuOpen ? this.renderMenu() : this.renderTitle();
  }

  renderMenu = () => {
    return (
      <Menu>
        <Button onClick={() => this.setState({ menuOpen: false })}>Return to Main Page</Button>
        <p>Menu will go here</p>
      </Menu>
    );
  }

  renderTitle = () => {
    return (
      <TitleWrapper>
        <Title>Conscious Soul</Title>
        <p id="subtitle">Food that awakens</p>
        <Button
          onClick={() => this.setState({ menuOpen: true })}
        >MENU</Button>
      </TitleWrapper>
    )
  }

  render() {
    return (
      <Wrapper>
        <Header>
          {this.renderContent()}
        </Header>
      </Wrapper>
    );
  }
}

export default Homepage;
