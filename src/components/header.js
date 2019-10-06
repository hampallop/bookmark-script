import {Link as GatsbyLink} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

const Link = styled(GatsbyLink)`
  color: #111;
  text-decoration: none;
`
const HeaderTitle = styled.h1`
  text-align: center;
  margin: 0;
  padding: 1rem 0;
`
const HeaderContainer = styled.header`
  margin-bottom: 1.45rem;
`

const Header = ({siteTitle}) => (
  <HeaderContainer>
    <div>
      <HeaderTitle>
        <Link to="/">{siteTitle}</Link>
      </HeaderTitle>
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
