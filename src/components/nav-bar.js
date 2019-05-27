import React from 'react';
import { Link } from 'gatsby';
import {css} from '@emotion/core';

const linkStyle = css`
  color: var(--gray);
`;

export default () => (
  <nav className="w-100">
    <div className="mx-auto container">
      <ul className="flex flex-gap-4">
        <li><Link to="/" css={linkStyle} activeStyle={{color: 'var(--navy)'}}>Home</Link></li>
        <li><Link to="/articles" css={linkStyle} activeStyle={{color: 'var(--navy)'}}>Articles</Link></li>
        <li><Link to="/about" css={linkStyle} activeStyle={{color: 'var(--navy)'}}>About</Link></li>
      </ul>
    </div>
  </nav>
);
