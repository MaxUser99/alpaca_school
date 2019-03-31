import React from "react";
import {connect} from "react-redux";
import {test} from "../store/appStore/actions";

class TestComponent extends React.Component{
  state = {
    message: ""
  };

  saveMsg = () => {
    const {setMessage} = this.props;
    const {message} = this.state;
    setMessage(message);
    this.setState({message: ""});
  };

  onMsgChange = ({target}) => {
    const {name, value} = target;
    this.setState({[name]: value});
  };

  render() {
    const {msg, errorMessage} = this.props;
    const {message} = this.state;
    return (
      <div>
        <p>hello, your message: {msg}</p>
        <label htmlFor="inp">Enter new message: </label>
        <input
          onChange={this.onMsgChange}
          value={message}
          id='inp'
          name='message'
          type="text"/>
        <button onClick={this.saveMsg}>Save message</button>
        <p>Error msg: <span style={{color: 'red'}}>{errorMessage}</span></p>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    msg: state.msg,
    errorMessage: state.errorMsg
  }
);

const mapDispatchToProps = dispatch => (
  {
    setMessage: (msg) => dispatch(test(msg)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
