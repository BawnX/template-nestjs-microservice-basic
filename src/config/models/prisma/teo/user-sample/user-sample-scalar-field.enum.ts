import { registerEnumType } from '@nestjs/graphql';

export enum UserSampleScalarFieldEnum {
    id = "id",
    description = "description",
    name = "name"
}


registerEnumType(UserSampleScalarFieldEnum, { name: 'UserSampleScalarFieldEnum', description: undefined })
