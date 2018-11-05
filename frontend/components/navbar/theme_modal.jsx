import React from 'react';

class ThemeModal extends React.Component {

  constructor(props) {
    super(props);
    this.themes = this.themes.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.state = {
      isHovering: false,
      currentTheme: 'Dark',
      themes: {
        Light: {
          'background-color': 'white',
          'color': 'black',
          'shadow': '0 0 30px rgba(0,0,0,0.1)',
          'border': '1px solid #eee',
          'row-hover': '#eee',
          'trade-input': '#eee',
          'trade-input-hover': '1px solid #171718',
          'theme-background': '#1b1b1d',
          'theme-color': 'white',
          'theme-row-hover': '#161617',
        },
        Dark: {
          'background-color': '#1b1b1d',
          'color': 'white',
          'shadow': '0 0 4px 1px rgba(0,0,0,.01), 0 3px 24px rgba(0,0,0,0.6)',
          'border': '1px solid #0e0d0d',
          'row-hover': '#161617',
          'trade-input': '#171718',
          'trade-input-hover': '1px solid #8c8c87',
          'theme-background': 'white',
          'theme-color': 'black',
          'theme-row-hover': '#eee',
        },
      },
    };
  }

  componentDidMount() {
    this.setTheme();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentTheme !== prevState.currentTheme) {
      this.setTheme();
    }
  }

  themes() {
    let theme;
    if (this.state.currentTheme === 'Light') {
      theme = 'Dark';
    } else {
      theme = 'Light';
    }
    return (
      <div className="themes">
        <div className="theme" onClick={() => this.toggleTheme(theme)}>{theme} Theme</div>
      </div>
    )
  }

  setTheme() {
    let theme = this.state.themes[this.state.currentTheme];
    let root = document.documentElement;

    Object.keys(theme).forEach((key) => {
      let cssKey = `--${key}`;
      let cssValue = theme[key];
      root.style.setProperty(cssKey, cssValue);
    });
  }

  toggleTheme(theme) {
    this.setState({ currentTheme: theme });
  }

  render() {
    return (
      <h3 className="navbar-link theme-modal">
        Theme
        {this.themes()}
      </h3>
    )
  }
}

export default ThemeModal;
