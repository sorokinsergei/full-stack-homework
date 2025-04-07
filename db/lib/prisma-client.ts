import 'server-only'; // optional, but helps clarify this is used only server-side

import path from 'path';
import dotenv from 'dotenv';
import { PrismaClient } from './prisma';

// Load .env manually if not picked up by default
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

declare global {
  // Avoid reinitializing Prisma in development with HMR
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
