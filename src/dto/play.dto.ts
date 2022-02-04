import { Param } from '@discord-nestjs/core';
import { IsUrl } from 'class-validator';

export class PlayDto {
  @IsUrl({
    protocols: ['http', 'https'],
    host_whitelist: ['youtube.com', 'youtu.be'],
    require_host: true,
    require_protocol: false,
  })
  @Param({
    name: 'song',
    description: 'URL of song. Currently, only YouTube links are supported.',
    required: true,
  })
  song: string;
}
