const graphql = require('graphql')

const {GraphQLObjectType,GraphQLString, GraphQLSchema, GraphQLID,GraphQLInt} = graphql;

 const movies = [
     { id: '1' , name: 'Pulp' , genre: 'Crime', directorId: '1'},
     { id: '2' , name: 'Pulp2' , genre: 'Crime2', directorId: '2'},
     { id: 3 , name: 'Pulp4' , genre: 'Crime4', directorId: '3'},
     { id: 4 , name: 'Pulp4' , genre: 'Crime4', directorId: '4'},
 ]

const directors = [
    {id: '1', name: 'Quentin2', age: 55},
    {id: '2', name: 'Quentin3', age: 51},
    {id: '3', name: 'Quentin4', age: 31},
    {id: '4', name: 'Quentin4', age: 131},
]


const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: {type: GraphQLID },
        name: {type: GraphQLString },
        age: {type: GraphQLInt},
    })
})


const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () =>  ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        genre: { type: GraphQLString},
        director: {
            type: DirectorType,
            resolve(parent, args) {
                return directors.find(director => director.id === parent.id)
            }
        }
    })
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: {type: GraphQLID} },
            resolve(parent, args) {
                return movies.find(movie => movie.id == args.id)
            }
        },
        director: {
            type: DirectorType,
            args: {id: {type: GraphQLID} },
            resolve(parent, args) {
                return directors.find(director => director.id == id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query
})