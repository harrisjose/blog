import React from 'react';
import {css} from 'emotion';

import NavBar from './nav-bar';

const descStyles = css`
  font-size: 20px;
  line-height: 30px;
`;

const linkStyle = css`
  color:#4467A8;
  transition: color ease-in 400ms;
  &:hover {
    color: var(--yellow);
  }
`;

function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto pt-2 container">
        <NavBar/>
        <div className="flex flex-column pt-5 pb-5">
          <h1 className={css`font-size: 40px;`}>
            Harris Jose
          </h1>
          <h3 className={`my-3 regular ${descStyles}`}>
            Software Engineer currently working
            {' '}
            <a className={linkStyle} href="https://twitter.com/zoho" target="blank" rel="noopener noreferrer">
              @Zoho
            </a>
            <br/>Loves Node.js and the Web.
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Hero;
