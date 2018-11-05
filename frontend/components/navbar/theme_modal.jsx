import React from 'react';

class ThemeModal extends React.Component {

  constructor(props) {
    super(props);
    // this.themes = this.themes.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.state = {
      isHovering: false,
      currentTheme: 'Dark',
      themes: {
        Light: {
          'background-color': '#fff',
          'color': 'black',
          'shadow': '0 0 30px rgba(0,0,0,0.1)',
          'border': '1px solid #f4f4f5',
          'row-hover': '#eee',
          'trade-input': '#eee',
          'trade-input-hover': '1px solid #cbcbcd',
          'theme-background': '#1b1b1d',
          'theme-color': 'white',
          'tag-background': '#e6f9f3',
        },
        Dark: {
          'background-color': '#1b1b1d',
          'color': '#fff',
          'shadow': '0 0 4px 1px rgba(0,0,0,.01), 0 3px 24px rgba(0,0,0,0.6)',
          'border': '1px solid #0e0d0d',
          'row-hover': '#161617',
          'trade-input': '#171718',
          'trade-input-hover': '1px solid #8c8c87',
          'theme-background': '#fff',
          'theme-color': 'black',
          'tag-background': '#182b27',
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

  // themes() {
  //   let theme;
  //   if (this.state.currentTheme === 'Light') {
  //     theme = 'Dark';
  //   } else {
  //     theme = 'Light';
  //   }
  //   return (
  //     <div className="themes">
  //       <div className="theme" onClick={() => this.toggleTheme(theme)}>{theme} Theme</div>
  //     </div>
  //   )
  // }

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
    let theme;
    if (this.state.currentTheme === 'Dark') {
      theme = 'Light';
    } else {
      theme = 'Dark';
    }

    return (
      <h3 className="navbar-link theme-modal" onClick={() => this.toggleTheme(theme)}>
        Theme
      </h3>
    )
  }
}

export default ThemeModal;
