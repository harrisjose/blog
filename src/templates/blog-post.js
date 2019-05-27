import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import {css} from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/footer';
import NavBar from '../components/nav-bar';

const title = css`
  font-size: 1.8em;
  margin-bottom: 5px;
`;

const titleSubtext = css`
  font-size: 0.8em;
  color: var(--charcoal);
`;

const content = css`
  max-width: 100%;
  width: 768px;

  & h2, & h3 {
    margin: 32px 0 8px;
  }

  & p, & ul {
    font-size: 0.95em;
    line-height: 1.7;
    margin: 14px 0;
    text-align: justify;
  }

  & pre code {
    font-size: 0.9em;
    line-height: 1.7;
  }

  & ul {
    list-style-type: disc;
    padding-left: 40px;
  }

  & a {
    color: var(--blue);
    font-weight: 600;
    text-decoration: none;
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: inset 0 -2px 0px 0px rgba(87, 137, 212, 0.18);

    &:hover {
      box-shadow: none;
      background: rgba(87, 137, 212, 0.18);
    }
  }

  & blockquote {
    border-left: 3px solid var(--blue);
    padding: 0px 15px;
    color: #617692;
    font-style: italic;
  }
`;

export default props => {
  const post = get(props, 'data.markdownRemark');
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  return (
    <Layout children={props.children}>
      <div className="bg-haze pt-2 minvh-100">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}/>
        <NavBar/>

        <div className="mx-auto my-5 container">
          <h1 css={title}>{post.frontmatter.title}</h1>
          <p css={titleSubtext}>{post.frontmatter.date}</p>
          <div css={content} className={`mt-4 mb-3`} dangerouslySetInnerHTML={{__html: post.html}}/>
        </div>

        <hr className="divider"/>
        <Footer/>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
