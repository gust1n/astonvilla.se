import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: auto;
  margin: 0 auto;
  padding: 2em 0 1em;
`

const Logo = props => {
  return <a href="/"><Image src="/logos/logo.jpg" /></a>
}

export default Logo
