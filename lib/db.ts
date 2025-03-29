// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

declare global {
    // This prevents TypeScript from throwing errors on the global object
    // due to multiple instances of PrismaClient in development
    let prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({
    log: ['query'], // optional, helps in debugging by logging queries in development
});

// Ensure we use the singleton instance in development, which is important in Next.js due to hot reloading
if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

export default prisma;