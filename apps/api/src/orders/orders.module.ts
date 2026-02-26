import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { LedgerModule } from '../ledger/ledger.module';
import { PrismaService } from '../prisma.service';

@Module({
    imports: [LedgerModule],
    providers: [OrdersService, PrismaService],
    controllers: [OrdersController],
})
export class OrdersModule { }
