import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: center;
  }

  li {
    display: inline-block;
    margin-left: 2em;

    &:first-child {
      margin-left: 0;
    }
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #aaa;
    font-size: 13px;
    transition: all 0.2s;
    &:hover {
      border-bottom: 1px solid #ccc;
    }
  }
`

const activeLinkStyle = {
  borderBottom: '1px solid #aaa',
}

const Menu = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/" exact activeStyle={activeLinkStyle}>
            Hem
          </Link>
        </li>
        <li>
          <Link to="/rum/" activeStyle={activeLinkStyle}>
            Rum
          </Link>
        </li>
        <li>
          <Link to="/omgivning/" activeStyle={activeLinkStyle}>
            Omgivning
          </Link>
        </li>
        <li>
          <Link to="/hitta-hit/" activeStyle={activeLinkStyle}>
            Hitta hit
          </Link>
        </li>
        <li>
          <Link to="/bokning/" activeStyle={activeLinkStyle}>
            Boka rum
          </Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Menu
