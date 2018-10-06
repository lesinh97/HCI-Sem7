import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

/*
class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName : "",
      lName : "",
      Name : "",
      email: "",
      show : false
    };
  }

  handleFNameChange(e) {
    console.log(e);
    this.setState({fName: e.target.value});
  }

  handleLNameChange(e) {
    this.setState({lName: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handleClick(e){
    var fullName = this.state.fName + ' ' + this.state.lName;
    this.setState({Name:fullName});
    this.setState({show : !this.state.show})
  }
  render() {
    var style_hidden = this.state.show ? {display: "none"} : {};
    var style_show = this.state.show ? {} : {display: "none"};
    return(
      <div>

        <div id="hidden" style = {style_hidden}>
          <div className="container">
            <div id="hidden-row" className="row justify-content-center align-items-center">
              <div id="hidden-column" className="col-md-6">
                <div id="hidden-box" className="col-md-12">
                  <form id="hidden-form" className="form">
                  <h3 className="text-center text-info">Homework</h3>
                    <div className="form-group">
                      <label className="text-info">First name: </label>
                      <input type="text" id = "username" className ="form-control" value = {this.state.fName} onChange={this.handleFNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <label className="text-info">Last name: </label>
                      <input type="text" id ="username" className = "form-control" value = {this.state.lName} onChange={this.handleLNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <label className="text-info">Email: </label>
                      <input type="text" id ="username" className = "form-control" value = {this.state.email} onChange={this.handleEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <input type="button" onClick={this.handleClick.bind(this)} className="btn btn-info btn-md" value = "Submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id = "no-hidden" style = {style_show}>
          <div className="container">
            <div id="hidden-row" className="row justify-content-center align-items-center">
              <div id="hidden-column" className="col-md-6">
                <div id="hidden-box" className="col-md-12">
                  <form id="hidden-form" className="form">
                    <div className="form-group">
                      <input type="button" onClick={this.handleClick.bind(this)} value="Cancle" className="btn btn-info btn-md" />
                    </div>
                    <h3 className ="text-center text-info">Welcome {this.state.fName + this.state.lName} </h3>
                    <h4 className = "text-center text-info">with the email {this.state.email} </h4>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term = '',
      is_change: false
    };
    this.listItems = []
  }
  componentDidMount() {

  }
  static getDerivedStateFromProps(nextProps, value) {

  }

  onChange = (event) => {
    event.preventDefault();
    this.setState({term: event.targer.value});
  }

  onSubmit = (event) => {
    event.preventDefault():
    this.setState({ items: [...this.state.items, {name: this.state.term}] });
  }

  render() {
    const listItems = this.state.items.map(item, index) => <List key>
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<InputText/>, document.getElementById('state'))
});
