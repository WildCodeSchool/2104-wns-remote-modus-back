import { getModelForClass, prop } from '@typegoose/typegoose';
import { Field as GraphQLField, ObjectType as GraphQLType } from 'type-graphql';

//? GraphQlType (@ObjectType) permet d'exporter automatiquemer la classe d'en dessous et la marque en tant que type graphql
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

export const PostModel = getModelForClass(Post);