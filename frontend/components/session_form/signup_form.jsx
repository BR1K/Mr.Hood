import React          from 'react';
import { withRouter, Link } from 'react-router-dom';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      buying_power: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <div className="signup-page-bar-box">
          <div className="signup-page-bar">
            <Link to="/">
              <img className="logo-image" src={window.logo} />
            </Link>
            <div className="signup-bar-image"></div>
          </div>
        </div>
        <div className="signup-content">
          <form onSubmit={this.handleSubmit} className="signup-form">
            <div className="signup-form-head-box">
              <div className="signup-form-head">
                <h1 className="signup-header">
                  Make Your Money Move
                </h1>
                <h2 className="signup-subheader">
                  Mr.Hood lets you invest in companies you love, commission-free.
                </h2>
              </div>
            </div>
            {this.renderErrors()}
            <div className="signup-form-body">
              <div className="signup-form-input-box">
                <div className="signup-row">
                  <div className="signup-input-left">
                    <input type="text"
                      value={this.state.first_name}
                      onChange={this.update('first_name')}
                      className="signup-firstname-input"
                      placeholder="First name"
                    />
                  </div>
                  <div className="signup-input-right">
                    <input type="text"
                      value={this.state.last_name}
                      onChange={this.update('last_name')}
                      className="signup-lastname-input"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="signup-row">
                  <div className="signup-input-field-box">
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="signup-input"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="signup-row">
                  <div className="signup-input-field-box">
                    <input type="text"
                      value={this.state.username}
                      onChange={this.update('username')}
                      className="signup-input"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="signup-row">
                  <div className="signup-input-field-box">
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="signup-input"
                      placeholder="Password (min. 6 characters)"
                    />
                  </div>
                </div>
                <div className="signup-row">
                  <div className="signup-input-field-box">
                    <input type="text"
                      value={this.state.buying_power}
                      onChange={this.update('buying_power')}
                      className="signup-input"
                      placeholder="Buying Power"
                    />
                  </div>
                </div>
              </div>
              <div className="signup-sidebar-wrapper">
                <input className="signup-submit" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
