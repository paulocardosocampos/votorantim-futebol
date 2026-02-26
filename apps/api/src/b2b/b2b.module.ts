import { Module } from '@nestjs/common';
import { B2BService } from './b2b.service';
import { B2BController } from './b2b.controller';
import { PrismaService } from '../prisma.service';

@Module({
    providers: [B2BService, PrismaService],
    controllers: [B2BController],
})
export class B2BModule { }
