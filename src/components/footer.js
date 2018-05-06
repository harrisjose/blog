import React from 'react';
// Iimport {css} from 'emotion';

const FooterLink = props => {
  return (
    <a
      href={props.href}
      className="navy flex flex-gap-1 flex-ycenter"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

function Hero() {
  return (
    <div className="footer container mx-auto py-5 flex flex-between flex-ycenter">
      <ul className="flex flex-gap-3 flex-wrap">
        <li>
          <FooterLink href="https://github.com/harrisjose">
            github
          </FooterLink>
        </li>
        <li>
          <FooterLink href="https://twitter.com/theharrisjose">
            twitter
          </FooterLink>
        </li>
        <li>
          <FooterLink href="https://www.linkedin.com/in/harrisjose/">
            linkedin
          </FooterLink>
        </li>
        <li>
          <FooterLink href="mailto:harrisjose@outlook.com">
            email
          </FooterLink>
        </li>
      </ul>
      <p className="tmd grey copytext">2018 © Harris Jose</p>
    </div>
  );
}
export default Hero;
