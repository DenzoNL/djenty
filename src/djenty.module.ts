import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Intents, Message } from 'discord.js';
import { DjentyController } from './djenty.controller';
import { DjentyService } from './djenty.service';
import configuration from './config/configuration';
import { CommandValidationFilter } from './filters/command-validation.filter';
import { TransformPipe, ValidationPipe } from '@discord-nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    DiscordModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get('discord.botToken'),
        commands: ['**/*.command.js'],
        discordClientOptions: {
          intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
        },
        useFilters: [CommandValidationFilter],
        usePipes: [TransformPipe, ValidationPipe],
        registerCommandOptions: [
          {
            forGuild: configService.get('discord.serverId'),
            allowFactory: (message: Message) =>
              !message.author.bot && message.content === '!deploy',
          },
        ],
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [DjentyController],
  providers: [DjentyService],
})
export class DjentyModule {}
