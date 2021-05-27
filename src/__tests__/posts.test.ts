import { createTestClient } from "apollo-server-testing"
import { PostResolver } from 'src/PostResolver';
import { buildSchema } from "type-graphql";
import {ApolloServer} from "apollo-server"
import mongoose from "mongoose";

let apollo: null | ApolloServer;

// const CREATE_POST = gql`
//     mutation{ 
//         createPost(data:{
//             title: "Post crée par Constantin",
//             skills: ["JAVASCRIPT", "REACT"],
//             wysiwyg: "const testVariable = 'Variable de test' "
//         })
//     }
// `;


describe("Post Mutation test on with GraphQL", () => {
    
    beforeAll( async () => {
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
            ],
        });

        apollo = new ApolloServer({schema, playground: true});

    })
    
    afterAll( () => {
        
    })

    it("Should create the Post", async _=> {
    const {mutate} = createTestClient(apollo);
    const result = await mutate({mutation: CREATE_POST});
    expect(result)
})
})


