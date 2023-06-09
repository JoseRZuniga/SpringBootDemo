import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class User{
    @Field()
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({type: 'date'})
    createAt = new Date();

    @Field(() => String)
    @Property({type: 'date', onUpdate: () => new Date() })
    updateAt = new Date();

    @Field()
    @Property({type: 'text', unique: true})
    username!: string;

    @Property({type: 'text'})
    password!: string;
}