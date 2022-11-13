import { ApolloServer } from "apollo-server";
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import { UserModule } from "./users/resolvers/index"
import { UserQueries } from "./users/resolvers/users.queries";
import { UserMutations } from "./users/resolvers/users.mutation";
const schema = loadSchemaSync('./src/**/schema/*.index.graphql', {
    loaders: [new GraphQLFileLoader()]
})

const server = new ApolloServer({
    schema,
    resolvers: {
        ...UserModule,
        ...{
            insert(_: any, id: String): String {
                return "insert plz"
            }
        }
    }
})

server.listen().then(url => {
    console.log(`Server running on ${url}`);
})
