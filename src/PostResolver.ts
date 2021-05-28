import { Arg, Query, Resolver, Mutation } from 'type-graphql';
import { PostModel, Post, inputAddPost } from './models/Post';

@Resolver(Post)

export class PostResolver {

    @Query(() => [Post])
    async allPosts(): Promise<Post[]> {
        const posts = await PostModel.find()
        return posts
    }
    // getUserById(@Args('id'))
    @Mutation(() => Post)
    async addPost(@Arg('data') data:inputAddPost): Promise<Post> {
        console.log(inputAddPost.title);
        const post = await PostModel.create(data)

        
        return post;
    }

}


// @Mutation(() => Post)
// async addPost(data:{ title: string, wysiwyg: string, skills: string[] }): Promise<Post> {
//     const post = await PostModel.create(
//         { title: string, wysiwyg: string, skills: string[] } as Post
//     )

//     return post;
// }