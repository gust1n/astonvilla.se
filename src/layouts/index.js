import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import config from '../utils/siteConfig'
import '../styles/global'
import theme from '../styles/theme'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import favicon from '../images/favicon.ico'

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <link rel="icon" href={favicon} />
        <meta name="description" content={config.siteDescription} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteTitle} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <div className="siteContent">
          <Logo />
          <Menu />
          {children()}
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Template
