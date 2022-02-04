import { NestFactory } from '@nestjs/core';
import { DjentyModule } from './djenty.module';

async function bootstrap() {
  const app = await NestFactory.create(DjentyModule);
  await app.listen(3000);
}
bootstrap();
