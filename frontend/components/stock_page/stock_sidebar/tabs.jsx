import React from 'react';

class Headers extends React.Component {

  render() {
    let selected = this.props.selectedSection;
    let headers = this.props.sections.map((section, index) => {
      let title = section.title;
      let klass = '';
      if (index === selected) {
        klass = 'active';
      }

      return (
        <li
          key={index}
          className={klass}
          onClick={this.props.onTabChosen.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });
    return (
      <ul className='tab-header'>
        {headers}
      </ul>

    );
 }
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(tab) {
    this.setState({selectedSection: tab});
  }

  render() {
    let section = this.props.sections[this.state.selectedSection];

    return (
      <div>
        <div className='tabs'>

          <div className='tab-headers'>
            <Headers
              selectedSection={this.state.selectedSection}
              onTabChosen={this.selectTab}
              sections={this.props.sections}
            />
          </div>

          <div className='tab-content'>
            <article>
              {section.content}
            </article>
          </div>

        </div>
      </div>
    );
  }
}
