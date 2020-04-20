import React, { Component } from 'react';
import { Wrapper, Header, Title, Button, TitleWrapper } from '../styles/homepage/Homepage.css.js';
import Menu from './Menu.js';

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    };
  }

  renderContent = () => {
    return this.state.menuOpen 
      ? <Menu closeMenu={this.closeMenu} /> 
      : this.renderTitle();
  }

  closeMenu = () => {
    this.setState({menuOpen: false});
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
