const graphql = require('graphql');

const {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt,GraphQLBoolean} = graphql

const Movies = require('../models/movie')

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        genre: {type: GraphQLString},
        directorId: { type: GraphQLString },
        watched: { type: GraphQLBoolean},
        rate: { type: GraphQLInt }
    })
})


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addMovie: {
            type: MovieType,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                watched: {type: new GraphQLNonNull(GraphQLBoolean)},
                rate: {type: new GraphQLNonNull(GraphQLInt)},
                directorId: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, {title, genre, directorId, watched, rate}) {
                const movie = new Movies({
                    title,
                    genre,
                    watched,
                    rate,
                    directorId
                })
                return movie.save()
            }
        },
        updateMovie: {
            type: MovieType,
            args: {
                id: { type: GraphQLID },
                title: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                watched: {type: new GraphQLNonNull(GraphQLBoolean)},
                rate: {type: new GraphQLNonNull(GraphQLInt)},
                directorId: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, {id,title, genre, directorId, watched, rate}) {
                return Movies.findByIdAndUpdate(
                    id,
                    {$set: {title, genre, directorId,watched,rate}},
                    {new: true}
                )
            }
        },
        deleteMovie: {
            type: MovieType,
            args: {id: { type: GraphQLID }},
            resolve(parent,{id}) {
                return Movies.findByIdAndRemove(id);
            }
        }
    }
})


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: {id: { type: GraphQLID }},
            resolve(parent, args) {
                return Movies.findById(args.id)
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve: (_) => {
               return Movies.find({})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})

