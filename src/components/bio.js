// eslint react/jsx-child-element-spacing: 0
import React from 'react';

import profilePic from './profile-pic.jpg';

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img
          src={profilePic}
          alt="Kyle Mathews"
        />Written by <strong>Harris Jose</strong> who lives and works in San
        Francisco building useful things.{' '}
        <a href="https://twitter.com/kylemathews">
          You should follow him on Twitter
        </a>
      </p>
    );
  }
}

export default Bio;
