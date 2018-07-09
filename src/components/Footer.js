import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 1em 0 1.6em;
  margin: 0 3em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  font-size: 12px;
  text-transform: uppercase;
  color: #999;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <span>Aston Villa Hotell</span>
      </Item>
      <Item>
        <span>Askimsgatan 10, 413 19, Göteborg</span>
      </Item>
      <Item>
        <span>Tel +46 31 41 41 40</span>
      </Item>
      <Item>
        <span>info@astonvilla.se</span>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
