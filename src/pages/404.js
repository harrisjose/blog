import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const h1Style = css`
  border-right: 1px solid #333;
  font-weight: normal;
`

const linkStyle = css`
  font-size: 0.8em;
  text-decoration: none;
  color: #4467a8;
`

export default props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout children={props.children}>
      <div className="flex flex-center minh-viewport">
        <Helmet title={`Page Not Found | ${siteTitle}`} />
        <h1 className={`mr-3 pr-3 py-2`} css={h1Style}>
          404
        </h1>
        <div>
          <p className="mb-1">Umm, I dont think you should be here.</p>
          <p>
            <a css={linkStyle} href="/">
              Go Home
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
