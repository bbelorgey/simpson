import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Homer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          working: props.working
        };
      }
    handleClick = () => {
        this.setState({ working: !this.state.working });
    };
  render() {
    const light = this.state.working ? 'on' : 'off';
    const stateLogo = this.state.working ? 'App-logo' : 'App-logo-acc';
    return (
      <div className="Homer">
        <img src={logo} className={stateLogo} alt="logo" />
        <button onClick={this.handleClick}
            className={light}>
            {light.toUpperCase()}
        </button>
        <figure className={light} />
      </div>
    );
  }
}

export default Homer;