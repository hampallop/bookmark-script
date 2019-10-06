/* eslint-disable no-script-url */
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

const prefixRegex = new RegExp('javascript:[(]function[(][)][ ]*[{]')
const postfixRegex = new RegExp('[}][)][(][)]')

const generateBookmarkOutput = input => `javascript:(function() {${encodeURIComponent(input)}})()`
const decodeScript = input => decodeURIComponent(input.replace(prefixRegex, '').replace(postfixRegex, ''))

function IndexPage() {
  const [input, setInput] = React.useState('')
  const [scriptName, setScriptName] = React.useState('')
  const [isDecode, setIsDecode] = React.useState(false)

  const [decodeInput, setDecodeInput] = React.useState('')

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
          <a id="test" href={generateBookmarkOutput(input)}>
            {scriptName !== '' ? scriptName : 'bookmark script'}
          </a>
        </output>
      </InputGroup>

      <br />
      <InputGroup>
        <Label htmlFor="decode">Decode script (editing script): </Label>
        <input
          id="decode"
          name="is-develop"
          type="checkbox"
          checked={isDecode}
          onChange={e => setIsDecode(e.target.checked)}
        />
      </InputGroup>

      {isDecode ? (
        <>
          <Label htmlFor="script-input">Input: </Label>
          <textarea
            name="decoding-script"
            id="decoding-script"
            rows="7"
            css={css`
              width: 100%;
            `}
            placeholder="javascript:(function() {console.log('Hello%20world')})()"
            value={decodeInput}
            onChange={e => setDecodeInput(e.target.value)}
          />
          <Label htmlFor="decoded-output">Output: </Label>
          <output htmlFor="decoding-script">
            <textarea
              name="decoded-output"
              id="decoded-output"
              rows="7"
              readOnly
              css={css`
                width: 100%;
                margin-bottom: 2rem;
              `}
              placeholder="console.log('Hello world')"
              value={decodeScript(decodeInput)}
            />
          </output>
        </>
      ) : (
        <>
          <Label htmlFor="script-input">Input: </Label>
          <textarea
            name="script-input"
            id="script-input"
            rows="7"
            css={css`
              width: 100%;
            `}
            placeholder="put your lovely JavaScript here"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <Label htmlFor="script-output">Output: </Label>
          <output htmlFor="script-input">
            <textarea
              name="script-output"
              id="script-output"
              rows="7"
              readOnly
              css={css`
                width: 100%;
                margin-bottom: 2rem;
              `}
              placeholder="your output script"
              value={generateBookmarkOutput(input)}
            />
          </output>
        </>
      )}
    </Layout>
  )
}

export default IndexPage
