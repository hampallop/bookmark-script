import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Label = styled.label`
  font-weight: 500;
`
const InputGroup = styled.div`
  margin-bottom: 0.25rem;
`

const ouptutCalculation = input => `javascript:(function() {${encodeURIComponent(input)}})()`
function IndexPage() {
  const [input, setInput] = React.useState('')
  const [scriptName, setScriptName] = React.useState('')

  return (
    <Layout>
      <SEO title="Home" />
      <InputGroup>
        <Label htmlFor="script-name">Script name: </Label>
        <input
          type="text"
          name="script-name"
          id="script-name"
          value={scriptName}
          onChange={e => setScriptName(e.target.value)}
          placeholder="e.g., resize layout"
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="test">drag me to a bookmark bar: </Label>
        <output htmlFor="script-input script-name">
          <a id="test" href={ouptutCalculation(input)}>
            {scriptName !== '' ? scriptName : 'bookmark script'}
          </a>
        </output>
      </InputGroup>

      <br />
      <Label htmlFor="script-input">Input: </Label>
      <textarea
        name="script"
        id="script-input"
        rows="7"
        style={{width: '100%'}}
        placeholder="put your lovely JavaScript here"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Label htmlFor="script-output">Output: </Label>
      <output htmlFor="script-input">
        <textarea
          name="script"
          id="script-output"
          rows="7"
          readOnly
          style={{width: '100%'}}
          placeholder="your output script"
          value={ouptutCalculation(input)}
          css={css`
            margin-bottom: 2rem;
          `}
        />
      </output>
    </Layout>
  )
}

export default IndexPage
