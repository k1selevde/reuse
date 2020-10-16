const graphql = require('graphql')

const {GraphQLObjectType,GraphQLString, GraphQLSchema, GraphQLID,GraphQLInt, GraphQLList} = graphql;
const Movies = require('../server/models/movie')
const Directors = require('../server/models/director')


/*
 const movies = [
     { id: '1' , name: 'Pulp' , genre: 'Crime', directorId: '1'},
     { id: '2' , name: 'Pulp2' , genre: 'Crime2', directorId: '2'},
     { id: 3 , name: 'Pulp4' , genre: 'Crime4', directorId: '3'},
     { id: 4 , name: 'Pulwewp4' , genre: 'grimm', directorId: '1'},
     { id: 5 , name: 'Puqweqwlp4' , genre: 'grin', directorId: '1'},
     { id: 6 , name: 'Pwulp4' , genre: 'graer', directorId: '2'},
     { id: 7 , name: 'wew' , genre: 'erewrer', directorId: '1'},
 ]

const directors = [
    {id: '1', name: 'Quentin2', age: 55}, //5f89703a3d933177a1afb4e8
    {id: '2', name: 'Quentin3', age: 51}, //5f8970873d933177a1afb4e9
    {id: '3', name: 'Quentin4', age: 31}, //5f8970a63d933177a1afb4ea
    {id: '4', name: 'Quentin5', age: 131}, //5f8970c83d933177a1afb4eb
]
*/


const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: {type: GraphQLID },
        name: {type: GraphQLString },
        age: {type: GraphQLInt},
        movies: {
            type: GraphQLList(MovieType),
            resolve(parent, args) {
                return Movies.find({ directorId: parent.id});
            }
        }
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
                return Directors.findById(parent.directorId)
            }
        }
    })
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addDirector: {
            type: DirectorType,
            args: {
                name: { type: GraphQLString},
                age: {type: GraphQLInt},
            },
            resolve(parent, args) {
              const director = new Directors({
                  name: args.name,
                  age: args.age
              })
                return director.save();
            },
        },
        addMovie: {
            type: MovieType,
            args: {
                name: { type: GraphQLString},
                genre: {type: GraphQLString},
                directorId: {type: GraphQLString},
            },
            resolve(parent, args) {
                const movie = new Movies({
                    name: args.name,
                    genre: args.genre,
                    directorId: args.directorId,
                })
                return movie.save()
            }
        }
    },
})


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: {type: GraphQLID} },
            resolve(parent, args) {
                return Movies.findById(args.id)
                // return movies.find(movie => movie.id == args.id)
            }
        },
        director: {
            type: DirectorType,
            args: {id: {type: GraphQLID} },
            resolve(parent, args) {
                return Directors.findById(args.id)
                // return directors.find(director => director.id == args.id)
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            args: {id: {type: GraphQLID} },
            resolve(parent, args) {
                return Movies.find({})
            }
        },
        directors: {
            type: new GraphQLList(DirectorType),
            args: {id: {type: GraphQLID} },
            resolve(parent, args) {
                return Directors.find({})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
})