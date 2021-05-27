import { Query, Resolver } from "type-graphql";
import { PostModel, Post } from "./models/Post";

@Resolver(Post)
export class PostResolver {
    @Query(() => [Post])
    async allPosts(): Promise<Post[]> {
        const posts = await PostModel.find()
        return posts
    }
}