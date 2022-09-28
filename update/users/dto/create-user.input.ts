import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'first name of the user' })
  firstName: string;
  @Field(() => String, { description: 'last name of the user' })
  lastName: string;
  @Field(() => String, { description: 'Nickname of the user' })
  nickName: string;
  @Field(() => String, { description: 'honeNumbers of the user' })
  phoneNumbers: string;
  @Field(() => String, { description: 'address of the user' })
  address: string;
  @Field(() => String, { description: 'url of photo of the user' })
  photo: string;
}
