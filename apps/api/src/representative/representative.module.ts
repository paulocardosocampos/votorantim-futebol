import { Module } from '@nestjs/common';
import { RepresentativeService } from './representative.service';
import { RepresentativeController } from './representative.controller';
import { PrismaService } from '../prisma.service';

@Module({
    providers: [RepresentativeService, PrismaService],
    controllers: [RepresentativeController],
})
export class RepresentativeModule { }
