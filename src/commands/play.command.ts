import { PlayDto } from '../dto/play.dto';
import {
  Command,
  DiscordTransformedCommand,
  Payload,
} from '@discord-nestjs/core';
import { Logger } from '@nestjs/common';

@Command({
  name: 'play',
  description: 'Plays a song from YouTube.',
})
export class PlayCommand implements DiscordTransformedCommand<PlayDto> {
  private readonly logger = new Logger(PlayCommand.name);

  handler(@Payload() dto: PlayDto): string {
    this.logger.log(`Attemping to play ${dto.song}`);
    return `Playing ${dto.song}`;
  }
}
