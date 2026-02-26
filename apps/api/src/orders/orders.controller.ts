import { Controller, Post, Get, Patch, Body, UseGuards, Request, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) { }

    @Post()
    create(@Request() req: any, @Body() dto: CreateOrderDto) {
        return this.ordersService.create(req.user.userId, dto);
    }

    @Get()
    list(@Request() req: any) {
        return this.ordersService.findByUser(req.user.userId);
    }

    // CMS Endpoints
    @Get('cms/all')
    findAll() {
        return this.ordersService.findAll();
    }

    @Patch('cms/:id/status')
    updateStatus(@Param('id') id: string, @Body('status') status: string) {
        return this.ordersService.updateStatus(id, status);
    }
}
