import { Module, forwardRef } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { LedgerModule } from '../ledger/ledger.module';
import { PrismaService } from '../prisma.service';
import { EmployeeLinkModule } from '../employee-link/employee-link.module';
import { AllowedEmittersModule } from '../allowed-emitters/allowed-emitters.module';

@Module({
    imports: [LedgerModule, forwardRef(() => EmployeeLinkModule), AllowedEmittersModule],
    providers: [InvoiceService, PrismaService],
    controllers: [InvoiceController],
    exports: [InvoiceService],
})
export class InvoiceModule { }
