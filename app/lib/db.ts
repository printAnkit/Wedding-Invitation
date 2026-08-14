import { neon } from "@neondatabase/serverless";

let sqlInstance: ReturnType<typeof neon> | null = null;

export const sql = (strings: TemplateStringsArray, ...values: any[]) => {
  if (!sqlInstance) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL is not defined in environment variables.");
    }
    sqlInstance = neon(url);
  }
  return sqlInstance(strings, ...values);
};
