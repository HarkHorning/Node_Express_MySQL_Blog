import mysql, { Pool, PoolConnection } from 'mysql2/promise';
dotenv.config()
const { host, user, password, db } = process.env;

export class Connection {
  private static instance: Connection;
  private pool: Pool;

  private constructor() {
    console.log('Creating MySQLPoolSingleton instance'); // Add this line
    // Set up your MySQL connection pool parameters
    const poolConfig: mysql.PoolOptions = {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        idleTimeout: 5000,
        queueLimit: 0,
    };

    this.pool = mysql.createPool(poolConfig);
  }

  public static getInstance(): Connection {
    if (!Connection.instance) {
      Connection.instance = new Connection();
    }

    return Connection.instance;
  }

  public async getConnection(): Promise<PoolConnection> {
    return this.pool.getConnection();
  }

  // You can add other methods or configurations as needed

  public async closePool(): Promise<void> {
    await this.pool.end();
  }
}