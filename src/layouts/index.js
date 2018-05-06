import React from 'react';
import 'fractures/dist/fractures.css';
import './highlight.css';
import './index.css';

class Template extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <div>
        {children()}
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
