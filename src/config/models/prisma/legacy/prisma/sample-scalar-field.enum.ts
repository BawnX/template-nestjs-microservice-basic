import { registerEnumType } from '@nestjs/graphql';

export enum SampleScalarFieldEnum {
    id = "id",
    description = "description",
    name = "name"
}


registerEnumType(SampleScalarFieldEnum, { name: 'SampleScalarFieldEnum', description: undefined })
