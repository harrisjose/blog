import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/home-hero'
import Footer from '../components/footer'
import Button from '../components/sexy-button'

const postContainer = css`
  max-width: 100%;
  width: 768px;
  line-height: 26px;
`

const postLink = css`
  text-decoration: none;
  box-shadow: none;
  color: inherit;
  line-height: 34px;
`

export default props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allMarkdownRemark.edges')

  return (
    <Layout children={props.children}>
      <div className="bg-haze">
        <Helmet title={siteTitle} />

        <Hero />

        <div className="container mx-auto mt-3 pb-4">
          <p className="mb-1 tmd">Recent Articles</p>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div
                key={node.fields.slug}
                css={postContainer}
                className={`mb-3`}
              >
                <h3>
                  <Link css={postLink} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <p className="tmd mb-1">{node.frontmatter.date}</p>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}

          <p className="flex flex-row flex-gap-4 mt-4 mb-2">
            <Button link="/articles" value="More Articles" />
          </p>
        </div>

        <hr className="divider" />
        <Footer />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
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
`
