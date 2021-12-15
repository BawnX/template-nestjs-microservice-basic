import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('')
@Controller({
  path: '',
  version: '1',
})
export default class SampleController {
  @Get()
  public getToken(): string {
    return 'Hola Mundo';
  }
}
