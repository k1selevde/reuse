import React from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const NewMovie = (props) => (
    <Mutation
        mutation={gql(`
            mutation($title:String!, $genre: String!, $watched: Boolean!, $rate: Int!, $directorId: Int!  ) {
                  addMovie(title: $title, genre: $genre, watched: $watched, rate: $rate, directorId: $directorId) {
                    rate
                    title
                    genre
                    directorId
                    watched
                  }
                }
        `)}
    >
        {(addMovie, {loading, error, data}) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error...</p>
                let title,genre,watched,rate,directorId
                console.log(data)
                return (
                    <>
                        <h2>Current: </h2>
                        <form onSubmit={e => {
                            e.preventDefault()
                            addMovie({
                                variables: {
                                    title: title.value,
                                    genre: genre.value,
                                    directorId: Number(directorId.value),
                                    rate: Number(rate.value),
                                    watched: Boolean(watched.value)
                                }
                            })
                        }}>
                            <input
                                type='text'
                                ref={node => title = node}
                            />
                            <input
                                type='text'
                                ref={node => genre = node}
                            />
                            <input
                                type='text'
                                ref={node => directorId = node}
                            />
                            <input
                                type='checkbox'
                                ref={node => watched = node}
                            />
                            <input
                                type="text"
                                ref={node => rate = node}
                            />
                            <button type='submit'>ADD</button>

                        </form>
                    </>
                )
            }
        }

    </Mutation>
)

export default NewMovie;