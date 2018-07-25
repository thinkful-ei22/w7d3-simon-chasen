import React from 'react';
import generateMessage from './generateMessage';
import Button from './button';

export default class ButtonClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'It is certain'
    };
  }
  generateMessage(generateMessage) {
    this.setState({
      display: generateMessage
    });
  }
  render() {
    return (
      // <Button value={this.state.display} onClick={value => this.generateMessage(value)}/>
      <Button onClick={generateMessage}/>
    );
  }
}