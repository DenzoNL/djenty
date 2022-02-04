import { Controller, Get } from '@nestjs/common';
import { DjentyService } from './djenty.service';

@Controller()
export class DjentyController {
  constructor(private readonly djenty: DjentyService) {}

  @Get()
  getHello(): string {
    return this.djenty.getHello();
  }
}
