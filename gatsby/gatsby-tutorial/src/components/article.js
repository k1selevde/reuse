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
                        banner {
                            fluid {
                                src
                            }
                        }
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
                <>
                    <div>{node.title}</div>
                    <div>{node.published}</div>
                    <img src={node.banner.fluid.src} alt=""/>
                </>
            ))
        )}
    />
)