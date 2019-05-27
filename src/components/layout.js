import React from 'react';
import { Global, css } from '@emotion/core';

import 'fractures/dist/fractures.css';
import '../styles/highlight.css';
import '../styles/index.css';

// Hack to make custom variables work
const cssVars = css`
  :root {
    --red:#f3234a;
    --yellow:#ffd246;
    --mint:#d7f3d4;
    --navy:#1c3c5a;
    --light:#f7f8f8;
    --smoke:#d9dbdd;
    --gray:#aab0b5;
    --blue: #3274D6;
    --green: #2BB772;
    --haze: #F7F8F8;
    --charcoal: #666;
  }
`;

export default ({ children }) => (
  <div>
    <Global styles={cssVars}/>
    {children}
  </div>
)
