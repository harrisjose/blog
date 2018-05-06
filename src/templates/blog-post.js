import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import {css} from 'emotion';

// import Bio from '../components/bio';
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

  & h2 {
    margin: 32px 0 8px;
  }

  & p, & ul {
    font-size: 0.95em;
    line-height: 1.7;
    margin: 14px 0;
    text-align: justify;
  }

  & pre code {
    font-size: 0.85em;
    line-height: 1.7;
  }

  & ul {
    list-style-type: disc;
    padding-left: 40px;
  }

  & a {
    color: var(--navy);
    font-weight: 600;
    text-decoration: none;
    transition: all ease-in-out 250ms;

    background-image: linear-gradient(transparent, transparent 5px, var(--navy) 5px, var(--navy));
    background-position: bottom;
    background-size: 100% 6px;
    background-repeat: repeat-x;

    &:hover {
      color: var(--blue);
      background-image: linear-gradient(transparent, transparent 4px, var(--blue) 4px, var(--blue));
    }
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const {previous, next} = this.props.pathContext;

    return (
      <div className="bg-haze pt-2 minvh-100">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}/>
        <NavBar/>

        <div className="mx-auto my-4 container">
          <h1 className={title}>{post.frontmatter.title}</h1>
          <p className={titleSubtext}>{post.frontmatter.date}</p>
          <div className={`${content} my-3`} dangerouslySetInnerHTML={{__html: post.html}}/>

          <ul className="mt-5 flex flex-between flex-gap-1">
            {previous && (
              <li>
                <span className="article-nav block tsm bold">Previous</span>
                <Link to={previous.fields.slug} rel="prev" className="blue">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <span className="article-nav block tsm bold right">Next</span>
                <Link to={next.fields.slug} rel="next" className="blue">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </div>

        <hr className="divider"/>
        <Footer/>
      </div>
    );
  }
}

export default BlogPostTemplate;

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
