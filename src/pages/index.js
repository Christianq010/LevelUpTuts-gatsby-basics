import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>Here is page 3</p>
    <Link to="/page-3/">Go to page 3</Link>
    <h1>Blog Index</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li>
          <Link 
            key={post.node.id} 
            to={post.node.frontmatter.path}
            >
              {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark ( 
      limit: 10
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { published: {eq: true} } }
    )
    {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
