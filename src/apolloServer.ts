import { PostResolver } from "./PostResolver";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";


const schema = await buildSchema({
    resolvers: [PostResolver],
  });
  
  const apolloServer = new ApolloServer({
      schema,
      playground: true,
  });

  export default apolloServer;