import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.text = props.text;
    this.bgColor = props.bgColor;
    this.col = props.col;
  }

  render() {
    return (
      <button className={`Btn ${this.bgColor} ${this.col}`} type="button">
        { this.text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  col: PropTypes.string,
};

Button.defaultProps = {
  col: '',
  bgColor: 'Grey',
};

export default Button;
