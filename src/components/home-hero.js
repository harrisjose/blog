import React from 'react'
import { css } from '@emotion/core'

import NavBar from './nav-bar'

const descStyles = css`
  font-size: 20px;
  line-height: 30px;
`

const linkStyle = css`
  color: #4467a8;
  transition: color ease-in 400ms;
  &:hover {
    color: var(--yellow);
  }
`

export default () => (
  <div className="bg-white pt-2">
    <NavBar />
    <div className="mx-auto pt-2 container">
      <div className="flex flex-column pt-5 pb-5">
        <h1
          css={css`
            font-size: 40px;
          `}
        >
          Harris Jose
        </h1>
        <h3 className={`my-3 regular`} css={descStyles}>
          Software Engineer{' '}
          <a
            css={linkStyle}
            href="https://in.linkedin.com/company/facilio-inc"
            target="blank"
            rel="noopener noreferrer"
          >
            @Facilio
          </a>
          <br />
          JavaScript, Node.js and the open web.
        </h3>
      </div>
    </div>
  </div>
)
