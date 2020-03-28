import React, {Component} from 'react';
import './App.css';

const headerStyle = {
  color: "#91ecda"
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  toggleMenu = () => {
    this.setState({menuOpen: !menuOpen})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={headerStyle}>Conscious Soul</h1>
          <p>Food that awakens</p>
          <h2 onClick={this.toggleMenu}>MENU</h2>
          {this.state.menuOpen && <p>Menu will go here</p>}
        </header>
      </div>
    );
  }
}

export default App;
