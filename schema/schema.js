const graphql = require('graphql');

const { GraphQLObjectType, GraphQlString } = graphql;

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQlString },
        name: { type: GraphQlString },
        genre: { type: GraphQlString },
    })

})

const Query = new GraphQLObjectType({
    name: 'Query',
    movie: {
        type: MovieType,
        args: { id: { type: GraphQlString }},
        // resolve(parent, args ) {
        resolve( ) {

        }

    }
})

module.exports = new graphql.GraphQLSchema({
    Query: Query,

})