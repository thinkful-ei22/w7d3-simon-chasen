import React from 'react';
import Header from './header';
import Button from './button';
import GenerateMessage from './generateMessage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      message: 'Hi'
    };
  }
  generateMessage(mess) {
    this.setState({
      message: mess
    });
  }

  displayMethod() {
    this.setState({
      display: true
    });
  }
  render() {
    const randomNumber = Math.floor(Math.random() * 20 + 1);

    if (this.state.display) {
      return (
        <div>
          <Header />
          <Button onClick={e => this.generateMessage(e)} />
          <GenerateMessage value={randomNumber} /> 
        </div>
      );
    } else if (!this.state.display) {
      return (
        // <Button value={this.state.display} onClick={value => this.generateMessage(value)}/>
        <div>
          <Header />
          <Button onClick={() => this.displayMethod()} />
        </div>
      );
    }
  }
}