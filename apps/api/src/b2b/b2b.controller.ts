import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { B2BService } from './b2b.service';
import { LinkSellerDto } from './dto/link-seller.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('b2b')
export class B2BController {
    constructor(private b2bService: B2BService) { }

    @Get('sellers')
    getSellers(@Request() req: any) {
        return this.b2bService.listSellers(req.user.userId);
    }

    @Post('link-seller')
    linkSeller(@Request() req: any, @Body() dto: LinkSellerDto) {
        return this.b2bService.linkSeller(req.user.userId, dto.sellerDocument);
    }
}
