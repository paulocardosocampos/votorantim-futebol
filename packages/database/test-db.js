const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.findFirst();
    if (!user) {
        console.log("No users found in database!");
        return;
    }
    console.log("Found user:", user.id);

    try {
        const invoice = await prisma.invoice.create({
            data: {
                accessKey: "35022615802431000149010010000000011000001239", // Changed last digit to be unique
                userId: user.id,
                coinsIssued: 100,
                status: "APPROVED",
                processedAt: new Date(),
            }
        });
        console.log("Invoice created successfully:", invoice.id);

        const ledger = await prisma.ledger.create({
            data: {
                userId: user.id,
                amount: 100,
                type: 'INVOICE_REWARD',
                description: 'Test invoice reward',
                relatedEntityId: invoice.id
            }
        });
        console.log("Ledger created successfully:", ledger.id);

    } catch (e) {
        console.error("Prisma error details:");
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
