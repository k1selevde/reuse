import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Movies  = () => (
    <Query
        query={gql`
      query {
        movies {
            title
        }
      }
    `}
    >
        {({ loading, error, data }) => {
/*            for (let key in arguments[0])
                console.log(key, arguments[0][key]);
            console.log('data', data)*/
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
                <ul key='allUsers'>
                    {data.movies.map(movie => (<div>{movie.title}</div>))}
                    <p>Tear</p>
                </ul>
            );
        }}
    </Query>
)

export default Movies;