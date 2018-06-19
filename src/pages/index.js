import React from 'react'
import PageBody from '../components/PageBody'
import Container from '../components/Container'
import SEO from '../components/SEO'

const Index = ({ data }) => {
  const { body } = data.contentfulPage

  return (
    <div>
      <SEO />
      <Container>
        <PageBody big body={body} />
      </Container>
    </div>
  )
}

export const query = graphql`
  query indexQuery {
    contentfulPage(slug: { eq: "hem" }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default Index
