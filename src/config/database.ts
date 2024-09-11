import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://vinicius4na_user:VOA6brq2D2trq6nLB1UwBup1ND9Bp66d@dpg-cr7qs3btq21c73aioa00-a.oregon-postgres.render.com/vinicius4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;