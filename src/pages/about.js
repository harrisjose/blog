/* eslint react/no-unescaped-entities: 0 */
import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import {css} from 'emotion';

import Footer from '../components/footer';
import NavBar from '../components/nav-bar';

const aboutText = css`
  margin-bottom: 15px;
  font-size: 1em;
  line-height: 24px;

  & a {
    color:#4467A8;
    transition: all ease-in 400ms;
    &:hover {
      color: var(--green);
    }
  }
`;

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div className="bg-haze minvh-100 flex flex-column">
        <Helmet title={`About | ${siteTitle}`}/>

        <div className="bg-white pt-2">
          <NavBar/>
          <div className="my-5 mx-auto container">
            <h1>About</h1>
          </div>
        </div>
        <div className="my-5 mx-auto container grow-1 justify">
          <h3 className="mb-3">Hi, I'm Harris.</h3>
          <p className={aboutText}>
            I'm a software developer at <a href="https://twitter.com/zoho">Zoho</a>, where I work on web apps.
            I mostly use JavaScript these days but I've also dabbled in Python and C++.
          </p>
          <p className={aboutText}>
            These days I'm really interested in developer tooling and software infrastructure, and I occasionally write about all this on my blog.
          </p>
          <p className={aboutText}>
            Outside of tech, I'm a huge film nerd. You name it, I've seen it (Or, at least I have a reason not to have). Besides film, I love traveling and adore spicy food.
          </p>
          <h3 className="mt-4 mb-2">Contact</h3>
          <ul className={`${aboutText} ml-3 list-square`}>
            <li><a href="mailto:harrisjose@outlook.com">Email</a></li>
            <li><a href="https://twitter.com/theharrisjose">Twitter</a></li>
          </ul>
        </div>
        <div>
          <hr className="divider"/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
