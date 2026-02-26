const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const EMITTERS = [
    { cnpj: '01637895000132', name: 'Votorantim Cimentos S.A. - Matriz/SP' },
    { cnpj: '01637895002186', name: 'VOTORAN' },
    { cnpj: '01637895000566', name: 'Votorantim Cimentos S.A. - Filial/SP' },
    { cnpj: '10656452000180', name: 'Votorantim Cimentos N/NE S/A - Recife/PE' },
    { cnpj: '01637895018422', name: 'Votorantim Cimentos S.A. - Filial/MT' },
    { cnpj: '01637895010600', name: 'Votorantim Cimentos S.A. - Filial/PR' },
];

async function main() {
    console.log('Populando emissores autorizados...');
    for (const emitter of EMITTERS) {
        await prisma.allowedEmitter.upsert({
            where: { cnpj: emitter.cnpj },
            update: { name: emitter.name, active: true },
            create: { cnpj: emitter.cnpj, name: emitter.name },
        });
        console.log('OK:', emitter.name);
    }
    console.log('Concluido!', EMITTERS.length, 'emissores cadastrados.');
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(() => prisma.$disconnect());
