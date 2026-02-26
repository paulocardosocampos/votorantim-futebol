import { Module, forwardRef } from '@nestjs/common';
import { EmployeeLinkService } from './employee-link.service';
import { EmployeeLinkController } from './employee-link.controller';
import { PrismaService } from '../prisma.service';
import { InvoiceModule } from '../invoice/invoice.module';

@Module({
    imports: [forwardRef(() => InvoiceModule)],
    controllers: [EmployeeLinkController],
    providers: [EmployeeLinkService, PrismaService],
    exports: [EmployeeLinkService],
})
export class EmployeeLinkModule { }
