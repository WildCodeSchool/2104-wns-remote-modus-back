import { PostResolver } from "./PostResolver";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

const server = async () => {

  const schema = await buildSchema({
    resolvers: [PostResolver],
  });
  
  const apolloServer = new ApolloServer({
      schema,
      playground: true,
  });
  
  const { url } =  await apolloServer.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
  
  
}

export default server;