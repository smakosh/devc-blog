import React from 'react'
import styled, { css } from 'styled-components'
import { Link, graphql } from 'gatsby'
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import coffeImage from '../../static/icon.svg'

export default ({ data: { posts } }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <div
      css={`
        width: 200px;
      `}
    >
      <Image />
    </div>
    <img src={coffeImage} alt="coffee" />
    {posts.edges.map(
      ({
        node: {
          excerpt,
          id,
          frontmatter: { title, slug },
        },
      }) => (
        <div key={id}>
          <Link to={slug}>
            <h2>{title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
      )
    )}
  </Layout>
)

export const postsQuery = graphql`
  query {
    posts: allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 20)
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
