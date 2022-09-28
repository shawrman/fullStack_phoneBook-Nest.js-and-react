import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the user' })
  userId: string;
  @Column()
  @Field(() => String, { description: 'first name of the user' })
  firstName: string;
  @Column()
  @Field(() => String, { description: 'last name of the user' })
  lastName: string;
  @Column()
  @Field(() => String, { description: 'Nickname of the user' })
  nickName: string;
  @Column()
  @Field(() => String, { description: 'Nickname of the user' })
  phoneNumbers: string;
  @Column()
  @Field(() => String, { description: 'address of the user' })
  address: string;
  @Column()
  @Field(() => String, { description: 'url of photo of the user' })
  photo: string;

}
