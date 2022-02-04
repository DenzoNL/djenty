import { Injectable } from '@nestjs/common';

@Injectable()
export class DjentyService {
  getHello(): string {
    return 'Hello World!';
  }
}
