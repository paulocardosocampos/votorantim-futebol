import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePackageDto } from './dto/create-package.dto';

@Injectable()
export class EventsService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.eventPackage.findMany({
            where: { stock: { gt: 0 }, isActive: true },
            orderBy: { eventDate: 'asc' },
        });
    }

    async findOne(id: string) {
        return this.prisma.eventPackage.findUnique({
            where: { id },
        });
    }

    async create(dto: CreatePackageDto) {
        return this.prisma.eventPackage.create({
            data: {
                ...dto,
                eventDate: new Date(dto.eventDate),
            },
        });
    }

    async update(id: string, dto: any) {
        const { eventDate, ...rest } = dto;
        return this.prisma.eventPackage.update({
            where: { id },
            data: {
                ...rest,
                ...(eventDate && { eventDate: new Date(eventDate) }),
            },
        });
    }

    async updateStock(id: string, quantity: number) {
        return this.prisma.eventPackage.update({
            where: { id },
            data: {
                stock: {
                    increment: quantity,
                },
            },
        });
    }

    async remove(id: string) {
        return this.prisma.eventPackage.update({
            where: { id },
            data: { isActive: false }, // Soft delete or Hard delete? User briefing says "realizar ajustes", I'll do soft delete for safety in MVP.
        });
    }
}
