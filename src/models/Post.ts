import { getModelForClass, prop } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Skill {
    @prop()
    @Field()
    value: string;
}

@ObjectType()
export class Post {
        @prop({ required: true })
        @Field()
        title!: string;

        @prop({ required: true })
        @Field()
        wysiwyg!: string

        @prop({ type: Skill })
        @Field(() => [Skill])
        skills!: Skill[]
}

export const PostModel = getModelForClass(Post);