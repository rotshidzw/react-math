import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <input className="Input" type="number" placeholder="0" />
    );
  }
}

export default Input;