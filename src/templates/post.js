import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({
  data: {
    post: {
      html,
      frontmatter: { title },
    },
  },
}) => (
  <Layout>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

export const postQuery = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
