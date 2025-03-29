import { PrismaClient } from '@prisma/client';


const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const prisma = globalForPrisma.prisma ?? new PrismaClient();

// Prevent multiple Prisma instances in development mode (Next.js hot reload)
if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

export default prisma;
