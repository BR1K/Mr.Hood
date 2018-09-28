import React          from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'rhood@mrhood.com',
      password: 'Hunter12'
    };
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(user) {
    this.props.login(user);
  }

  // handleDemoSubmit() {
  // this.props.login(this.demo).then(() => this.props.history.push('/'));
  // }

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
      <div className="main-login">
        <div className="center">
          <div className="loginPic">

          </div>
          <div className="login-form-box">
            <header className="login-form-box-header">
              <h1>Welcome to Mr.Hood!</h1>
            </header>
            <div className="login-form-input-box">
              <form onSubmit={this.handleSubmit} className="login-form">
                <br/>
                {this.renderErrors()}
                <div className="login-form-vertical">
                  <div>
                    <div className="form-group">
                      <label>
                        <div className="login-field-label">Email</div>
                        <div>
                          <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input-field"
                          />
                        </div>
                      </label>
                    </div>
                    <div className="form-group">
                      <label>
                        <div className="login-field-label">Password</div>
                        <div>
                          <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input-field"
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <footer className="login-form-footer">
                  <div className="login-button-box">
                    <button className="session-submit" onClick={() =>
                        this.demoLogin({
                        email: 'rhood@mrhood.com',
                        password: 'Hunter12',
                        })
                      }>Demo
                    </button>
                    <input className="session-submit" type="submit" value="Sign In" />
                  </div>
                </footer>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
