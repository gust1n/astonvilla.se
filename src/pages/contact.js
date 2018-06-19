import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  const postNode = {
    title: `Boka prisvärda gästrum - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Boka prisvärda gästrum - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="bokning" customTitle />

      <Container>
        <PageTitle small>Skicka din bokningsförfrågan här</PageTitle>
        <ContactForm />
      </Container>
    </div>
  )
}

export default Contact