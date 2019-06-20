import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Menubar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.textInput = React.createRef();
    // this.firstName = React.createRef();
    this.mBar = React.createRef();
    this.third = React.createRef();
  }
  focus() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  static defaultProps = {
    current: '',
    value: ''
  };

  static propTypes = {
    textInput: PropTypes.shape({
      current: PropTypes.instanceOf(HTMLInputElement),
      value: PropTypes.instanceOf(HTMLInputElement)
    })
  };

  onGreet = (e) => {
    e.preventDefault();
    console.log(this.mBar.current);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.third.current);
  };
  // takeout target it works
  //   currentTarget = actual event u attached
  //   el  = doc by Id  add listen bind to Parent form then switch
  //   event.target = th event that was clicked
  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.firstName.focus();
      switch (this.target) {
        case 'firstName':
          this.firstName.focus();
          break;
        case 'name':
          this.name.focus();
          // case 'mBar':
          //   this.submit.focus();
          break;
        default:
          this.textInput.focus();
      }
    }
  };

  render() {
    return (
      <div className="fieldset">
        <div className="link-button">
          <input type="text" ref={this.textInput} onKeyUp={this.onKeyUp} />
          <input
            type="text"
            ref={(input) => (this.firstName = input)}
            onKeyUp={this.onKeyUp.bind(this, 'firstName')}
          />
        </div>
        <form className="fieldset">
          <label htmlFor="namedInput">Name:</label>
          <input
            id="namedInput"
            type="text"
            defaultValue="cb way"
            ref={(input) => (this.name = input)}
            onKeyUp={this.onKeyUp.bind(this, 'name')}
          />
          <input
            type="text"
            defaultValue="send it"
            ref={this.third}
            onKeyUp={this.onKeyUp.bind(this, 'third')}
          />
          <input
            type="submit"
            value="submit"
            ref={(input) => (this.submit = input)}
            onKeyUp={this.onKeyUp.bind(this, 'submit')}
          />
        </form>
        <nav aria-label="University">
          <ul
            id="menubar1"
            defaultValue="menubar1"
            ref={this.mBar}
            onKeyUp={this.onKeyUp.bind(this, 'mBar')}
            onClick={(e) => this.onGreet(e)}
            role="menubar"
            aria-label="University"
          >
            <li role="none">
              <a
                role="menuitem"
                aria-haspopup="true"
                aria-expanded="false"
                // href="#"
                tabIndex="0"
                className={'input'}
                onMouseEnter={() => this.setState({ expanded: true })}
              >
                {/* {label} */}
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menubar;
