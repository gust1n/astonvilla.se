import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

export default class Contact extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.setAttribute("data-form-id", "5ae97af62946e");
    script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
    script.async = true;

    document.getElementById("booking-form").appendChild(script);
  }

  render() {
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
          <div id="booking-form" />
        </Container>
      </div>
    )
  }
}
