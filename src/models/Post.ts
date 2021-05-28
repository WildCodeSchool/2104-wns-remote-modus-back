import { getModelForClass, prop } from '@typegoose/typegoose';
import { Field as GraphQLField, ObjectType as GraphQLType, InputType as GraphQLInputType } from 'type-graphql';

@GraphQLType()
class Skill {
    @prop()
    @GraphQLField()
    value: string;
}

@GraphQLType()
export class Post {

    @prop({ required: true })
    @GraphQLField()
    title!: string;

    @prop({ required: true })
    @GraphQLField()
    wysiwyg!: string

    @prop({ type: Skill })
    @GraphQLField(() => [Skill])
    skills!: Skill[]
}

@GraphQLInputType()
export class inputAddPost {
    @GraphQLField()
    title!: string;

    @GraphQLField()
    wysiwyg!: string;

    @GraphQLField()
    skills!: string[];

}

export const PostModel = getModelForClass(Post);