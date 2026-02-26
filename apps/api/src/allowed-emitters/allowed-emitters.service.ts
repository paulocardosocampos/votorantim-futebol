import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AllowedEmittersService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.allowedEmitter.findMany({
            orderBy: [{ active: 'desc' }, { name: 'asc' }],
        });
    }

    async create(cnpj: string, name: string) {
        const cleanCnpj = cnpj.replace(/\D/g, '');
        if (cleanCnpj.length !== 14) {
            throw new BadRequestException('CNPJ deve conter 14 dígitos.');
        }

        const existing = await this.prisma.allowedEmitter.findUnique({ where: { cnpj: cleanCnpj } });
        if (existing) {
            throw new ConflictException(`CNPJ ${cnpj} já está cadastrado.`);
        }

        return this.prisma.allowedEmitter.create({
            data: { cnpj: cleanCnpj, name: name.trim() },
        });
    }

    async toggleActive(id: string) {
        const emitter = await this.prisma.allowedEmitter.findUnique({ where: { id } });
        if (!emitter) throw new NotFoundException('Emissor não encontrado.');

        return this.prisma.allowedEmitter.update({
            where: { id },
            data: { active: !emitter.active },
        });
    }

    async remove(id: string) {
        const emitter = await this.prisma.allowedEmitter.findUnique({ where: { id } });
        if (!emitter) throw new NotFoundException('Emissor não encontrado.');

        return this.prisma.allowedEmitter.delete({ where: { id } });
    }

    /** Usado internamente pelo InvoiceService para validar emitentes */
    async isAllowed(cnpj: string): Promise<boolean> {
        const emitter = await this.prisma.allowedEmitter.findFirst({
            where: { cnpj, active: true },
        });
        return !!emitter;
    }
}
