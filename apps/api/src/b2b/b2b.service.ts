import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class B2BService {
    constructor(private prisma: PrismaService) { }

    async listSellers(storeId: string) {
        return this.prisma.user.findMany({
            where: { storeId },
            select: {
                id: true,
                name: true,
                document: true,
                coinBalance: true,
                createdAt: true,
            }
        });
    }

    async linkSeller(storeId: string, sellerDocument: string) {
        const seller = await this.prisma.user.findUnique({
            where: { document: sellerDocument },
        });

        if (!seller) {
            throw new NotFoundException('Vendedor não encontrado');
        }

        if (seller.role !== 'CPF_SELLER') {
            throw new BadRequestException('O documento informado não pertence a um vendedor');
        }

        return this.prisma.user.update({
            where: { id: seller.id },
            data: { storeId },
        });
    }
}
