import mysql from "mysql2/promise";

type EarlyAccessMeta = {
  ip?: string | null;
  userAgent?: string | null;
};

let pool: mysql.Pool | null = null;

function getPool(): mysql.Pool | null {
  const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
  if (!MYSQL_HOST || !MYSQL_USER || !MYSQL_DATABASE) return null;

  if (!pool) {
    pool = mysql.createPool({
      host: MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT || 3306),
      user: MYSQL_USER,
      password: MYSQL_PASSWORD || "",
      database: MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 5,
      enableKeepAlive: true,
    });
  }
  return pool;
}

export async function insertEarlyAccess(
  email: string,
  meta: EarlyAccessMeta = {}
): Promise<{ persisted: boolean }> {
  const p = getPool();
  if (!p) {
    console.log(
      "[early-access] MYSQL_* env not set — submission not persisted:",
      { email, ...meta }
    );
    return { persisted: false };
  }

  await p.execute(
    `INSERT INTO early_access (email, ip, user_agent)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE
       ip = VALUES(ip),
       user_agent = VALUES(user_agent)`,
    [email, meta.ip ?? null, meta.userAgent ?? null]
  );
  return { persisted: true };
}
