import React from 'react'
import { StaticQuery, graphql } from "gatsby"


export default () => (
    <StaticQuery
        query={graphql`
            {
                allContentfulArticle {
                    edges {
                      node {
                        title
                        published
                   
                      }
                    }
                  }
            }
        `}
        render={({
                     allContentfulArticle: {
                         edges
                     }
                 }) => (
            edges.map(({ node }) => (
                <div>{node.title}</div>
            ))
        )}
    />
)