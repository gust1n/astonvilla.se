import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'

import styled from 'styled-components'

const BookingForm = styled.div`
  margin-bottom: 2em;

  .sbw-loader {
    width: 20px;
  }
`

export default class Contact extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.setAttribute("data-form-id", "5bf3c7f9a1051");
    script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
    script.async = true;

    document.getElementById("booking-form").appendChild(script);
  }

  render() {
    const postNode = {
      title: `Boka prisvärda gästrum - ${config.siteTitle}`,
    }

    const { body } = this.props.data.contentfulPage;

    return (
      <div>
        <Helmet>
          <title>{`Boka prisvärda gästrum - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postNode={postNode} pagePath="bokning" customTitle />

        <Container>
          <PageTitle small>Skicka din bokningsförfrågan här</PageTitle>
          <BookingForm id="booking-form" />
          <PageBody body={body} />
        </Container>
      </div>
    )
  }
}

export const query = graphql`
  query bookingQuery {
    contentfulPage(slug: { eq: "bokning" }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
