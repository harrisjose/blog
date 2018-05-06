import React from 'react';
import Link from 'gatsby-link';
import {css} from 'emotion';

const linkStyle = css`
  color: var(--gray);
`;

const activeStyle = css`
  color: var(--navy);
`;

function NavBar() {
  return (
    <nav className="w-100">
      <div className="mx-auto container">
        <ul className="flex flex-gap-4">
          <li><Link to="/" className={linkStyle}>Home</Link></li>
          <li><Link to="/articles" className={linkStyle} activeClassName={activeStyle}>Articles</Link></li>
          <li><Link to="/about" className={linkStyle} activeClassName={activeStyle}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
