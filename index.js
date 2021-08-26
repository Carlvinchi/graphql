import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema.js'
import resolvers from './resolvers.js'


const app = express();

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen(4000, () => console.log(`Server running now!`));