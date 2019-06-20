// Input.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const InnerInput = styled.input`
  font-size: 20px;
`;
const InputContainer = styled.div`
  padding: 20px;
  border: solid 1px grey;
`;
const ErrorMessage = styled.div`
  padding: 20px;
  border: red;
  background: pink;
  color: white;
`;
const validate = (val, errMessage, pattern) => {
  const valid = new RegExp(pattern).test(val);
  return valid ? '' : errMessage;
};

class Input extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    errMessage: PropTypes.string
  };
  state = {
    error: '',
    data: ''
  };
  handleChange = (ev) => {
    const { errMessage, name, notify, pattern } = this.props;
    const error = validate(ev.target.value, errMessage, pattern);
    notify(name, error === '');
    this.setState({ data: ev.target.value, error });
  };
  render() {
    const { error, data } = this.state;
    const { desc } = this.props;
    return (
      <InputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div> {desc} </div>
        <InnerInput value={data} onChange={this.handleChange} {...this.props} />
      </InputContainer>
    );
  }
}
export default Input;
