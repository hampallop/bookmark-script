/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import {useStaticQuery, graphql} from 'gatsby'
import styled from '@emotion/styled'

import Header from './header'
import {mediaQuery} from './pattern'
import 'sanitize.css'
import './layout.css'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.5rem 1.45rem;
  padding-top: 0;

  ${mediaQuery('tablet')} {
    padding: 0px 4rem 1.45rem;
  }
`

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, powered by{' '}
          <a
            href="https://github.com/hamcompe/bookmark-script"
            target="_blank"
            rel="noreferrer noopener"
          >
            hamcompe
          </a>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
