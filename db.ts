import { Pool } from "@vercel/postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('Missing DATABASE_URL environment variable');
}

export const db = new Pool({ connectionString });