const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const packages = [
        {
            title: 'Final da Libertadores 2026',
            championship: 'CONMEBOL LIBERTADORES',
            teamMatch: 'Final - A Definir',
            eventDate: new Date('2026-11-21T20:00:00Z'),
            priceCoins: 5000,
            stock: 50,
            location: 'Estádio Monumental, Buenos Aires',
            description: 'Pacote completo para a final da maior competição do continente.',
            hasAirfare: true,
            hasHotel: true,
            hasTransfer: true,
            hasFood: true,
        },
        {
            title: 'Derby Paulista - Allianz Parque',
            championship: 'BRASILEIRÃO 2026',
            teamMatch: 'Palmeiras vs Corinthians',
            eventDate: new Date('2026-05-10T16:00:00Z'),
            priceCoins: 850,
            stock: 30,
            location: 'Allianz Parque, São Paulo',
            description: 'Assista ao maior clássico de São Paulo com visão privilegiada.',
            hasAirfare: false,
            hasHotel: false,
            hasTransfer: true,
            hasFood: true,
        },
        {
            title: 'Fla-Flu no Maracanã',
            championship: 'CARIOCA 2026',
            teamMatch: 'Flamengo vs Fluminense',
            eventDate: new Date('2026-04-12T18:00:00Z'),
            priceCoins: 750,
            stock: 20,
            location: 'Maracanã, Rio de Janeiro',
            description: 'Viva a emoção do clássico mais charmoso do Brasil no templo do futebol.',
            hasAirfare: false,
            hasHotel: false,
            hasTransfer: false,
            hasFood: true,
        }
    ];

    console.log('Seed started...');
    for (const pkg of packages) {
        await prisma.eventPackage.create({ data: pkg });
    }
    console.log('Seed finished!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
