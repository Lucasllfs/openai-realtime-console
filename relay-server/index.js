import { RealtimeRelay } from './lib/relay.js';
import dotenv from 'dotenv';
dotenv.config({ override: true });

//const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_KEY = 'sk-QEBLZVTuFVxFVc8S73brRHYZx2HupCriIxBIG32741T3BlbkFJ1pUDrOKo-zD2oZEeNkmVIqv-mryYb4xpOYElzvwV4A'
if (!OPENAI_API_KEY) {
  console.error(
    `Environment variable "OPENAI_API_KEY" is required.\n` +
      `Please set it in your .env file.`
  );
  process.exit(1);
}

const PORT = parseInt(process.env.PORT) || 8081;

const relay = new RealtimeRelay(OPENAI_API_KEY);
relay.listen(PORT);
