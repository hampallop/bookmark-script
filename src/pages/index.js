/* eslint-disable no-script-url */
import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

const colors = {
  borderGrey: '#dadada',
}

const Label = styled.label`
  font-weight: 500;
`
const InputGroup = styled.div`
  margin-bottom: 0.25rem;
`
const Input = styled.input`
  border: 1px solid ${colors.borderGrey};
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
`
const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid ${colors.borderGrey};
  border-radius: 0.25rem;
  padding: 0.5rem;
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
        <Input
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
      <div
        css={css`
          margin-bottom: 2rem;
        `}
      >
        {isDecode ? (
          <>
            <Label htmlFor="script-input">Input: </Label>
            <Textarea
              name="decoding-script"
              id="decoding-script"
              rows="7"
              placeholder="javascript:(function() {console.log('Hello%20world')})()"
              value={decodeInput}
              onChange={e => setDecodeInput(e.target.value)}
            />
            <Label htmlFor="decoded-output">Output: </Label>
            <output htmlFor="decoding-script">
              <Textarea
                name="decoded-output"
                id="decoded-output"
                rows="7"
                readOnly
                placeholder="console.log('Hello world')"
                value={decodeScript(decodeInput)}
              />
            </output>
          </>
        ) : (
          <>
            <Label htmlFor="script-input">Input: </Label>
            <Textarea
              name="script-input"
              id="script-input"
              rows="7"
              placeholder="put your lovely JavaScript here"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <Label htmlFor="script-output">Output: </Label>
            <output htmlFor="script-input">
              <Textarea
                name="script-output"
                id="script-output"
                rows="7"
                readOnly
                placeholder="your output script"
                value={generateBookmarkOutput(input)}
              />
            </output>
          </>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
