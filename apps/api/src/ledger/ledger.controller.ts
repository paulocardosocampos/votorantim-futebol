import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { LedgerService } from './ledger.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('ledger')
export class LedgerController {
    constructor(private ledgerService: LedgerService) { }

    @Get('extrato')
    getExtrato(@Request() req: any) {
        return this.ledgerService.getHistory(req.user.userId);
    }
}
