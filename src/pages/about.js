/* eslint react/no-unescaped-entities: 0 */
import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import {css} from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
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

const icon = css`
  width: 21px;
  height: 17px;
  fill: var(--navy);
  vertical-align: bottom;
  margin-right: 5px;
`;

export default props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  return (
    <Layout children={props.children}>
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
          <p css={aboutText}>
            I'm a software developer at <a href="https://in.linkedin.com/company/facilio-inc">Facilio</a>, where I work on web apps.
            I mostly use JavaScript these days but I ocassionally also dabble in Python. These days I'm really interested in developer tooling and software infrastructure, and I occasionally write about all this on my blog.
          </p>
          <p css={aboutText}>
          </p>
          <p css={aboutText}>
            Outside of tech, I'm a huge film nerd. You name it, I've seen it (or at least have a reason not to have). Besides films, I love traveling and adore spicy food.
          </p>
          <div className="mt-4 mb-2">
            <a className={`navy mr-3`} href="mailto:harrisjose@outlook.com">
              <svg css={icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>
              Email
            </a>
            <a className={`navy`} href="https://twitter.com/theharrisjose">
              <svg css={icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.72c.33 4.54.33 9.1.33 13.64 0 138.72-105.59 298.56-298.56 298.56-59.45 0-114.68-17.22-161.14-47.1 8.45.97 16.57 1.3 25.34 1.3 49.05 0 94.21-16.58 130.27-44.84a105.12 105.12 0 0 1-98.1-72.77 132.7 132.7 0 0 0 19.81 1.62c9.42 0 18.84-1.3 27.61-3.57A104.95 104.95 0 0 1 20.8 195.57v-1.3a105.68 105.68 0 0 0 47.43 13.32 104.86 104.86 0 0 1-46.78-87.39c0-19.49 5.2-37.36 14.3-52.95a298.27 298.27 0 0 0 216.36 109.8c-1.62-7.8-2.6-15.91-2.6-24.03 0-57.83 46.78-104.94 104.94-104.94 30.2 0 57.5 12.67 76.67 33.14a206.6 206.6 0 0 0 66.6-25.34 104.65 104.65 0 0 1-46.14 57.83c21.12-2.28 41.59-8.13 60.43-16.25a225.57 225.57 0 0 1-52.63 54.26z"/></svg>
              Twitter
            </a>
          </div>
        </div>
        <div>
          <hr className="divider"/>
          <Footer/>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
