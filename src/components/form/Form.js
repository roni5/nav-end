import React from 'react';
import styled from 'styled-components';
import Input from './Input';
// const styles = {
//   border: 'solid 2px',
//   padding: '20px'
// };style={Styles}
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 2px;
  padding: 20px;
`;

class Form extends React.Component {
  state = {
    isValid: true
  };
  validForm = () => {
    const keys = Object.keys(this.state);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === 'isValid') {
        // filtering away `isValid`, this belongs to the form, as we only want to look at input elements
        continue;
      }
      if (!this.state[keys[i]]) {
        return false;
      }
    }
    return true;
  };
  notify = (name, isValid) => {
    this.setState({ [name]: isValid }, () => {
      // this happens after the first `setState`
      this.setState({
        isValid: this.validForm()
      });
    });
  };
  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="Pin">Pin:</label>
          <Input
            pattern="^[0-9]{2,3}$"
            errMessage="Must contain 2-3 digits"
            desc="2-3  numbers"
            name="Pin"
            notify={this.notify}
            title="custom inbox"
          />
          <label htmlFor="Password">Password:</label>
          <Input // ^[a-zA-Z][a-zA-Z0-9_]+$
            pattern="^[a-zA-Z ][a-zA-Z0-9_]{5,10}$"
            errMessage="Must contain 5-10
           characters"
            desc="5-10
           characters"
            name="Password"
            notify={this.notify}
            title="PassWord inbox"
          />
        </div>
        <button disabled={!this.state.isValid}>Submit</button>
      </FormContainer>
    );
  }
}
export default Form;
