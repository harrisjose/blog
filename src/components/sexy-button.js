import React from 'react';
import {css} from 'emotion';
import Link from 'gatsby-link';

const styles = css`
  text-decoration: none;
  cursor: pointer;
  color: var(--navy);

  & span:before, & span:after {
    display: block;
    position: absolute;
    bottom: 0px;
    z-index: 100;
    height: 2px;
    width: 50%;
    content: " ";
    background-color: var(--navy);
    transition: width 260ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  & span:hover::after, & span:hover::before {
    width: 0px;
  }

  & span:before {
    left: 0px;
  }
  & span:after {
    right: 0px;
  }

  & input[type="button"] {
    position: relative;
    display: inline-block;
    padding: 6px 12px;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid var(--yellow);
    color: var(--navy);
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 28px;
    cursor: pointer;
    outline: none;
  }
  & input[type="button"]:focus:not(:active) {
    outline: 1px dashed var(--gray);
  }

`;

function Button(props) {
  return (
    <Link to={props.link} className={styles}>
      <span className="relative inline-block">
        <input type="button" value={props.value}/>
      </span>
    </Link>
  );
}
export default Button;
