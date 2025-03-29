// global.d.ts
import { PrismaClient } from "@prisma/client";

declare global {
    let prisma: PrismaClient | undefined;
}

export {};
