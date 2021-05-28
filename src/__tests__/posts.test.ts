import { PostModel } from '../models/Post';
import { createTestClient } from "apollo-server-testing"
import { PostResolver } from '../PostResolver';
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql";
// import server from "../server"
import mongoose from "mongoose";


// const { query, mutate } = createTestClient(server);


const CREATE_POST = `
    createPost(data:{
        title: "Post crée par Constantin",
        skills: ["JAVASCRIPT", "REACT"],
        wysiwyg: "const testVariable = 'Variable de test' "
    }) {
        title  
    }
    
`;

let apollo:any

describe("Post Mutation test on with GraphQL", () => {

    beforeAll(async () => {
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
            resolvers: [
                PostResolver
            ]
        });

        apollo = new ApolloServer({ schema, playground: true });
    })
    
    it("Should list something from the DB", async () => {

        const posts = await PostModel.find()

        console.log(posts);

        const { mutate } = createTestClient(apollo);

        const result = await mutate({ mutation: CREATE_POST });

        console.log(result);

        expect(result).toEqual('toto');

    })

})

    // afterAll(() => {

    // })

    // it("Should create the Post", async _ => {
    //     const { mutate } = createTestClient(apollo);
    //     const result = await mutate({ mutation: CREATE_POST });
    //     expect(result)
    // })
// })
