import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { buildSchema } from "type-graphql";
import "reflect-metadata";
import { PostResolver } from "./PostResolver";

async function start () {

mongoose
    .connect('mongodb://127.0.0.1:27017/modussey', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
    })
.then(() => console.log('Connected to database'))
.catch((err: Error) => console.log(err));

    const schema = await buildSchema({
        resolvers: [PostResolver],
      });
      // Create the GraphQL server
    const server = new ApolloServer({
        schema,
        playground: true,
    });

    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

start()