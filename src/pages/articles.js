import React from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import {css} from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Footer from '../components/footer';
import NavBar from '../components/nav-bar';

const postContainer = css`
  max-width: 100%;
  width: 768px;
  line-height: 26px;
`;

const postLink = css`
  text-decoration: none;
  box-shadow: none;
  color: inherit;
  line-height: 34px;
`;

export default props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const posts = get(props, 'data.allMarkdownRemark.edges');

  return (
    <Layout children={props.children}>
      <div className="bg-haze minvh-100 flex flex-column">
        <Helmet title={`Articles | ${siteTitle}`}/>

        <div className="bg-white pt-2">
          <NavBar/>
          <div className="my-5 mx-auto container">
            <h1>Articles</h1>
          </div>
        </div>

        <div className="my-5 mx-auto container grow-1">
          {posts.map(({node}) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            return (
              <div key={node.fields.slug} className={`mb-4`} css={postContainer}>
                <h3>
                  <Link to={node.fields.slug} css={postLink}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{__html: node.excerpt}}/>
              </div>
            );
          })}
        </div>

        <div>
          <hr className="divider"/>
          <Footer className="self-end"/>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ArticlesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
