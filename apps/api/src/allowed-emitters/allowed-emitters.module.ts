import { Module } from '@nestjs/common';
import { AllowedEmittersService } from './allowed-emitters.service';
import { AllowedEmittersController } from './allowed-emitters.controller';
import { PrismaService } from '../prisma.service';

@Module({
    controllers: [AllowedEmittersController],
    providers: [AllowedEmittersService, PrismaService],
    exports: [AllowedEmittersService],
})
export class AllowedEmittersModule { }
